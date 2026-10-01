import { AVENTURA_SPECIALIST, portraitSrcSet } from "@/lib/aventura-office";

const DESKTOP_MEDIA = "(min-width: 768px)";
// Modern format first; JPEG is the fallback for browsers without WebP.
const FORMATS = [
  { ext: "webp", type: "image/webp" },
  { ext: "jpg", type: "image/jpeg" },
] as const;

// Ethan Andino's profile card for the /aventura #local-office section. The
// portrait is art-directed: 96px beside the text on mobile, 220px above it from
// 768px up, each with a 2x WebP source and a JPEG fallback.
export function AventuraSpecialist(): React.ReactElement {
  const { name, role, bio, portrait, mobileSize, desktopSize } = AVENTURA_SPECIALIST;

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[var(--color-ink-soft)]/60 p-5 backdrop-blur-sm min-[360px]:flex-row min-[360px]:items-start sm:p-6 md:flex-col md:gap-6 md:p-8">
      <picture className="shrink-0">
        {FORMATS.flatMap(({ ext, type }) => [
          <source key={`${ext}-desktop`} type={type} media={DESKTOP_MEDIA} srcSet={portraitSrcSet(portrait, desktopSize, ext)} width={desktopSize} height={desktopSize} />,
          <source key={`${ext}-mobile`} type={type} srcSet={portraitSrcSet(portrait, mobileSize, ext)} width={mobileSize} height={mobileSize} />,
        ])}
        <img
          src={`${portrait}-${desktopSize}.jpg`}
          alt={name}
          width={desktopSize}
          height={desktopSize}
          loading="lazy"
          decoding="async"
          className="block h-24 w-24 rounded-xl object-cover ring-1 ring-white/10 md:h-[220px] md:w-[220px] md:rounded-2xl"
        />
      </picture>
      <div className="min-w-0">
        <h3 className="font-display text-2xl leading-snug text-white">{name}</h3>
        <p className="mt-1 text-sm font-medium text-[var(--color-teal-400)]">{role}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-[15px]">{bio}</p>
      </div>
    </article>
  );
}
