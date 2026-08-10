"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { HOW_IT_WORKS } from "@/lib/content";

export function HowItWorks(): React.ReactElement {
  return (
    <section id="how-it-works" className="bg-[var(--color-ink)] py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-[var(--color-teal-400)]">{HOW_IT_WORKS.eyebrow}</p>
          <h2 className="mt-3 font-display text-[2.25rem] leading-[1.08] text-white md:text-5xl">
            {HOW_IT_WORKS.headline}
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <li className="flex h-full flex-col rounded-2xl border border-white/10 bg-[var(--color-ink-soft)]/60 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] text-[var(--color-teal-400)] ring-1 ring-white/10">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-4xl font-semibold text-[var(--color-gold-soft)]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl leading-snug text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <DualCTA align="center" onDark />
        </Reveal>
      </div>
    </section>
  );
}
