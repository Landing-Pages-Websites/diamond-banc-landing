"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { EXPERTISE } from "@/lib/content";

export function Expertise(): React.ReactElement {
  return (
    <section id="expertise" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Founder story */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card-lg ring-1 ring-[var(--color-border)] sm:aspect-[3/2] lg:aspect-[4/5]">
              <Image
                src={EXPERTISE.image}
                alt={EXPERTISE.imageAlt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-6 lg:order-1">
            <p className="eyebrow">{EXPERTISE.eyebrow}</p>
            <h2 className="mt-3 font-display text-[2.25rem] leading-[1.1] text-[var(--color-ink)] md:text-[2.75rem]">
              {EXPERTISE.headline}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-muted)] md:text-base">
              {EXPERTISE.body}
            </p>
          </Reveal>
        </div>

        {/* Team grid */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <h3 className="font-display text-2xl text-[var(--color-ink)] md:text-3xl">
                {EXPERTISE.teamHeading}
              </h3>
              <span className="hr-gold hidden h-px flex-1 sm:block" />
            </div>
          </Reveal>

          <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {EXPERTISE.team.map((member, i) => (
              <Reveal key={member.name} delay={i * 60}>
                <li className="group h-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-cream)] shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-lg">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      quality={90}
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="font-display text-lg leading-tight text-[var(--color-ink)]">
                      {member.name}
                    </p>
                    <p className="mt-1.5 text-xs leading-snug text-[var(--color-muted)] md:text-[13px]">
                      {member.role}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={140}>
          <DualCTA align="center" />
        </Reveal>
      </div>
    </section>
  );
}
