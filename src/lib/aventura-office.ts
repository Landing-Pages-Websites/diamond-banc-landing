// Route-only content for /aventura: the local specialist profile in
// #local-office and the company-roster overrides in #expertise. Kept out of
// the shared content module so every other market renders unchanged.

export const AVENTURA_SLUG = "aventura";

const PORTRAIT_DIR = "/images/local-team/aventura";
const RETINA_SCALE = 2;

export const AVENTURA_OFFICE = {
  heading: "Meet your Aventura specialist",
  intro: "Get to know Ethan Andino, who serves Diamond Banc clients in Aventura.",
  note:
    "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
} as const;

export const AVENTURA_SPECIALIST = {
  name: "Ethan Andino",
  role: "Aventura Buyer & Lender",
  bio: "Ethan brings experience in luxury jewelry and watches, supported by diamond-grading training through GIA, to his work with Aventura clients.",
  portrait: `${PORTRAIT_DIR}/ethan-andino`,
  mobileSize: 96,
  desktopSize: 220,
} as const;

/** 1x/2x srcSet for a square portrait derivative at the given display size. */
export function portraitSrcSet(base: string, size: number, ext: "webp" | "jpg"): string {
  return `${base}-${size}.${ext} 1x, ${base}-${size * RETINA_SCALE}.${ext} ${RETINA_SCALE}x`;
}

export const AVENTURA_ROSTER = {
  teamHeading: "Backed by the Diamond Banc team",
  teamIntro:
    "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
  roleOverrides: { "Jordan Isaacs": "National Director of Funding" },
} as const;
