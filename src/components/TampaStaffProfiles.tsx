import { TampaStaffPortrait } from "@/components/TampaStaffPortrait";
import { TAMPA_STAFF } from "@/lib/tampa-content";

// Three stacked horizontal rows: portrait beside live name/role/bio text.
// Below 360px each row stacks so long names never shrink or clip.
export function TampaStaffProfiles(): React.ReactElement {
  return (
    <ul className="grid gap-5 md:gap-6" aria-label="Tampa team">
      {TAMPA_STAFF.map((member) => (
        <li
          key={member.name}
          className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[var(--color-ink-soft)]/60 p-5 backdrop-blur-sm min-[360px]:flex-row min-[360px]:items-start md:gap-5 md:p-6"
        >
          <TampaStaffPortrait portrait={member.portrait} alt={member.alt} />
          <div className="min-w-0">
            <h3 className="font-display text-xl leading-snug text-white md:text-[1.375rem]">
              {member.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-[var(--color-teal-400)]">{member.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{member.bio}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
