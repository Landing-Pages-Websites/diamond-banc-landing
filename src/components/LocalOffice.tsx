"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { useMarket } from "@/components/MarketProvider";
import { Icon } from "@/components/icons";
import { BRAND } from "@/lib/content";

// Localized replacement for the nationwide LocationMap. Turns national trust
// into a specific nearby-office option for the route's market: name the city,
// offer an in-person appointment or free insured shipping, and surface the
// exact route phone. No skyline or generic city imagery by design.
export function LocalOffice(): React.ReactElement | null {
  const { phone, phoneHref, city, display } = useMarket();

  // Market-only section: rendered exclusively inside MarketProvider. Guard so a
  // stray render without a market never prints literal "null" copy.
  if (!city || !display) return null;

  const ways: Array<{ icon: React.ComponentProps<typeof Icon>["name"]; title: string; body: string }> = [
    {
      icon: "pin",
      title: `Visit the ${city} office`,
      body: `Book an appointment and hand your item across the desk for an in-person valuation with our experienced experts.`,
    },
    {
      icon: "ship",
      title: "Prefer to mail it in?",
      body: "Use free, fully insured overnight shipping from anywhere. We cover it both ways, with no cost and no obligation.",
    },
  ];

  return (
    <section
      id="local-office"
      className="relative isolate overflow-hidden bg-[var(--color-ink)] py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[var(--color-teal-900)]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="eyebrow text-[var(--color-teal-400)]">Your local office</p>
            <h2 className="mt-3 font-display text-[2.25rem] leading-[1.1] text-white md:text-[2.75rem]">
              {BRAND.name} {display}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/75 md:text-base">
              Serving {city} and the surrounding area, with two easy ways to get
              your valuation. Come in for an appointment or ship your item to us
              with a free insured label. Either way, your offer comes from the
              same experienced experts.
            </p>

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
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {ways.map((way) => (
                <li
                  key={way.title}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[var(--color-ink-soft)]/60 p-6 backdrop-blur-sm"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] text-[var(--color-teal-400)] ring-1 ring-white/10">
                    <Icon name={way.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-xl leading-snug text-white">
                    {way.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">{way.body}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <DualCTA align="center" onDark />
        </Reveal>
      </div>
    </section>
  );
}
