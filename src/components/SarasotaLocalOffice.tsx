"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { SarasotaOfficeIntro } from "@/components/SarasotaOfficeIntro";
import { SpecialistProfile } from "@/components/SpecialistProfile";
import { SARASOTA_LOCAL_OFFICE } from "@/lib/sarasota-content";

// Sarasota-only #local-office. Same charcoal band, teal accents and tracked
// call action as the shared LocalOffice, but introduces the city's named
// specialist in place of the generic visit / mail-in cards.
export function SarasotaLocalOffice(): React.ReactElement {
  return (
    <section
      id="local-office"
      className="relative isolate overflow-hidden bg-[var(--color-ink)] py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[var(--color-teal-900)]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
          <Reveal>
            <SarasotaOfficeIntro />
          </Reveal>
          <Reveal delay={100} className="md:justify-self-end">
            <SpecialistProfile specialist={SARASOTA_LOCAL_OFFICE.specialist} />
          </Reveal>
        </div>

        <Reveal delay={140}>
          <DualCTA align="center" onDark />
        </Reveal>
      </div>
    </section>
  );
}
