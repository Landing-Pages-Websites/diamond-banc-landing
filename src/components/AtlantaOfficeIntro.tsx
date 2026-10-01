"use client";

import { useMarket } from "@/components/MarketProvider";
import { Icon } from "@/components/icons";
import { BRAND } from "@/lib/content";
import { ATLANTA_LOCAL_OFFICE } from "@/lib/atlanta-content";

// Introduction column of the Atlanta office band: heading, visit/mail line,
// office address when configured, and the route's tracked phone action.
export function AtlantaOfficeIntro(): React.ReactElement | null {
  const { phone, phoneHref, city, state, office } = useMarket();
  // Mirrors LocalOffice: never print an empty "Call the  team" outside a market.
  if (!city) return null;
  const { headline, intro, visitLine } = ATLANTA_LOCAL_OFFICE;

  return (
    <>
      <p className="eyebrow text-[var(--color-teal-400)]">Your local office</p>
      <h2 className="mt-3 font-display text-[2.25rem] leading-[1.1] text-white md:text-[2.75rem]">{headline}</h2>
      <p className="mt-5 text-[15px] leading-relaxed text-white/80 md:text-base">{intro}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{visitLine}</p>

      {office && (
        <address className="mt-7 border-l-2 border-[var(--color-gold)] pl-4 text-[15px] not-italic leading-relaxed text-white/80">
          <span className="block text-sm font-medium text-[var(--color-teal-400)]">Our {office.locality} office</span>
          <span className="mt-1 block font-semibold text-white">{office.street}</span>
          <span className="block">{office.locality}, {state} {office.zip}</span>
        </address>
      )}

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
    </>
  );
}
