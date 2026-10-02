export interface Specialist {
  name: string;
  role: string;
  bio: string;
  portrait: { alt: string; fallback: string; webpSrcSet: string };
}

const PORTRAIT_SIZE_PX = 220;
// Matches the rendered portrait box: 220px from md up, 96px beside the text below it.
const PORTRAIT_SIZES = "(min-width: 768px) 220px, 96px";

// Single-person profile card for a market's local office. Portrait sits beside
// the text on phones (stacking only when the row can't fit, e.g. 320px) and
// above it from md up.
export function SpecialistProfile({ specialist }: { specialist: Specialist }): React.ReactElement {
  const { name, role, bio, portrait } = specialist;

  return (
    <article className="flex flex-wrap items-start gap-4 rounded-2xl border border-white/10 bg-[var(--color-ink-soft)]/60 p-5 backdrop-blur-sm md:max-w-sm md:flex-col md:gap-6 md:p-7">
      <picture className="block shrink-0">
        <source type="image/webp" srcSet={portrait.webpSrcSet} sizes={PORTRAIT_SIZES} />
        <img
          src={portrait.fallback}
          alt={portrait.alt}
          width={PORTRAIT_SIZE_PX}
          height={PORTRAIT_SIZE_PX}
          loading="lazy"
          decoding="async"
          className="h-24 w-24 rounded-xl object-cover ring-1 ring-white/10 md:h-[220px] md:w-[220px]"
        />
      </picture>
      <div className="min-w-[10rem] flex-1">
        <h3 className="font-display text-xl leading-snug text-white md:text-2xl">{name}</h3>
        <p className="mt-1 text-sm font-medium text-[var(--color-teal-400)]">{role}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/70">{bio}</p>
      </div>
    </article>
  );
}
