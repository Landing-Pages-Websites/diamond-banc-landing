"use client";

import { useEffect, useRef } from "react";
import { R_HERO } from "@/lib/rolex-content";
import {
  createGuardState,
  disposeGuardState,
  hardenAppraisalForm,
} from "@/components/rolex/hardenAppraisalForm";

interface MegaTagWindow extends Window {
  __DB_API_BASE?: string;
  MegaTag?: { trackEvent?: (event: string, data: Record<string, unknown>) => void };
  dataLayer?: Array<Record<string, unknown>>;
}

// Fire our own analytics once when the third-party widget signals success.
// Best-effort only: never throws, never blocks the widget's own behavior.
// Identical to the shared AppraisalEmbed instrumentation; the route-local copy
// exists only so the card heading can be Rolex-specific.
function useWidgetSuccessTracking(): void {
  const fired = useRef(false);

  useEffect(() => {
    const onMessage = (event: MessageEvent): void => {
      if (fired.current) return;
      const payload = JSON.stringify(event.data ?? "");
      if (!payload.includes("success") && !payload.includes("submitted")) return;
      fired.current = true;
      try {
        const w = window as MegaTagWindow;
        w.MegaTag?.trackEvent?.("form_submit", { form: "db_appraisal", page: "quote" });
        w.dataLayer?.push({ event: "form_submit", form: "db_appraisal" });
      } catch {
        // instrumentation is best-effort; swallow any error
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);
}

// Harden the widget's dynamically injected contact form: normalise the field
// contract (stable names, required flags, input patterns), enforce validate-first
// submission, and guard against duplicate submits. A single MutationObserver
// scoped to #db-appraisal-root re-applies the hardening each time the widget
// renders its contact stage, without touching the widget service itself.
function useContactFormHardening(): void {
  useEffect(() => {
    const root = document.getElementById("db-appraisal-root");
    if (!root) return;

    const controller = new AbortController();
    const state = createGuardState();
    const run = (): void => hardenAppraisalForm(root, state, controller.signal);

    // Watch for the contact stage being injected (childList/subtree) and for the
    // submit control's disabled state toggling (attributeFilter). The filter is
    // deliberately narrow so our own attribute writes (name, pattern, inputmode,
    // required, method) never retrigger the observer and cause an update loop.
    const observer = new MutationObserver(run);
    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["disabled", "aria-disabled"],
    });
    run();

    return () => {
      observer.disconnect();
      controller.abort();
      disposeGuardState(state);
    };
  }, []);
}

export default function RolexAppraisalEmbed(): React.ReactElement {
  useWidgetSuccessTracking();
  useContactFormHardening();

  useEffect(() => {
    const base = "https://db-appraisal-869331060296.us-east1.run.app";
    (window as unknown as { __DB_API_BASE?: string }).__DB_API_BASE = base;

    if (!document.querySelector("link[data-db-appraisal]")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = base + "/assets/db-appraisal.css";
      link.setAttribute("data-db-appraisal", "");
      document.head.appendChild(link);
    }
    if (!document.querySelector("script[data-db-appraisal]")) {
      const script = document.createElement("script");
      script.src = base + "/assets/db-appraisal.js";
      script.async = true;
      script.setAttribute("data-db-appraisal", "");
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="rounded-2xl bg-white p-5 md:p-7 shadow-card-lg ring-1 ring-black/5">
      <h2 className="font-display text-[1.7rem] md:text-3xl leading-tight text-[var(--color-ink)]">
        {R_HERO.formHeading}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
        {R_HERO.formSubhead}
      </p>
      <div className="mt-4 hr-gold" />
      {/* Third-party widget mounts here. min-height keeps the hero-form floor
          stable before the widget hydrates client-side. */}
      <div className="mt-4 min-h-[180px] md:min-h-[220px]">
        <div id="db-appraisal-root" />
      </div>
    </div>
  );
}
