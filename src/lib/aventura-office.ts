import type { ExpertiseTeamOverride, LocalOfficeOverride } from "@/lib/content";

// Route-only content for /aventura: the local specialist profile in
// #local-office and the company-roster overrides in #expertise. Kept out of
// the shared content module so every other market renders unchanged.

export const AVENTURA_SLUG = "aventura";

const RETINA_SCALE = 2;

/** Display sizes (CSS px) of the art-directed portrait, mobile and desktop. */
export const PORTRAIT_SIZE = { mobile: 96, desktop: 220 } as const;

export const AVENTURA_OFFICE: LocalOfficeOverride = {
  headline: "Meet your Aventura specialist",
  intro: "Get to know Ethan Andino, who serves Diamond Banc clients in Aventura.",
  compactLine:
    "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
  profile: {
    name: "Ethan Andino",
    role: "Aventura Buyer & Lender",
    bio: "Ethan brings experience in luxury jewelry and watches, supported by diamond-grading training through GIA, to his work with Aventura clients.",
    imageAlt: "Ethan Andino",
    imageBase: "/images/local-team/aventura/ethan-andino",
    // Derivatives on disk: 1x and 2x of each display size.
    imageWidths: [
      PORTRAIT_SIZE.mobile,
      PORTRAIT_SIZE.mobile * RETINA_SCALE,
      PORTRAIT_SIZE.desktop,
      PORTRAIT_SIZE.desktop * RETINA_SCALE,
    ],
  },
};

/** 1x/2x srcSet for a square portrait derivative at the given display size. */
export function portraitSrcSet(base: string, size: number, ext: "webp" | "jpg"): string {
  return `${base}-${size}.${ext} 1x, ${base}-${size * RETINA_SCALE}.${ext} ${RETINA_SCALE}x`;
}

export const AVENTURA_ROSTER: ExpertiseTeamOverride = {
  teamHeading: "Backed by the Diamond Banc team",
  teamIntro:
    "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
  roles: { "Jordan Isaacs": "National Director of Funding" },
};
