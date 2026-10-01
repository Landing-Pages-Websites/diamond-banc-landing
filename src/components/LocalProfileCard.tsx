import type { LocalProfile } from "@/lib/content";

const PORTRAIT_SIZES = "(min-width: 768px) 112px, 96px";

function buildSrcSet(profile: LocalProfile, ext: string): string {
  return profile.imageWidths.map((w) => `${profile.imageBase}-${w}.${ext} ${w}w`).join(", ");
}

export function LocalProfileCard({ profile, compact = false }: { profile: LocalProfile; compact?: boolean }): React.ReactElement {
  return (
    <article
      className={
        compact
          ? "flex gap-5 rounded-2xl border border-white/10 bg-[var(--color-ink-soft)]/60 p-4 backdrop-blur-sm sm:p-5 max-[360px]:flex-col"
          : "rounded-2xl border border-white/10 bg-[var(--color-ink-soft)]/60 p-6 backdrop-blur-sm md:p-8"
      }
    >
      <picture className="block shrink-0">
        <source type="image/avif" srcSet={buildSrcSet(profile, "avif")} sizes={compact ? "(min-width: 768px) 112px, 96px" : "(min-width: 1024px) 220px, 96px"} />
        <source type="image/webp" srcSet={buildSrcSet(profile, "webp")} sizes={compact ? "(min-width: 768px) 112px, 96px" : "(min-width: 1024px) 220px, 96px"} />
        <img
          src={`${profile.imageBase}-${compact ? 112 : 220}.jpg`}
          srcSet={buildSrcSet(profile, "jpg")}
          sizes={compact ? "(min-width: 768px) 112px, 96px" : "(min-width: 1024px) 220px, 96px"}
          width={compact ? 112 : 220}
          height={compact ? 112 : 220}
          loading="lazy"
          decoding="async"
          alt={profile.imageAlt}
          className={compact ? "h-24 w-24 rounded-xl object-cover object-top ring-1 ring-white/15 md:h-28 md:w-28" : "h-24 w-24 rounded-2xl object-cover object-top ring-1 ring-white/15 md:h-[220px] md:w-[220px]"}
        />
      </picture>
      <div className={compact ? "min-w-0 pt-0.5" : "min-w-0 flex-1 md:mt-6"}>
        <h3 className="font-display text-2xl leading-tight text-white">{profile.name}</h3>
        <p className="mt-1 text-sm font-medium leading-snug text-[var(--color-teal-400)]">{profile.role}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/75">{profile.bio}</p>
      </div>
    </article>
  );
}
