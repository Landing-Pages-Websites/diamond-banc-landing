import type { LocalProfile } from "@/lib/content";

type ProfileLayout = "card" | "row";

// Rendered portrait size in CSS px per layout: 96 below md (768px) for both,
// then 220 (single card) or 112 (stacked rows) from md up.
const PORTRAIT = {
  card: {
    sizes: "(min-width: 768px) 220px, 96px",
    desktopPx: 220,
    className: "h-24 w-24 rounded-2xl object-cover ring-1 ring-white/15 md:h-[220px] md:w-[220px]",
  },
  row: {
    sizes: "(min-width: 768px) 112px, 96px",
    desktopPx: 112,
    className: "h-24 w-24 rounded-2xl object-cover object-top ring-1 ring-white/15 md:h-28 md:w-28",
  },
} as const;

function buildSrcSet(profile: LocalProfile, ext: string): string {
  return profile.imageWidths.map((w) => `${profile.imageBase}-${w}.${ext} ${w}w`).join(", ");
}

function Portrait({ profile, layout }: { profile: LocalProfile; layout: ProfileLayout }): React.ReactElement {
  const { sizes, desktopPx, className } = PORTRAIT[layout];
  return (
    <picture className="block shrink-0">
      <source type="image/avif" srcSet={buildSrcSet(profile, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={buildSrcSet(profile, "webp")} sizes={sizes} />
      <img
        src={`${profile.imageBase}-${desktopPx}.jpg`}
        srcSet={buildSrcSet(profile, "jpg")}
        sizes={sizes}
        width={desktopPx}
        height={desktopPx}
        loading="lazy"
        decoding="async"
        alt={profile.imageAlt}
        className={className}
      />
    </picture>
  );
}

// Local-specialist profile for the #local-office section. Uses pre-sized
// AVIF/WebP derivatives with a JPEG fallback; lazy since it sits below the fold.
// "card" is the single-specialist treatment; "row" is one of several stacked
// horizontal profiles (portrait beside name, role, and bio).
export function LocalProfileCard({
  profile,
  layout = "card",
}: {
  profile: LocalProfile;
  layout?: ProfileLayout;
}): React.ReactElement {
  if (layout === "row") {
    return (
      <article className="flex flex-wrap items-start gap-5 rounded-2xl border border-white/10 bg-[var(--color-ink-soft)]/60 p-5 backdrop-blur-sm md:flex-nowrap md:gap-6 md:p-6">
        <Portrait profile={profile} layout="row" />
        <div className="min-w-0 flex-1 basis-40">
          <h3 className="font-display text-2xl leading-tight text-white">{profile.name}</h3>
          <p className="mt-1 text-sm font-medium text-[var(--color-teal-400)]">{profile.role}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-white/75">{profile.bio}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-2xl border border-white/10 bg-[var(--color-ink-soft)]/60 p-6 backdrop-blur-sm md:p-8">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-4 md:block">
        <Portrait profile={profile} layout="card" />
        <div className="min-w-0 flex-1 basis-40 md:mt-6">
          <p className="font-display text-2xl leading-tight text-white">{profile.name}</p>
          <p className="mt-1 text-sm font-medium text-[var(--color-teal-400)]">{profile.role}</p>
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-white/75">{profile.bio}</p>
    </article>
  );
}
