// Atlanta-only presentation content. Scoped to the /atlanta route so the
// shared EXPERTISE roster and every other market render exactly as before.

export const ATLANTA_SLUG = "atlanta";

const PORTRAIT_DIR = "/images/local-team/atlanta";

// WebP + JPEG fallback paths for a 1x/2x pair of square portrait derivatives.
function portraitSet(size: number, size2x: number): Record<"webp" | "webp2x" | "jpg" | "jpg2x", string> {
  const file = (px: number, ext: string): string => `${PORTRAIT_DIR}/jae-back-${px}.${ext}`;
  return { webp: file(size, "webp"), webp2x: file(size2x, "webp"), jpg: file(size, "jpg"), jpg2x: file(size2x, "jpg") };
}

export const ATLANTA_LOCAL_OFFICE = {
  headline: "Meet your Atlanta specialist",
  intro: "Get to know Jae Back, who serves Diamond Banc clients in Atlanta.",
  visitLine:
    "Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.",
  specialist: {
    name: "Jae Back",
    role: "Georgia Director of Buying & Lending",
    bio: "Jae brings more than 27 years of jewelry and watch leadership experience to his work with Georgia clients. He speaks English and Korean.",
    alt: "Jae Back",
    portrait: {
      mobile: portraitSet(96, 192),
      desktop: portraitSet(220, 440),
    },
  },
} as const;

// Overrides passed to the shared Expertise section on /atlanta only.
export const ATLANTA_EXPERTISE = {
  teamHeading: "Backed by the Diamond Banc team",
  teamIntro:
    "Our local offices are supported by Diamond Banc's broader team of leaders and specialists.",
  roles: { "Jordan Isaacs": "National Director of Funding" },
} as const;
