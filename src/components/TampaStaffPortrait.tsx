const PORTRAIT_DIR = "/images/local-team/tampa";
// Mirrors Tailwind's `md` breakpoint, where the portrait slot grows 96px -> 112px.
const DESKTOP_MEDIA = "(min-width: 768px)";
const MOBILE_PX = 96;
const DESKTOP_PX = 112;
const DENSITY = 2;

function srcSet(portrait: string, px: number, ext: "webp" | "jpg"): string {
  return `${PORTRAIT_DIR}/${portrait}-${px}.${ext} 1x, ${PORTRAIT_DIR}/${portrait}-${px * DENSITY}.${ext} ${DENSITY}x`;
}

interface TampaStaffPortraitProps {
  portrait: string;
  alt: string;
}

// Square local-staff headshot: WebP with JPEG fallback, 1x/2x per slot size.
export function TampaStaffPortrait({ portrait, alt }: TampaStaffPortraitProps): React.ReactElement {
  return (
    <picture className="block h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-[var(--color-ink-soft)] ring-1 ring-white/10 md:h-28 md:w-28">
      <source media={DESKTOP_MEDIA} type="image/webp" srcSet={srcSet(portrait, DESKTOP_PX, "webp")} />
      <source media={DESKTOP_MEDIA} srcSet={srcSet(portrait, DESKTOP_PX, "jpg")} />
      <source type="image/webp" srcSet={srcSet(portrait, MOBILE_PX, "webp")} />
      <img
        src={`${PORTRAIT_DIR}/${portrait}-${MOBILE_PX}.jpg`}
        srcSet={srcSet(portrait, MOBILE_PX, "jpg")}
        alt={alt}
        width={MOBILE_PX}
        height={MOBILE_PX}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </picture>
  );
}
