"use client";

import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { AtlantaOfficeIntro } from "@/components/AtlantaOfficeIntro";
import { AtlantaSpecialistProfile } from "@/components/AtlantaSpecialistProfile";

// Atlanta-only variant of LocalOffice, placed right after the sell/borrow
// decision. Same ink band, intro, phone action and DualCTA as the shared
// section, with the two generic visit/mail cards replaced by the local
// specialist. The hairline separates it from the ink How It Works band below.
export function AtlantaLocalOffice(): React.ReactElement {
  return (
    <section
      id="local-office"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[var(--color-ink)] py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[var(--color-teal-900)]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
          <Reveal>
            <AtlantaOfficeIntro />
          </Reveal>
          <Reveal delay={100}>
            <AtlantaSpecialistProfile />
          </Reveal>
        </div>

        <Reveal delay={140}>
          <DualCTA align="center" onDark />
        </Reveal>
      </div>
    </section>
  );
}
