"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { REVIEWS } from "@/lib/content";

export function Reviews(): React.ReactElement {
  return (
    <section id="reviews" className="bg-[var(--color-ink)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="eyebrow text-[var(--color-teal-400)]">{REVIEWS.eyebrow}</p>
          <div className="mt-5 flex justify-center gap-1.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((n) => (
              <Icon
                key={n}
                name="star"
                className="h-7 w-7 text-[var(--color-gold-soft)]"
                strokeWidth={0}
                fill="currentColor"
              />
            ))}
          </div>
          <h2 className="mt-5 font-display text-[2.25rem] leading-[1.1] text-white md:text-5xl">
            {REVIEWS.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/75 md:text-base">
            {REVIEWS.body}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {REVIEWS.stats.map((stat) => (
              <div key={stat.label} className="bg-[var(--color-ink)] px-4 py-7">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-semibold text-[var(--color-gold-soft)] md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-xs text-white/65 md:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={140}>
          <DualCTA align="center" onDark />
        </Reveal>
      </div>
    </section>
  );
}
