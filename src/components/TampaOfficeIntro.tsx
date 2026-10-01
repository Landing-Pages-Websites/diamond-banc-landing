"use client";

import { useMarket } from "@/components/MarketProvider";
import { Icon } from "@/components/icons";
import { BRAND } from "@/lib/content";
import { TAMPA_OFFICE } from "@/lib/tampa-content";

// Listed office address from the route's market context (same markup as LocalOffice).
function OfficeAddress(): React.ReactElement | null {
  const { state, office } = useMarket();
  if (!office) return null;

  return (
    <address className="mt-7 border-l-2 border-[var(--color-gold)] pl-4 text-[15px] not-italic leading-relaxed text-white/80">
      <span className="block text-sm font-medium text-[var(--color-teal-400)]">
        Our {office.locality} office
      </span>
      <span className="mt-1 block font-semibold text-white">{office.street}</span>
      <span className="block">
        {office.locality}, {state} {office.zip}
      </span>
    </address>
  );
}

// Route's tracked call action (same markup as LocalOffice); the route phone stays authoritative.
function OfficeCallLink(): React.ReactElement | null {
  const { phone, phoneHref, city } = useMarket();
  if (!city) return null;

  return (
    <a
      href={phoneHref}
      className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/[0.06] px-5 py-3 backdrop-blur-sm transition-colors hover:border-[var(--color-teal-400)] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)]"
      aria-label={`Call ${BRAND.name} ${city} at ${phone}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-teal-900)] text-white">
        <Icon name="phone" className="h-4 w-4" strokeWidth={0} fill="currentColor" />
      </span>
      <span className="text-left leading-tight">
        <span className="block text-xs text-white/60">Call the {city} team</span>
        <span className="block font-semibold text-white">{phone}</span>
      </span>
    </a>
  );
}

// Left column of the Tampa office section: heading, intro, visit/ship line,
// any listed office address and the call action.
export function TampaOfficeIntro(): React.ReactElement {
  return (
    <div>
      <p className="eyebrow text-[var(--color-teal-400)]">{TAMPA_OFFICE.eyebrow}</p>
      <h2 className="mt-3 font-display text-[2.25rem] leading-[1.1] text-white md:text-[2.75rem]">
        {TAMPA_OFFICE.heading}
      </h2>
      <p className="mt-5 text-[15px] leading-relaxed text-white/75 md:text-base">
        {TAMPA_OFFICE.intro}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-white/60">{TAMPA_OFFICE.visitLine}</p>
      <OfficeAddress />
      <OfficeCallLink />
    </div>
  );
}
