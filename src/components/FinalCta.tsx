"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { useMarket } from "@/components/MarketProvider";
import { Icon } from "@/components/icons";
import { FINAL_CTA, HERO } from "@/lib/content";

export function FinalCta(): React.ReactElement {
  const { city, isMarket } = useMarket();
  const headline = isMarket ? `See what your jewelry is worth in ${city}.` : FINAL_CTA.headline;
  return (
    <section
      id="get-started"
      className="relative isolate overflow-hidden bg-[var(--color-ink)] py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[var(--color-teal-900)]/25 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="eyebrow text-[var(--color-teal-400)]">{FINAL_CTA.eyebrow}</p>
          <h2 className="mt-3 font-display text-[2.4rem] leading-[1.08] text-white md:text-[3.25rem]">
            {headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            {FINAL_CTA.body}
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            {HERO.chips.map((chip) => (
              <li key={chip} className="inline-flex items-center gap-2">
                <Icon
                  name="check"
                  className="h-4 w-4 text-[var(--color-teal-400)]"
                  strokeWidth={2.5}
                />
                {chip}
              </li>
            ))}
          </ul>

          <DualCTA align="center" onDark />
        </Reveal>
      </div>
    </section>
  );
}
