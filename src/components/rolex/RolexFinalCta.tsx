"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { R_FINAL_CTA, R_HERO, ROLEX_CTA_LABEL } from "@/lib/rolex-content";

export function RolexFinalCta(): React.ReactElement {
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
          <p className="eyebrow text-[var(--color-teal-400)]">{R_FINAL_CTA.eyebrow}</p>
          <h2 className="mt-3 font-display text-[2.4rem] leading-[1.08] text-white md:text-[3.25rem]">
            {R_FINAL_CTA.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            {R_FINAL_CTA.body}
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            {R_HERO.chips.map((chip) => (
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

          <DualCTA align="center" onDark primaryLabel={ROLEX_CTA_LABEL} />
        </Reveal>
      </div>
    </section>
  );
}
