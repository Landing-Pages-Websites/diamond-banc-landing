> **INTENTIONAL FRAMEWORK PRESERVATION:** Do not add standalone problem or agitation sections. The customer explicitly requested the same approved nationwide content framework, localized per market. Preserve that framework and the active nationwide root route.

## Task / scope
Build the landing page for **Diamond Banc**. Conversion goal: Primary conversion is a successful submission through Diamond Banc's existing embedded AI appraisal widget, which captures name, phone, email, ZIP code, and an item photo and routes natively to Salesforce. Secondary conversion is a qualified phone call to the exact market-specific number supplied in the build task. The nationwide root page must remain unchanged and live throughout the work.

Positioning: A premium, no-obligation way to discover what a valuable item may be worth, with two possible outcomes from one inquiry: sell the item or keep it and borrow against it. Lead with the instant quote and local-office convenience, then support the decision with Diamond Banc's 5 out of 5 reputation, 10,000+ combined reviews, A+ BBB rating, experienced experts, and third-generation-jeweler heritage.

Done = the page(s) render per the Design context below, the real copy is used (no invented facts), `npx next build` is green, and the a11y snapshot is clean.

## Files in scope
- New dynamic route and route metadata: `src/app/[market]/page.tsx`.
- New typed route configuration: `src/lib/markets.ts`.
- New market rendering/context components as needed, for example `src/components/MarketLandingPage.tsx`, `src/components/MarketProvider.tsx`, and `src/components/LocalOffice.tsx`.
- The smallest optional-prop/context changes required in existing route-sensitive surfaces: `src/components/Header.tsx`, `src/components/Hero.tsx`, `src/components/DualCTA.tsx`, `src/components/FinalCta.tsx`, and `src/components/SiteFooter.tsx`. Existing root defaults and rendered output must remain unchanged.
- `content-sources.json` only to add the task as the source for 15 route names and phone values; preserve existing claim records.
- Copy the complete compact research contract from `/var/lib/megaclaw/workspace/website-lp-build-research-data/d570ae9f-9b66-4332-b123-152835174bd0/` into repo path `website-lp-build-research-data/d570ae9f-9b66-4332-b123-152835174bd0/`. Include at least `build_context.json`, `brand.json`, `ai_build_contract.json`, `recommendations.json`, `proof.json`, `content_inventory.json`, `offer_cro.json`, `design_direction.json`, `page_blueprint.json`, `inspiration.json`, `competitors.json`, and `typography.json`.

## Files out of scope
- `src/app/page.tsx`: active nationwide root route; keep byte-identical.
- `src/app/layout.tsx`, `src/hooks/useTracking.ts`, `src/components/AppraisalEmbed.tsx`, and `src/components/QueryParamPersistence.tsx`: preserve byte-identical. Tracking IDs, widget embed code, success handler, and attribution persistence are proven production behavior.
- `src/app/globals.css`, `public/**`, favicon files, logo files, and all existing client-owned photography: preserve byte-identical unless an unavoidable route-layout defect is demonstrated in verification.
- `package.json`, lockfile, Next.js config, TypeScript config, generated files, dependencies, and build tooling.
- Do not change or remove any existing root-route copy, proof, testimonials, FAQs, anchors, form behavior, instrumentation, or phone value.

## Acceptance criteria
- All required sections present: hero and embedded AI appraisal widget, trust bar with 5 out of 5 reputation, 10,000+ reviews, A+ BBB rating, and local-office scale, sell-or-borrow options, four-step process, accepted asset categories, localized office section, shipping and security, expertise and third-generation-jeweler story, real attributed testimonials, FAQ, final CTA, legal footer and floating CTA.
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
    "brand_voice": "Premium, composed, specific, and reassuring. Explain a valuable-item transaction in plain language without sounding like a pawnshop, discount buyer, or aggressive lender. Use short direct headings, transparent process copy, and restrained urgency. The brand name is always Diamond Banc.",
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
      "text": "#1A1A1A",
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
      "states": {},
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
      "states": {},
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
      "states": {},
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
      "Inherit the existing Diamond Banc premium dark-ink, teal, gold, and white visual system",
      "Reuse the current real Diamond Banc jewelry, shipping, founder, and team photography",
      "Keep the appraisal card above the fold on mobile and desktop",
      "Localize the hero headline and office language without making all 15 routes visually inconsistent",
      "Keep all existing section anchors and at least six meaningful sections per route"
    ],
    "design_donts": [
      "Do not redesign or modify the live nationwide root route",
      "Do not generate AI imagery or use generic stock photography",
      "Do not introduce a generic city skyline as the localization mechanism",
      "Do not change the GTM, MegaTag, Meta Pixel, CTM, form embed, or form success handler",
      "Do not add a retail navigation, product catalog, or unrelated outbound links"
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
        "rule": "Use Diamond Banc exactly; never Diamond Bank or Diamond Bacn",
        "type": "must"
      },
      {
        "rule": "Keep sell and borrow options at offer parity while leading with high-intent selling language",
        "type": "must"
      },
      {
        "rule": "Use only the exact market-specific phone number supplied for each route in raw source and tel links",
        "type": "must"
      },
      {
        "rule": "Reuse the customer-owned appraisal widget and preserve its Salesforce routing",
        "type": "must"
      },
      {
        "rule": "Use only verified client-owned photography already in the repo",
        "type": "must"
      },
      {
        "rule": "Do not use pawnshop language",
        "type": "must_not"
      },
      {
        "rule": "Do not imply Diamond Banc sells jewelry or watches to consumers",
        "type": "must_not"
      },
      {
        "rule": "Do not promise guaranteed valuations, guaranteed loan terms, or specific dollar outcomes",
        "type": "must_not"
      },
      {
        "rule": "Do not call people GIA-certified gemologists",
        "type": "must_not"
      },
      {
        "rule": "Do not use an em dash in any customer-facing copy or metadata",
        "type": "must_not"
      },
      {
        "rule": "Preserving the existing nationwide root route, tracking IDs, CTM script, form behavior, and approved copy is required",
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
  "instruction_block": "Build a landing-page for Diamond Banc.\nArchetype: localized-premium-valuation funnel that inherits the live Diamond Banc nationwide page. The design remains editorial luxury, with real client-owned jewelry and expert photography, a dark high-contrast hero, a bright appraisal card, serif display type, controlled teal actions, restrained gold rules, and generous white space. Localization comes from the city name, exact phone, and focused office copy, not city skylines or unrelated local stock.. Copy framework: AIDA.\nTheme the ENTIRE build off this client palette \u2014 primary #1C7E86, secondary #222428, accent #BD8D41. Never substitute a generic brand color.\nTypography: headings in Cormorant Garamond, weights 400, 600, and 700, for premium editorial headings, body in Poppins, weights 400, 500, 600, and 700, for body copy, labels, controls, and buttons; honor the typography scale_steps.\nUse the color_roles + states verbatim for surfaces, text, and interactive feedback.\nRender every component across the states given in component_stylings \u2014 do not ship defaults.\nVoice: Premium, composed, specific, and reassuring. Explain a valuable-item transaction in plain language without sounding like a pawnshop, discount buyer, or aggressive lender. Use short direct headings, transparent process copy, and restrained urgency. The brand name is always Diamond Banc..\nHARD EXCLUSIONS (never produce): city skylines; AI-generated jewelry; generic stock people; glassmorphism; neon; gold button fills; retail product grids; pawnshop imagery; countdown timers; Adopt structure, composition, and motion ideas from inspiration references; DO NOT adopt their color palette or fonts \u2014 palette and type come from the brand tokens..\nWrite real copy from page_blueprint.copy_direction grounded in the content inventory \u2014 never lorem, never invented facts.",
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
**Preserve the customer-owned embedded widget.** The fields below are informational only. Do NOT create or wire a new React/MEGA form, do NOT add or drop fields, and do NOT alter the widget script, field validation, upload flow, Salesforce routing, or the existing one-shot success listener:

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

### Tracking / lead-routing (task-owned values, preserve exactly)
- Google traffic: Search and Performance Max.
- GTM container: `GTM-WBLZ2J9`.
- Mega site key: `ae75ylrmfqweqelx`.
- Mega site ID: `75a85d64-2685-47a6-82e4-6010397e3ddb`.
- Existing Meta Pixel: `1344125387527189`. Preserve because it is active on the shared production site, even though this task's declared traffic is Google.
- CTM: preserve the universal `https://572388.tctm.co/t.js` script. WEB does not provision or replace CTM infrastructure.
- CRM: the customer-owned appraisal embed routes natively to Salesforce. Do not create a parallel MEGA form, endpoint, or notification path.
- Form success: preserve the existing `window.MegaTag.trackEvent("form_submit", ...)` and `window.dataLayer.push({ event: "form_submit", ... })` listener byte-identical.
- Query parameter persistence: preserve the existing component and behavior byte-identical.
- Phone source rule: each localized route must render only its exact task-specified source number in raw HTML, JavaScript-disabled DOM, visible text, aria labels, and every `tel:` href. CTM may swap at runtime only. Root keeps `573-875-2265`.
- Route matrix, exact values:
  - `/tampa`, display `Tampa, FL`: `813-609-4331`, tel `+18136094331`
  - `/orlando`, display `Orlando, FL`: `407-232-7688`, tel `+14072327688`
  - `/coral-gables`, display `Coral Gables, FL`: `(786) 605-9593`, tel `+17866059593`
  - `/aventura`, display `Aventura, FL`: `954-323-8475`, tel `+19543238475`
  - `/boca-raton`, display `Boca Raton, FL`: `561-430-5035`, tel `+15614305035`
  - `/west-palm-beach`, display `West Palm Beach, FL`: `561-899-7575`, tel `+15618997575`
  - `/sarasota`, display `Sarasota, FL`: `941-877-5472`, tel `+19418775472`
  - `/nashville`, display `Nashville, TN`: `615-695-7675`, tel `+16156957675`
  - `/atlanta`, display `Atlanta, GA`: `404-407-5046`, tel `+14044075046`
  - `/roswell`, display `Roswell, GA`: `678-403-6344`, tel `+16784036344`
  - `/scottsdale`, display `Scottsdale, AZ`: `(602) 878-6698`, tel `+16028786698`
  - `/beverly-hills`, display `Beverly Hills, CA`: `310-299-9557`, tel `+13102999557`
  - `/st-louis`, display `St. Louis, MO`: `314-876-6659`, tel `+13148766659`
  - `/columbia`, display `Columbia, MO`: `573-875-2265`, tel `+15738752265`
  - `/kansas-city`, display `Kansas City, MO`: `816-597-5773`, tel `+18165975773`
- Use the `landing-page-tracking` and `landing-page-forms` rules as verification references, but this is an existing customer-owned embedded-form implementation. Preservation beats refactoring.
- Keep all route pages within the existing Git-linked Vercel project `prj_w0GptW5ExWD1w4WgtuPm8QqAZJVW`, project name `diamond-banc-landing-p6kudpaaxq`, production domain `quote.diamondbanc.com`.

### Route and preservation acceptance, all mandatory
- Generate exactly the 15 route slugs above. Unknown market slugs must 404.
- Route H1 should lead with `Diamond Banc {Market}` and retain the approved value message. Use route-specific metadata without em dashes.
- Use one typed route data source and one shared route template. Do not create 15 copy-pasted page trees.
- On localized routes, replace the nationwide all-market map with one focused local-office section. Do not change the root LocationMap.
- Do not claim people are GIA-certified. Use approved `experienced experts` language. Do not add pawnshop or retail-purchase language.
- No em dash (`U+2014`) anywhere under `src/` or in served HTML. No en dash or double hyphen substitution.
- Keep all existing root anchors and ensure localized routes have at least six descriptive kebab-case section IDs in the same DOM order.
- Floating CTA remains form-only. Do not add a phone CTA to the floating bar.
- Verify root preservation with `git diff` plus a live/preview comparison for key H1, phone, tracking IDs, form embed URL, section order, and anchor list.
- Verify all 15 routes at 390px and at least representative Tampa, Coral Gables, Nashville, Scottsdale, Beverly Hills, and Kansas City routes at 1440px. No overflow, clipped header phone, or form-card regression.
- Run build, typecheck, a11y, design review, code review, route matrix tests, raw-source phone tests, and `grep -R -n '—' src` before committing.
- Commit on the task branch using author `Peter <peter@gomega.ai>`. Do not deploy from the worktree and do not push until controller verification.
