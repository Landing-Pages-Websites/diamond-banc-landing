"use client";

import { CTA, PHONE, PHONE_HREF, QUOTE_ANCHOR } from "@/lib/content";
import { Icon } from "@/components/icons";

interface DualCTAProps {
  align?: "start" | "center";
  primaryLabel?: string;
  /** Use on dark ink bands , switches the phone link to a light-on-dark style. */
  onDark?: boolean;
}

export function DualCTA({
  align = "center",
  primaryLabel = CTA.primary,
  onDark = false,
}: DualCTAProps): React.ReactElement {
  const justify = align === "start" ? "justify-start" : "justify-center";

  const phoneClasses = onDark
    ? "border-white/35 text-white hover:bg-white/10 hover:border-white"
    : "border-[var(--color-teal-900)]/40 text-[var(--color-teal-900)] hover:bg-[var(--color-teal-100)] hover:border-[var(--color-teal-900)]";

  return (
    <div className={`flex flex-wrap items-center ${justify} gap-3 mt-10`}>
      <a
        href={QUOTE_ANCHOR}
        className="inline-flex items-center gap-2 bg-[var(--color-teal-900)] text-white hover:bg-[var(--color-teal-800)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 rounded-full px-7 py-3.5 font-semibold text-base shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)] focus-visible:ring-offset-2"
      >
        {primaryLabel}
        <Icon name="arrow" className="w-4 h-4" strokeWidth={2.2} />
      </a>
      <a
        href={PHONE_HREF}
        className={`inline-flex items-center gap-2 border-[1.5px] ${phoneClasses} transition-colors duration-200 rounded-full px-6 py-3.5 font-semibold text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)]`}
        aria-label={`Call Diamond Banc at ${PHONE}`}
      >
        <Icon name="phone" className="w-4 h-4" strokeWidth={0} fill="currentColor" />
        {PHONE}
      </a>
    </div>
  );
}
