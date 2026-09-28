> ⚠️ **BLUEPRINT MISSING STANDARD CONVERSION SECTIONS:** problem / agitation. The `landing-page-architect` proven order includes these (objection-handling before the final CTA). Either ADD them or confirm the omission is intentional for this page - don't drop them by accident.

## Task / scope
Build the landing page for **Diamond Banc**. Conversion goal: Generate qualified Google Search and PMax leads through the embedded AI appraisal form, with qualified local phone calls as the secondary conversion path. The page should make the appraisal submission the primary action while preserving Salesforce routing and CTM attribution.

Positioning: Lead with a free, no-obligation AI appraisal that gives San Diego-area owners a discreet way to understand their options. Present Diamond Banc as a premium, experienced jewelry buyer and lender with a local La Jolla office, an in-person path, and a clear sell-or-borrow choice. Use proof and process clarity to reduce hesitation, without promising a valuation, payout, loan amount, or approval.

Done = the page(s) render per the Design context below, the real copy is used (no invented facts), `npx next build` is green, and the a11y snapshot is clean.

## Files in scope
- Add the San Diego route at `src/app/[market]/page.tsx` and add only the `san-diego` entry to the typed market configuration in `src/lib/markets.ts`.
- Update only the smallest route-aware shared components required to render the localized market route: `src/components/MarketLandingPage.tsx`, `src/components/MarketProvider.tsx`, `src/components/LocalOffice.tsx`, `src/components/Hero.tsx`, `src/components/Header.tsx`, `src/components/DualCTA.tsx`, `src/components/FinalCta.tsx`, and `src/components/SiteFooter.tsx`.
- Add the San Diego office address `4275 Executive Sq, Suite 202, La Jolla, CA 92037` to the localized office surface.
- Preserve and include the compact research contract under `website-lp-build-research-data/d570ae9f-9b66-4332-b123-152835174bd0/`.

## Files out of scope
- `src/app/page.tsx`, all existing market route behavior, and all existing market phone values.
- `src/app/layout.tsx`, `src/hooks/useTracking.ts`, `src/components/AppraisalEmbed.tsx`, `src/components/QueryParamPersistence.tsx`, `src/app/globals.css`, `public/**`, favicon/logo assets, and existing Diamond Banc photography.
- Shared `components/ui/**` primitives, the Rolex route, generated files, dependencies, lockfiles, and build tooling.
- Do not redesign, refactor, or overwrite the live nationwide route or existing localized routes.

## Acceptance criteria
- All required sections present: Minimal logo and phone header with no navigation, Hero with San Diego / La Jolla intent match and embedded AI appraisal form, Trust bar with Trustpilot, BBB, expert, and heritage proof, Sell or borrow two-option explanation, Services for jewelry, watches / Rolex, diamonds, and gold, Three-step local appraisal process, San Diego office address and local appointment context, Secure shipping / in-person options, Expertise and credibility section, Testimonials or review proof, FAQ addressing sell versus borrow, appraisal, process, and eligibility, Dedicated lower contact form / appraisal section, Final conversion CTA and legal-only footer.
- Client brand tokens from `color_roles` / `typography_rules` applied via the Tailwind `@theme` block - no generic/off-brand colors or fonts.
- `dos_donts` (incl. any `visual_exclusions`) and messaging guardrails honored.
- Real copy from each section's `copy_direction` is used - no invented facts or stats.
- `npx next build` exits 0; no `any` types; exported components have explicit return types.
- a11y: every CTA has an accessible name; text contrast >= 4.5:1.
- **Video embeds:** iframe the actual VIDEO embed src (Wistia/YouTube/Vimeo/VSL player URL) - NEVER a marketing/funnel PAGE URL. Resolve the real embed from the source page first (many funnel pages set `frame-ancestors` and won't frame at all, or render a nested page instead of the video). An unresolved page-URL iframe is a launch blocker.

## Test / verify plan
1. Build: `npx next build` - capture exit code (must be 0).
2. Playwright (headless): load the page, screenshot the hero, assert the primary + secondary CTA and each required section render, then run an accessibility snapshot of the hero region.

## Design context
**Invoke the `frontend-design` skill BEFORE writing any components** (design-quality layer - distinctive, production-grade; no generic centered-hero / stock-Tailwind).

**Design system (apply these tokens - do not invent values):**
```json
{
  "visual_theme": {
    "archetype": "localized-premium-valuation funnel that inherits the live Diamond Banc nationwide page. The design remains editorial luxury, with real client-owned jewelry and expert photography, a dark high-contrast hero, a bright appraisal card, serif display type, controlled teal actions, restrained gold rules, and generous white space. Localization comes from the city name, exact phone, and focused office copy, not city skylines or unrelated local stock.",
    "copy_framework": "AIDA",
    "brand_voice": "Premium, modern, discreet, confident, and financially conservative. Use direct language for high-intent searchers, with no hype, no pressure, no pawnshop framing, and no unsupported guarantees. Always say Diamond Banc, never Diamond Bank.",
    "rationale": "The customer requested the same nationwide content framework localized by market. Preserving the live page's design system reduces risk to an active paid-traffic asset, keeps customer-approved proof and imagery intact, and isolates the new work to route-aware content and phone values.",
    "section_order": [
      "header",
      "hero",
      "proof-bar",
      "two-options",
      "how-it-works",
      "what-we-buy",
      "local-office",
      "shipping-security",
      "expertise",
      "reviews",
      "faq",
      "final-cta",
      "footer",
      "floating-cta"
    ],
    "visual_exclusions": [
      "city skylines",
      "AI-generated jewelry",
      "generic stock people",
      "glassmorphism",
      "neon",
      "gold button fills",
      "retail product grids",
      "pawnshop imagery",
      "countdown timers",
      "Adopt structure, composition, and motion ideas from inspiration references; DO NOT adopt their color palette or fonts \u2014 palette and type come from the brand tokens."
    ]
  },
  "color_roles": {
    "primary": "#1C7E86",
    "secondary": "#222428",
    "accent": "#BD8D41",
    "neutral": [
      "#FFFFFF",
      "#F2F0EE",
      "#E1D9CD",
      "#5C6066"
    ],
    "roles": {
      "background": "#FFFFFF",
      "surface": "#FFFFFF",
      "text": "#222428",
      "muted": "#5C6066",
      "border": "#E6E2DB",
      "link": "#1C7E86"
    },
    "states": {
      "primary_default": "#1C7E86 background with white text",
      "primary_hover": "#196F76 background with white text",
      "primary_focus": "2px #6AC5CC focus ring",
      "secondary_default": "transparent with #1C7E86 border and text",
      "hover": "#186B72",
      "focus": "#BD8D41",
      "active": "#14585E",
      "disabled": "#A4CBCF",
      "error": "#D92D20",
      "success": "#12805C"
    },
    "contrast_verdict": "White on #1C7E86 measures 4.8:1 and white on #222428 measures 15.54:1. Gold on #222428 measures 5.22:1. Gold is decorative only on white.",
    "wcag_pairings": [
      "#FFFFFF on #1C7E86: 4.8:1, AA",
      "#FFFFFF on #222428: 15.54:1, AAA",
      "#BD8D41 on #222428: 5.22:1, AA"
    ]
  },
  "typography_rules": {
    "display": "Cormorant Garamond, weights 400, 600, and 700, for premium editorial headings",
    "body": "Poppins, weights 400, 500, 600, and 700, for body copy, labels, controls, and buttons",
    "scale": "Preserve the existing fluid mobile-first scale; H1 remains at least 39px on a 390px viewport and reaches roughly 66px on desktop",
    "scale_steps": {}
  },
  "component_stylings": [
    {
      "name": "button",
      "variants": [
        "primary",
        "secondary",
        "phone"
      ],
      "states": {
        "default": "teal fill or teal border",
        "hover": "controlled darker teal",
        "focus": "2px aqua focus ring",
        "active": "deep teal",
        "disabled": "muted teal"
      },
      "notes": "Use for quote and phone CTAs; never use gold button fills."
    },
    {
      "name": "Header",
      "variants": [
        "fixed-light"
      ],
      "states": {
        "default": "white translucent",
        "scrolled": "white with border and soft shadow"
      },
      "notes": "Logo and exact route phone only"
    },
    {
      "name": "Hero",
      "variants": [
        "dark-split"
      ],
      "states": {
        "mobile": "form first",
        "desktop": "copy left and form right"
      },
      "notes": "Real jewelry image and localized H1"
    },
    {
      "name": "AppraisalCard",
      "variants": [
        "white-raised"
      ],
      "states": {
        "loading": "reserved floor",
        "ready": "customer widget interactive"
      },
      "notes": "Preserve embed code and compact spacing"
    },
    {
      "name": "ProofBar",
      "variants": [
        "compact-light"
      ],
      "states": {
        "default": "compact proof row",
        "focus": "visible focus ring on any interactive proof link"
      },
      "notes": "Four approved proof points"
    },
    {
      "name": "OptionCard",
      "variants": [
        "sell",
        "borrow"
      ],
      "states": {
        "hover": "subtle border and image emphasis"
      },
      "notes": "Real consultation photos"
    },
    {
      "name": "LocalOffice",
      "variants": [
        "market-focused"
      ],
      "states": {
        "default": "dark local panel",
        "hover": "subtle teal border on option cards"
      },
      "notes": "City name, appointment or shipping, exact route phone"
    },
    {
      "name": "DualCTA",
      "variants": [
        "light",
        "dark"
      ],
      "states": {
        "hover": "controlled teal change",
        "focus": "visible teal ring"
      },
      "notes": "Quote anchor plus exact route phone"
    },
    {
      "name": "Faq",
      "variants": [
        "accordion"
      ],
      "states": {
        "closed": "question row",
        "open": "answer visible"
      },
      "notes": "Keyboard accessible"
    },
    {
      "name": "FinalCta",
      "variants": [
        "dark-centered"
      ],
      "states": {
        "default": "dark centered close",
        "focus": "visible teal focus ring on actions"
      },
      "notes": "Localized headline and route-correct CTA"
    }
  ],
  "layout_principles": {
    "spacing_scale": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px",
      "80px",
      "112px"
    ],
    "base_unit": "4px",
    "container": "max-width 1280px with 20px mobile and 32px desktop gutters",
    "grid": "12 columns on desktop, one column on mobile; hero copy spans 6 and form spans 5 with one-column breathing room",
    "section_order": [
      "header",
      "hero",
      "proof-bar",
      "two-options",
      "how-it-works",
      "what-we-buy",
      "local-office",
      "shipping-security",
      "expertise",
      "reviews",
      "faq",
      "final-cta",
      "footer",
      "floating-cta"
    ]
  },
  "depth_elevation": {
    "surface": "#FFFFFF",
    "border": "#E6E2DB",
    "elevation_note": "Use the surface role for raised cards/panels against background; keep shadows subtle and consistent with the component card spec.",
    "iconography": {
      "direction": "Reuse the existing small single-color line icon system.",
      "stroke": "1.75px to 2.5px depending on scale",
      "exclusions": [
        "decorative icon confetti",
        "unrelated icon libraries",
        "multicolor emoji"
      ]
    },
    "motion": {
      "direction": "Subtle opacity and vertical reveal only; form and phone controls remain immediately interactive.",
      "easing": "ease-out",
      "duration": "300ms to 500ms; 0.01ms under prefers-reduced-motion"
    }
  },
  "dos_donts": {
    "design_dos": [
      "Use the established Diamond Banc premium luxury visual system and approved logo assets from the existing LP repo.",
      "Make San Diego / La Jolla intent unmistakable in the hero and local-office section.",
      "Reuse the embedded AI appraisal form in the hero and dedicated lower form section without replacing it with a custom lead form.",
      "Use real approved Diamond Banc imagery and real product-context photography; do not fabricate branded luxury items.",
      "Use strong teal / aqua brand accents with restrained luxury neutrals and high-contrast typography.",
      "Keep the phone CTA visible as a styled button with (858) 391-4047, while CTM may swap it at runtime.",
      "Use clear section anchors, centered dual CTAs, and a form-only floating CTA.",
      "Make the La Jolla office address and local path prominent without implying every lead must visit in person."
    ],
    "design_donts": [
      "Do not overwrite the live root route or any existing market route.",
      "Do not use generic stock or AI-generated images when approved real assets are available.",
      "Do not use a gradient-only hero in place of the established real hero image.",
      "Do not use yellow divider bars, white circle/down-arrow CTA decorations, split screens, clutter, or generic AI effects.",
      "Do not use em dashes, emojis, retail purchase language, pawnshop language, or unsupported financial promises.",
      "Do not use GIA Certified wording, unverified review counts, or an unapproved BBB logo asset.",
      "Do not add navigation links, social exits, or unrelated website links to the paid landing page."
    ],
    "visual_exclusions": [
      "city skylines",
      "AI-generated jewelry",
      "generic stock people",
      "glassmorphism",
      "neon",
      "gold button fills",
      "retail product grids",
      "pawnshop imagery",
      "countdown timers",
      "Adopt structure, composition, and motion ideas from inspiration references; DO NOT adopt their color palette or fonts \u2014 palette and type come from the brand tokens."
    ],
    "messaging_guardrails": [
      {
        "rule": "Always spell the brand Diamond Banc, never Diamond Bank or DiamondBank.",
        "type": "must"
      },
      {
        "rule": "Never imply customers can purchase jewelry, watches, diamonds, or gold from Diamond Banc.",
        "type": "must_not"
      },
      {
        "rule": "Never use pawnshop language or position the experience as a pawnshop.",
        "type": "must_not"
      },
      {
        "rule": "Use free appraisal or quote only with no-obligation framing; do not promise a specific value, payout, loan amount, approval, or return.",
        "type": "must"
      },
      {
        "rule": "Use GIA-accredited gemologists or experienced jewelry experts, never GIA Certified Gemologists.",
        "type": "must"
      },
      {
        "rule": "Do not promote Seller's Agent consignment or Retail Partner services on this route.",
        "type": "must_not"
      },
      {
        "rule": "Keep sell intent primary and present borrowing as an alternative option, not as a guaranteed financial outcome.",
        "type": "must"
      }
    ]
  },
  "responsive_behavior": {
    "mobile_first_notes": [
      "The appraisal card must begin within the first 480px of a 390px viewport as closely as the current approved pattern allows",
      "The route phone must remain readable and tappable in the fixed header",
      "No horizontal overflow at 320px, 390px, 768px, or 1440px",
      "The floating CTA is quote-form only and must not add a duplicate phone CTA"
    ],
    "breakpoints": {
      "mobile": "<=640px",
      "tablet": "641-1024px",
      "desktop": ">=1025px"
    }
  }
}
```

**Typefaces (chosen for this customer - do NOT substitute):**
- Display / headings: **Cormorant Garamond**
- Body / text: **Poppins**
- Source: the customer's own brand guide.
- Load these via `next/font/google` or a self-hosted file. Shipping a different family, or falling back to a system stack, is a build failure.
- Do not reach for Inter, Geist, Roboto or Open Sans. They are the faces a model picks when nothing chose one, so they read as unchosen.

**Agent guidance:**
{
  "instruction_block": "Build a landing-page for Diamond Banc.\nArchetype: localized-premium-valuation funnel that inherits the live Diamond Banc nationwide page. The design remains editorial luxury, with real client-owned jewelry and expert photography, a dark high-contrast hero, a bright appraisal card, serif display type, controlled teal actions, restrained gold rules, and generous white space. Localization comes from the city name, exact phone, and focused office copy, not city skylines or unrelated local stock.. Copy framework: AIDA.\nTheme the ENTIRE build off this client palette \u2014 primary #1C7E86, secondary #222428, accent #BD8D41. Never substitute a generic brand color.\nTypography: headings in Cormorant Garamond, weights 400, 600, and 700, for premium editorial headings, body in Poppins, weights 400, 500, 600, and 700, for body copy, labels, controls, and buttons; honor the typography scale_steps.\nUse the color_roles + states verbatim for surfaces, text, and interactive feedback.\nRender every component across the states given in component_stylings \u2014 do not ship defaults.\nVoice: Premium, modern, discreet, confident, and financially conservative. Use direct language for high-intent searchers, with no hype, no pressure, no pawnshop framing, and no unsupported guarantees. Always say Diamond Banc, never Diamond Bank..\nHARD EXCLUSIONS (never produce): city skylines; AI-generated jewelry; generic stock people; glassmorphism; neon; gold button fills; retail product grids; pawnshop imagery; countdown timers; Adopt structure, composition, and motion ideas from inspiration references; DO NOT adopt their color palette or fonts \u2014 palette and type come from the brand tokens..\nWrite real copy from page_blueprint.copy_direction grounded in the content inventory \u2014 never lorem, never invented facts.",
  "non_negotiables": [
    "client-themed palette (no fixed brand color)",
    "all component states rendered",
    "real copy per blueprint copy_direction",
    "exclude: city skylines",
    "exclude: AI-generated jewelry",
    "exclude: generic stock people",
    "exclude: glassmorphism",
    "exclude: neon",
    "exclude: gold button fills",
    "exclude: retail product grids",
    "exclude: pawnshop imagery",
    "exclude: countdown timers",
    "exclude: Adopt structure, composition, and motion ideas from inspiration references; DO NOT adopt their color palette or fonts \u2014 palette and type come from the brand tokens."
  ]
}

**Page blueprint (build each page section-by-section):**
### `/[market]` - Diamond Banc [Market] | Sell or Borrow Using Your Jewelry (transactional)
- **header** - Keep the exact local phone and quote action available without adding navigation leakage.
  - copy: Diamond Banc logo, exact market phone, and quote anchor. Preserve the existing header layout and logo contrast.
  - components: Header
  - cta: Call the exact market number
- **hero** - Message-match the visitor's city and place the customer-owned appraisal widget above the fold.
  - copy: Use 'Diamond Banc [Market]' in the H1 with the approved value line, existing subhead, chip order, exact route phone, and existing embedded AI appraisal widget.
  - components: Hero, AppraisalEmbed
  - cta: Get my free quote and exact market phone
- **proof-bar** - Establish legitimacy before asking the visitor to evaluate a sensitive high-value transaction.
  - copy: Keep the approved 10,000+ reviews, A+ BBB, experienced experts, and 15+ office proof.
  - components: ProofBar
  - cta: none
- **two-options** - Clarify that one inquiry can lead to a sale or a jewelry equity loan without forcing an early commitment.
  - copy: Preserve the approved sell and borrow cards, full body copy, real consultation photos, and quote CTA.
  - components: TwoOptions, DualCTA
  - cta: Get my instant quote and exact market phone
- **how-it-works** - Reduce process anxiety by showing the four steps from online quote through accepted offer.
  - copy: Keep the existing four-step framework and conservative wording. Mention local office or free insured shipping.
  - components: HowItWorks, DualCTA
  - cta: Get my free quote and exact market phone
- **what-we-buy** - Confirm category fit for natural diamonds, fine and designer jewelry, accepted luxury watches, and precious metals.
  - copy: Preserve all four approved cards and verified client-owned product images. Do not imply retail sales or lab-grown diamond purchasing.
  - components: WhatWeBuy, DualCTA
  - cta: Get my free quote and exact market phone
- **local-office** - Turn generic national trust into a specific nearby-office option for the route's market.
  - copy: Name the market, explain that visitors can book a local appointment or use insured shipping, and display only the exact route phone. Do not use a skyline or generic city imagery.
  - components: LocalOffice, DualCTA
  - cta: Call the exact market number or get a quote
- **shipping-security** - Reassure visitors who prefer the mail-in path that the item remains protected.
  - copy: Preserve the approved insured-shipping and secure-handling content and real packaging image.
  - components: ShippingSecurity, DualCTA
  - cta: Get my free quote and exact market phone
- **expertise** - Show the people and heritage behind the valuation instead of relying on abstract claims.
  - copy: Preserve Mills Menser's third-generation-jeweler story and real team photography. Use experienced-expert terminology.
  - components: Expertise, DualCTA
  - cta: Get my free quote and exact market phone
- **reviews** - Use real attributed customer language to answer trust and process objections.
  - copy: Preserve the three approved testimonials and the 5 out of 5, 10,000+, and A+ aggregate proof.
  - components: Reviews, DualCTA
  - cta: Get my free quote and exact market phone
- **faq** - Resolve obligation, shipping, timeline, payment, loan-option, and item-fit objections.
  - copy: Preserve the existing FAQ questions and answers unless route-local wording is necessary. Do not introduce guarantees.
  - components: Faq, DualCTA
  - cta: Get my free quote and exact market phone
- **final-cta** - Give decided visitors a final local action with the same offer and route-correct phone.
  - copy: Use 'See what your jewelry is worth in [Market]' with the existing approved sentence and benefit chips.
  - components: FinalCta, DualCTA
  - cta: Get my free quote and exact market phone
- **footer** - Close with legal identity and the route-correct phone without leaking the paid visit.
  - copy: Preserve the existing footer structure and legal name, using the exact current market phone.
  - components: SiteFooter, FloatingCTA
  - cta: Get my free quote

_Nav - primary: ['#get-quote']; footer: ['#get-quote', '#faq']_

**Design references:**
- build task input
- current quote.diamondbanc.com deployment
- current diamond-banc-landing repository
- August 13 customer meeting summary

## Client assets
**Client photos to use (recovered from the live site - prefer these over stock/generated):**

- https://quote.diamondbanc.com/_next/image?url=%2Fimages%2Flogo-dark.png&amp;w=3840&amp;q=75&amp;dpl=dpl_Dd69dpYRYwTRRu4VXTaoVSuW6kSS - Diamond Banc
- https://quote.diamondbanc.com/_next/image?url=%2Fimages%2Fhero-jewelry.jpg&amp;w=3840&amp;q=75&amp;dpl=dpl_Dd69dpYRYwTRRu4VXTaoVSuW6kSS - A Diamond Banc diamond riviera necklace beside an emerald-cut green gemstone and diamond ring
- https://quote.diamondbanc.com/_next/image?url=%2Fimages%2Foption-sell.jpg&amp;w=3840&amp;q=75&amp;dpl=dpl_Dd69dpYRYwTRRu4VXTaoVSuW6kSS - A Diamond Banc expert presenting a diamond bracelet to a seated client across an office desk
- https://quote.diamondbanc.com/_next/image?url=%2Fimages%2Foption-loan.jpg&amp;w=3840&amp;q=75&amp;dpl=dpl_Dd69dpYRYwTRRu4VXTaoVSuW6kSS - A Diamond Banc expert showing a jewelry box to a client during an in-office consultation
- https://quote.diamondbanc.com/_next/image?url=%2Fimages%2Fcat-diamonds.jpg&amp;w=3840&amp;q=75&amp;dpl=dpl_Dd69dpYRYwTRRu4VXTaoVSuW6kSS - Diamond tennis necklaces laid over GIA Diamond Dossier reports
- https://quote.diamondbanc.com/_next/image?url=%2Fimages%2Fcat-watches.jpg&amp;w=3840&amp;q=75&amp;dpl=dpl_Dd69dpYRYwTRRu4VXTaoVSuW6kSS - A silver Rolex Turn-O-Graph resting on a dark green Rolex presentation box
- https://quote.diamondbanc.com/_next/image?url=%2Fimages%2Fcat-designer.jpg&amp;w=3840&amp;q=75&amp;dpl=dpl_Dd69dpYRYwTRRu4VXTaoVSuW6kSS - Four ornate designer pieces on white geometric pedestals, including enamel animal jewelry and gold bracelets
- https://quote.diamondbanc.com/_next/image?url=%2Fimages%2Fcat-gold.jpg&amp;w=3840&amp;q=75&amp;dpl=dpl_Dd69dpYRYwTRRu4VXTaoVSuW6kSS - Two yellow-gold cuff bracelets on white studio blocks
- https://quote.diamondbanc.com/_next/image?url=%2Fimages%2Fshipping-secure.jpg&amp;w=3840&amp;q=75&amp;dpl=dpl_Dd69dpYRYwTRRu4VXTaoVSuW6kSS - A Diamond Banc team member packing a jewelry box into insured FedEx Express shipping envelopes
- https://quote.diamondbanc.com/_next/image?url=%2Fimages%2Fexpertise.jpg&amp;w=3840&amp;q=90&amp;dpl=dpl_Dd69dpYRYwTRRu4VXTaoVSuW6kSS - Mills Menser, founder of Diamond Banc, in a portrait photograph
- https://quote.diamondbanc.com/_next/image?url=%2Fimages%2Fteam%2Fteam-mills.jpg&amp;w=3840&amp;q=90&amp;dpl=dpl_Dd69dpYRYwTRRu4VXTaoVSuW6kSS - Mills Menser, Founder &amp; Owner
- https://quote.diamondbanc.com/_next/image?url=%2Fimages%2Fteam%2Fteam-devin.jpg&amp;w=3840&amp;q=90&amp;dpl=dpl_Dd69dpYRYwTRRu4VXTaoVSuW6kSS - Devin Smith, Executive Vice President, Revenue &amp; Operations

## Integration

### Form spec (from research - `offer_cro.json`)
**Lead-form fields** - wire these exactly (matches the builder's `LeadFormField` contract; do not add/drop fields):

| name | type | required | options |
|---|---|---|---|
| `name` | text | yes | - |
| `phone` | tel | yes | - |
| `email` | email | yes | - |
| `zipCode` | text | yes | - |
| `itemPhoto` | file | yes | - |

**Qualifier question:** Qualification and routing are owned by the embedded appraisal widget and Salesforce. Do not recreate, intercept, or alter the customer's fields, validation, item-photo flow, ZIP routing, or submission behavior.

**Primary CTA:** Get my free quote, scrolling to the existing embedded AI appraisal widget
**Secondary CTA:** Call the exact task-specified phone number for the current market route

### Tracking / lead-routing (task-owned values)
- Google traffic: Search and Performance Max.
- GTM container: `GTM-WBLZ2J9`.
- No Meta pixel was supplied in this task input. Preserve the existing shared production pixel `1344125387527189` only because the existing layout owns it and the route must not alter shared instrumentation.
- Mega site key: `ae75ylrmfqweqelx`.
- Mega site ID: `75a85d64-2685-47a6-82e4-6010397e3ddb`.
- CTM: preserve the universal `https://572388.tctm.co/t.js` script. Do not provision or replace CTM infrastructure.
- CRM: the customer-owned appraisal embed routes natively to Salesforce. Do not create a parallel MEGA form, endpoint, or notification path.
- Source phone: `(858) 391-4047`, tel `tel:+18583914047`. Every visible phone and tel href on `/san-diego` must use this source number; CTM may swap it at runtime.
- Submission email: none supplied. Do not invent one.
- Preserve the existing embed success tracking and query-parameter persistence exactly. Use `landing-page-tracking` and `landing-page-forms` as verification references, plus the LP hard rules for centered dual CTAs, form-only floating CTA, favicon, and no navigation exits.
