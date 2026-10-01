import type { LocalProfile } from "@/lib/content";

// Rendered portrait size in CSS px: 96 below md (768px), 220 from md up.
const PORTRAIT_SIZES = "(min-width: 768px) 220px, 96px";
const PORTRAIT_DESKTOP_PX = 220;

function buildSrcSet(profile: LocalProfile, ext: string): string {
  return profile.imageWidths.map((w) => `${profile.imageBase}-${w}.${ext} ${w}w`).join(", ");
}

// Single local-specialist profile for the #local-office section. Uses pre-sized
// AVIF/WebP derivatives with a JPEG fallback; lazy since it sits below the fold.
export function LocalProfileCard({ profile }: { profile: LocalProfile }): React.ReactElement {
  return (
    <article className="rounded-2xl border border-white/10 bg-[var(--color-ink-soft)]/60 p-6 backdrop-blur-sm md:p-8">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-4 md:block">
        <picture className="block shrink-0">
          <source type="image/avif" srcSet={buildSrcSet(profile, "avif")} sizes={PORTRAIT_SIZES} />
          <source type="image/webp" srcSet={buildSrcSet(profile, "webp")} sizes={PORTRAIT_SIZES} />
          <img
            src={`${profile.imageBase}-${PORTRAIT_DESKTOP_PX}.jpg`}
            srcSet={buildSrcSet(profile, "jpg")}
            sizes={PORTRAIT_SIZES}
            width={PORTRAIT_DESKTOP_PX}
            height={PORTRAIT_DESKTOP_PX}
            loading="lazy"
            decoding="async"
            alt={profile.imageAlt}
            className="h-24 w-24 rounded-2xl object-cover ring-1 ring-white/15 md:h-[220px] md:w-[220px]"
          />
        </picture>
        <div className="min-w-0 flex-1 basis-40 md:mt-6">
          <h3 className="font-display text-2xl leading-tight text-white">{profile.name}</h3>
          <p className="mt-1 text-sm font-medium text-[var(--color-teal-400)]">{profile.role}</p>
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-white/75">{profile.bio}</p>
    </article>
  );
}
