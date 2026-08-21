"use client";

import { CTA, QUOTE_ANCHOR } from "@/lib/content";
import { useMarket } from "@/components/MarketProvider";
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
  const { phone, phoneHref } = useMarket();
  const justify = align === "start" ? "justify-start" : "justify-center";

  const phoneClasses = onDark
    ? "border-white/35 text-white hover:bg-white/10 hover:border-white"
    : "border-[var(--color-teal-900)]/40 text-[var(--color-teal-900)] hover:bg-[var(--color-teal-100)] hover:border-[var(--color-teal-900)]";

  return (
    <div className={`flex flex-nowrap items-center ${justify} gap-1 mt-8 sm:gap-3 sm:mt-10`}>
      <a
        href={QUOTE_ANCHOR}
        className="inline-flex min-h-[44px] shrink-0 items-center gap-1 whitespace-nowrap tracking-tight bg-[var(--color-teal-900)] text-white hover:bg-[var(--color-teal-800)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 rounded-full px-2 py-3 font-semibold text-xs shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)] focus-visible:ring-offset-2 sm:gap-2 sm:px-7 sm:py-3.5 sm:text-base sm:tracking-normal"
      >
        {primaryLabel}
        <Icon name="arrow" className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2.2} />
      </a>
      <a
        href={phoneHref}
        className={`inline-flex min-h-[44px] shrink-0 items-center gap-1 whitespace-nowrap tracking-tight border-[1.5px] ${phoneClasses} transition-colors duration-200 rounded-full px-2 py-3 font-semibold text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)] sm:gap-2 sm:px-6 sm:py-3.5 sm:text-base sm:tracking-normal`}
        aria-label={`Call Diamond Banc at ${phone}`}
      >
        <Icon name="phone" className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={0} fill="currentColor" />
        {phone}
      </a>
    </div>
  );
}
