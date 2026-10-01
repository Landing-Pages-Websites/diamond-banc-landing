import { ATLANTA_LOCAL_OFFICE } from "@/lib/atlanta-content";

// Intrinsic width/height attributes (largest rendered size); CSS sizes the box.
const PORTRAIT_INTRINSIC_PX = 220;
const DESKTOP_MEDIA = "(min-width: 768px)";

// Single local-specialist profile for the Atlanta office band. Mobile shows a
// 96px portrait beside live text (stacking on the narrowest phones); from
// 768px the 220px portrait sits above the name, role and bio.
export function AtlantaSpecialistProfile(): React.ReactElement {
  const { name, role, bio, alt, portrait } = ATLANTA_LOCAL_OFFICE.specialist;
  const { mobile, desktop } = portrait;

  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[var(--color-ink-soft)]/60 p-6 backdrop-blur-sm min-[375px]:flex-row min-[375px]:items-start md:flex-col md:p-8">
      <picture className="block shrink-0">
        <source media={DESKTOP_MEDIA} type="image/webp" srcSet={`${desktop.webp} 1x, ${desktop.webp2x} 2x`} />
        <source media={DESKTOP_MEDIA} type="image/jpeg" srcSet={`${desktop.jpg} 1x, ${desktop.jpg2x} 2x`} />
        <source type="image/webp" srcSet={`${mobile.webp} 1x, ${mobile.webp2x} 2x`} />
        <img
          src={mobile.jpg}
          srcSet={`${mobile.jpg} 1x, ${mobile.jpg2x} 2x`}
          alt={alt}
          width={PORTRAIT_INTRINSIC_PX}
          height={PORTRAIT_INTRINSIC_PX}
          loading="lazy"
          decoding="async"
          className="h-24 w-24 rounded-xl object-cover ring-1 ring-white/15 md:h-[220px] md:w-[220px] md:rounded-2xl"
        />
      </picture>
      <div className="min-w-0">
        <h3 className="font-display text-2xl leading-tight text-white md:text-[1.75rem]">{name}</h3>
        <p className="mt-1.5 text-sm font-medium leading-snug text-[var(--color-teal-400)]">{role}</p>
        <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-[15px]">{bio}</p>
      </div>
    </article>
  );
}
