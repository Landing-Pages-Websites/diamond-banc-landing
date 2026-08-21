"use client";

import { CTA, QUOTE_ANCHOR } from "@/lib/content";
import { Icon } from "@/components/icons";
import { useElementVisibility } from "@/hooks/useElementVisibility";

// Sticky action bar , FORM-ONLY. Contains zero tel: links by design; the phone
// lives in the header, hero, and footer instead. Both variants point at the
// #get-quote form and hide whenever that section is in the viewport:
//   , Mobile: full-width bottom bar.
//   , Desktop (sm+): compact bottom-right pill, never full width.
export function FloatingCTA(): React.ReactElement {
  const formInView = useElementVisibility(QUOTE_ANCHOR);
  const show = !formInView;

  const hiddenState = "pointer-events-none opacity-0";

  return (
    <>
      {/* Mobile , full-width form-only bar */}
      <div
        aria-hidden={!show}
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-border)] bg-white/95 px-3 py-2.5 backdrop-blur-md transition-all duration-300 [box-shadow:0_-6px_24px_-12px_rgba(34,36,40,0.4)] sm:hidden ${
          show ? "translate-y-0 opacity-100" : `${hiddenState} translate-y-full`
        }`}
        style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={QUOTE_ANCHOR}
          tabIndex={show ? undefined : -1}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-teal-900)] px-5 py-3 text-sm font-semibold text-white shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)] focus-visible:ring-offset-2"
        >
          {CTA.primary}
          <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
        </a>
      </div>

      {/* Desktop , compact bottom-right pill */}
      <div
        aria-hidden={!show}
        className={`fixed bottom-6 right-6 z-50 hidden transition-all duration-300 sm:block ${
          show ? "translate-y-0 opacity-100" : `${hiddenState} translate-y-4`
        }`}
      >
        <a
          href={QUOTE_ANCHOR}
          tabIndex={show ? undefined : -1}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-900)] px-6 py-3.5 text-sm font-semibold text-white shadow-cta transition-colors duration-200 hover:bg-[var(--color-teal-800)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)] focus-visible:ring-offset-2"
        >
          {CTA.primary}
          <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
        </a>
      </div>
    </>
  );
}
