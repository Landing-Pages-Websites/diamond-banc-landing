// Route-local hardening for the Diamond Banc appraisal widget's dynamically
// injected contact form on /rolex. Pure DOM utilities — no React, no changes to
// the third-party widget service. Applied by RolexAppraisalEmbed through a
// MutationObserver scoped to #db-appraisal-root: whenever the widget renders the
// contact stage (identified by its "Reveal My Offer" control) we normalise the
// field contract, enforce validate-first submission, and guard against duplicate
// submits. Every operation is idempotent so repeated observer passes are safe.

// The control that marks the visible contact stage of the widget flow.
const REVEAL_LABEL = /reveal my offer/i;

// RFC-5322-lite: a single @, a dot-bearing domain, no whitespace. Rejects
// obvious typos ("a@b", "a b@c.com") without rejecting valid real addresses.
const EMAIL_PATTERN = "[^@\\s]+@[^@\\s]+\\.[^@\\s]{2,}";

// Exactly ten US digits, optionally in "(xxx) xxx-xxxx" style. Because the three
// groups are fixed length, nine or eleven digits both fail to match.
const PHONE_PATTERN = "\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}";

// US five-digit ZIP.
const ZIP_PATTERN = "\\d{5}";

// Reset the single-flight guard if a widget that disables its submit control
// never re-enables it (i.e. an unobserved failure), so the form is never locked.
const RESET_FALLBACK_MS = 12000;

type FieldRole = "name" | "email" | "phone" | "zip";

export interface SubmitGuardState {
  inFlight: boolean;
  sawDisabled: boolean;
  fallbackTimer: number | null;
  attached: WeakSet<HTMLFormElement>;
}

export function createGuardState(): SubmitGuardState {
  return { inFlight: false, sawDisabled: false, fallbackTimer: null, attached: new WeakSet() };
}

// Entry point invoked on every observer pass and once on mount.
export function hardenAppraisalForm(
  root: ParentNode,
  state: SubmitGuardState,
  signal: AbortSignal,
): void {
  const reveal = findRevealControl(root);
  if (!reveal) return;
  const form = reveal.closest("form");
  if (form) normaliseForm(form, state, signal);
  reconcileGuard(reveal, state);
}

// Clear any pending timer when the host component unmounts.
export function disposeGuardState(state: SubmitGuardState): void {
  clearFallback(state);
}

function normaliseForm(
  form: HTMLFormElement,
  state: SubmitGuardState,
  signal: AbortSignal,
): void {
  form.setAttribute("method", "post");
  collectFields(form).forEach((input, role) => applyField(role, input));
  attachSubmitGuard(form, state, signal);
}

function findRevealControl(root: ParentNode): HTMLElement | null {
  const selector = "button, input[type=submit], input[type=button], [role=button]";
  const candidates = root.querySelectorAll<HTMLElement>(selector);
  for (const el of Array.from(candidates)) {
    const label = (el.textContent ?? "") + " " + ((el as HTMLInputElement).value ?? "");
    if (REVEAL_LABEL.test(label)) return el;
  }
  return null;
}

function collectFields(form: HTMLFormElement): Map<FieldRole, HTMLInputElement> {
  const found = new Map<FieldRole, HTMLInputElement>();
  const unassigned: HTMLInputElement[] = [];
  form.querySelectorAll<HTMLInputElement>("input").forEach((input) => {
    if (isIgnorable(input)) return;
    const role = classify(input);
    if (role && !found.has(role)) found.set(role, input);
    else if (!role) unassigned.push(input);
  });
  if (!found.has("name") && unassigned.length === 1) found.set("name", unassigned[0]);
  return found;
}

function classify(input: HTMLInputElement): FieldRole | null {
  const sig = signature(input);
  if (input.type === "email" || /e-?mail/.test(sig)) return "email";
  if (input.type === "tel" || /phone|mobile|\btel\b/.test(sig)) return "phone";
  if (/\bzip\b|postal|post ?code/.test(sig)) return "zip";
  if (/name/.test(sig)) return "name";
  return null;
}

function signature(input: HTMLInputElement): string {
  return [
    input.name, input.id, input.placeholder, input.type,
    input.getAttribute("autocomplete") ?? "",
    input.getAttribute("aria-label") ?? "",
    labelText(input),
  ].join(" ").toLowerCase();
}

function labelText(input: HTMLInputElement): string {
  const doc = input.ownerDocument;
  let text = "";
  if (input.id) {
    const label = doc.querySelector<HTMLLabelElement>(`label[for="${CSS.escape(input.id)}"]`);
    if (label) text += " " + (label.textContent ?? "");
  }
  const wrapping = input.closest("label");
  if (wrapping) text += " " + (wrapping.textContent ?? "");
  return text;
}

function isIgnorable(input: HTMLInputElement): boolean {
  return ["hidden", "submit", "button", "checkbox", "radio", "file"].includes(input.type);
}

function applyField(role: FieldRole, input: HTMLInputElement): void {
  input.name = role;
  input.required = true;
  if (role === "email") applyPattern(input, "email", "email", EMAIL_PATTERN);
  else if (role === "phone") applyPattern(input, "numeric", "tel", PHONE_PATTERN);
  else if (role === "zip") applyPattern(input, "numeric", "postal-code", ZIP_PATTERN);
  else input.setAttribute("autocomplete", "name");
}

function applyPattern(
  input: HTMLInputElement,
  inputMode: string,
  autocomplete: string,
  pattern: string,
): void {
  input.setAttribute("inputmode", inputMode);
  input.setAttribute("autocomplete", autocomplete);
  input.pattern = pattern;
}

function attachSubmitGuard(
  form: HTMLFormElement,
  state: SubmitGuardState,
  signal: AbortSignal,
): void {
  if (state.attached.has(form)) return;
  state.attached.add(form);
  form.addEventListener(
    "submit",
    (event) => onSubmit(event, form, state),
    { capture: true, signal },
  );
}

function onSubmit(event: Event, form: HTMLFormElement, state: SubmitGuardState): void {
  if (!form.checkValidity()) {
    blockEvent(event);
    form.reportValidity();
    return;
  }
  if (state.inFlight) {
    blockEvent(event);
    return;
  }
  state.inFlight = true;
  state.sawDisabled = false;
  startFallback(state);
}

function blockEvent(event: Event): void {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// Detect a widget that disabled its submit control during an accepted submit and
// later re-enabled it — that transition means the submit failed, so re-open the
// gate. A form replaced by a success message removes the control and stays gated.
function reconcileGuard(reveal: HTMLElement, state: SubmitGuardState): void {
  if (!state.inFlight) return;
  if (isDisabled(reveal)) {
    state.sawDisabled = true;
    return;
  }
  if (state.sawDisabled) resetGuard(state);
}

function isDisabled(el: HTMLElement): boolean {
  if ((el as HTMLButtonElement).disabled) return true;
  return el.getAttribute("aria-disabled") === "true";
}

function startFallback(state: SubmitGuardState): void {
  clearFallback(state);
  state.fallbackTimer = window.setTimeout(() => resetGuard(state), RESET_FALLBACK_MS);
}

function resetGuard(state: SubmitGuardState): void {
  state.inFlight = false;
  state.sawDisabled = false;
  clearFallback(state);
}

function clearFallback(state: SubmitGuardState): void {
  if (state.fallbackTimer === null) return;
  clearTimeout(state.fallbackTimer);
  state.fallbackTimer = null;
}
