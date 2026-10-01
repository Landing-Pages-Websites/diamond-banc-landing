import { Reveal } from "@/components/Reveal";
import { DualCTA } from "@/components/DualCTA";
import { TampaOfficeIntro } from "@/components/TampaOfficeIntro";
import { TampaStaffProfiles } from "@/components/TampaStaffProfiles";

// Tampa-only replacement for the generic LocalOffice section: same charcoal
// band, teal accents and CTA row, with the named local team on the right.
export function TampaLocalOffice(): React.ReactElement {
  return (
    <section
      id="local-office"
      className="relative isolate overflow-hidden bg-[var(--color-ink)] py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[var(--color-teal-900)]/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-start lg:gap-16">
          <Reveal>
            <TampaOfficeIntro />
          </Reveal>
          <Reveal delay={100}>
            <TampaStaffProfiles />
          </Reveal>
        </div>

        <Reveal delay={140}>
          <DualCTA align="center" onDark />
        </Reveal>
      </div>
    </section>
  );
}
