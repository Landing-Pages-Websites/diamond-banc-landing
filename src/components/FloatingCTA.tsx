"use client";

import { useEffect, useState } from "react";
import { CTA, QUOTE_ANCHOR } from "@/lib/content";
import { Icon } from "@/components/icons";

// Mobile sticky action bar , FORM-ONLY. Contains zero tel: links by design;
// the phone lives in the header, hero, and footer instead.
export function FloatingCTA(): React.ReactElement {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-border)] bg-white/95 px-3 py-2.5 backdrop-blur-md transition-all duration-300 [box-shadow:0_-6px_24px_-12px_rgba(34,36,40,0.4)] sm:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={QUOTE_ANCHOR}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-teal-900)] px-5 py-3 text-sm font-semibold text-white shadow-cta"
      >
        {CTA.primary}
        <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
      </a>
    </div>
  );
}
