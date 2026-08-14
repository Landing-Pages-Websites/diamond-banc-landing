"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { REVIEWS } from "@/lib/content";

function StarRow({ className }: { className: string }): React.ReactElement {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((n) => (
        <Icon
          key={n}
          name="star"
          className={className}
          strokeWidth={0}
          fill="currentColor"
        />
      ))}
    </div>
  );
}

export function Reviews(): React.ReactElement {
  return (
    <section id="reviews" className="bg-[var(--color-ink)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-[var(--color-teal-400)]">{REVIEWS.eyebrow}</p>
          <div className="mt-5 flex justify-center">
            <StarRow className="h-7 w-7 text-[var(--color-gold-soft)]" />
          </div>
          <h2 className="mt-5 font-display text-[2.25rem] leading-[1.1] text-white md:text-5xl">
            {REVIEWS.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-white/75 md:text-base">
            {REVIEWS.body}
          </p>
        </Reveal>

        {/* Real, attributed customer testimonials */}
        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-3">
          {REVIEWS.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7">
                <StarRow className="h-4 w-4 text-[var(--color-gold-soft)]" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-white/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-white/10 pt-4">
                  <span className="block font-semibold text-white">{t.name}</span>
                  <span className="mt-0.5 block text-xs text-[var(--color-teal-400)]">
                    {t.source}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {REVIEWS.stats.map((stat) => (
              <div key={stat.label} className="bg-[var(--color-ink)] px-4 py-7 text-center">
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

        <Reveal delay={140} className="text-center">
          <DualCTA align="center" onDark />
        </Reveal>
      </div>
    </section>
  );
}
