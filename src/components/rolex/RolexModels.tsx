"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { Icon } from "@/components/icons";
import { R_MODELS, ROLEX_CTA_LABEL } from "@/lib/rolex-content";

// Four-model evaluation grid. Keeps the source category-grid structure and the
// exact 4:3 container aspect at every breakpoint. Images carry intrinsic
// 1600x1200 semantics and fill the container with object-cover / center; they
// lazy-load through Next Image (WebP/AVIF via the optimizer).
export function RolexModels(): React.ReactElement {
  return (
    <section id="what-we-buy" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{R_MODELS.eyebrow}</p>
          <h2 className="mt-3 font-display text-[2.25rem] leading-[1.08] text-[var(--color-ink)] md:text-5xl">
            {R_MODELS.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
            {R_MODELS.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {R_MODELS.cards.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-teal-400)] hover:shadow-card-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    width={1600}
                    height={1200}
                    loading="lazy"
                    sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 92vw"
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--color-teal-900)] shadow-card ring-1 ring-[var(--color-border)]">
                      <Icon name={cat.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-xl leading-snug text-[var(--color-ink)]">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                    {cat.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={110}>
          <p className="mt-10 text-center text-[15px] leading-relaxed text-[var(--color-muted)]">
            {R_MODELS.helper}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <DualCTA align="center" primaryLabel={ROLEX_CTA_LABEL} />
        </Reveal>
      </div>
    </section>
  );
}
