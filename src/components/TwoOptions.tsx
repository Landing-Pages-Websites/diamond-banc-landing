"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { TWO_OPTIONS, QUOTE_ANCHOR } from "@/lib/content";

export function TwoOptions(): React.ReactElement {
  return (
    <section id="two-options" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{TWO_OPTIONS.eyebrow}</p>
          <h2 className="mt-3 font-display text-[2.25rem] leading-[1.08] text-[var(--color-ink)] md:text-5xl">
            {TWO_OPTIONS.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
            {TWO_OPTIONS.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TWO_OPTIONS.cards.map((card, i) => (
            <Reveal key={card.id} delay={i * 90}>
              <article className="flex h-full flex-col rounded-3xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-lg md:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-teal-900)] text-white">
                  <Icon name={card.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-[1.85rem] leading-tight text-[var(--color-ink)]">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[var(--color-muted)]">
                  {card.body}
                </p>
                <a
                  href={QUOTE_ANCHOR}
                  className="mt-7 inline-flex items-center gap-2 self-start rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-ink-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)] focus-visible:ring-offset-2"
                >
                  {card.cta}
                  <Icon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <DualCTA align="center" />
        </Reveal>
      </div>
    </section>
  );
}
