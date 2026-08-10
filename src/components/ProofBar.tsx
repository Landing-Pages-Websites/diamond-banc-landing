"use client";

import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons";
import { PROOF_BAR } from "@/lib/content";

export function ProofBar(): React.ReactElement {
  return (
    <section id="proof-bar" className="border-y border-[var(--color-border)] bg-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-5 py-7 md:px-8 md:py-8">
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-4 lg:divide-x lg:divide-[var(--color-border)]">
            {PROOF_BAR.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 lg:justify-center lg:px-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--color-teal-900)] shadow-card ring-1 ring-[var(--color-border)]">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-xl font-semibold text-[var(--color-ink)]">
                    {item.value}
                  </span>
                  <span className="block text-xs text-[var(--color-muted)] md:text-sm">
                    {item.label}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-center border-t border-[var(--color-border)] pt-5 lg:mt-7 lg:pt-6">
            <a
              href="#reviews"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-teal-900)] transition-colors hover:text-[var(--color-teal-800)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal-400)] rounded-md px-1"
            >
              See why thousands rate us 5.0 out of 5
              <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2.2} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
