"use client";

import { useEffect, useRef } from "react";
import { HERO } from "@/lib/content";

interface MegaTagWindow extends Window {
  __DB_API_BASE?: string;
  MegaTag?: { trackEvent?: (event: string, data: Record<string, unknown>) => void };
  dataLayer?: Array<Record<string, unknown>>;
}

// Fire our own analytics once when the third-party widget signals success.
// Best-effort only: never throws, never blocks the widget's own behavior.
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

export default function AppraisalEmbed(): React.ReactElement {
  useWidgetSuccessTracking();

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
    <div className="rounded-2xl bg-white p-6 md:p-7 shadow-card-lg ring-1 ring-black/5">
      <h2 className="font-display text-2xl md:text-[1.7rem] leading-tight text-[var(--color-ink)]">
        {HERO.formHeading}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
        {HERO.formSubhead}
      </p>
      <div className="mt-5 hr-gold" />
      {/* Third-party widget mounts here. min-height keeps the hero-form floor
          stable before the widget hydrates client-side. */}
      <div className="mt-5 min-h-[320px]">
        <div id="db-appraisal-root" />
      </div>
    </div>
  );
}
