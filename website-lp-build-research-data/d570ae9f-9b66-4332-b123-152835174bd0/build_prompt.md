## Task: Surgical edit for Diamond Banc Beverly Hills local team and company roster

This is an authorized `LANDING_PAGE_EDITS` task. Work only on the existing `/beverly-hills` route in `Landing-Pages-Websites/diamond-banc-landing`. Do not create a new website, route, Vercel project, or ad campaign. The existing production custom domain is `https://quote.diamondbanc.com/beverly-hills` and must remain unchanged.

## Files in scope
- `src/components/MarketLandingPage.tsx`, only as needed to make the existing `/beverly-hills` route place its existing `#local-office` section exactly once immediately after `#two-options` and before `#how-it-works`. Preserve sibling route order and behavior.
- `src/components/LocalOffice.tsx` and `src/components/LocalProfileCard.tsx`, only for the requested two-profile Beverly Hills treatment and responsive layout.
- `src/components/Expertise.tsx` and `src/lib/content.ts`, only for the Beverly Hills route-specific roster heading/intro and Jordan Isaacs role override.
- `public/images/team/originals/silvea-parsamyan.jpg` and `public/images/team/originals/thuyvi-tran.jpg`, plus optimized derivatives at the exact display and 2x dimensions used by the existing picture sources.
- Route-specific data needed in `src/lib/content.ts`.
- Do not change other routes, shared tracking, forms, appraisal embed/mount, CTM, attribution, query-string persistence, phone/dynamic routing, anchors, metadata, or appointment paths.

## Files out of scope
- `src/app/page.tsx`, `src/app/[market]/page.tsx`, `src/app/layout.tsx`, `src/hooks/**`, all non-Beverly market data, Rolex route/components, shared tracking/form/appraisal code, dependencies, lockfiles, generated output, `.vercel`, and unrelated images.
- Do not reformat or refactor untouched code. Do not alter source data for Boca Raton or any other location.

## Exact edit specification

1. In `/beverly-hills` only, move the existing `#local-office` section to immediately after `#two-options` and before `#how-it-works`. Render it once. Keep the `id="local-office"` anchor.
2. Preserve the current charcoal background, teal accents, serif headings, section width, padding, CTA styling, office address/location details, existing tracked call action and dynamic routing. Keep the eyebrow exactly `YOUR LOCAL OFFICE`.
3. Beverly Hills local section copy:
   - H2: `Meet your Beverly Hills team`
   - Introduction: `Meet Silvea, your Beverly Hills Market Director, and Thuyvi, who supports our California offices.`
   - Compact line: `Visit by appointment, or request a quote online. Prefer to mail your item? Free insured shipping is also available.`
4. Replace the two generic cards only for Beverly Hills with two profiles in this exact order:
   - Silvea Parsamyan, role `Beverly Hills Market Director`, bio `Silvea leads the Beverly Hills office with more than 20 years of jewelry experience, including helping open five jewelry locations across Los Angeles.`, alt `Silvea Parsamyan`.
   - Thuyvi Tran, role `Regional & Market Director`, bio `A GIA Graduate Gemologist, Thuyvi supports Diamond Banc's California offices and brings regional expertise to the Beverly Hills team.`, alt `Thuyvi Tran`.
   Do not imply Thuyvi is based in Beverly Hills or promises appointments there.
5. Profile layout: because there are two people, use vertically stacked horizontal rows in the profile column at desktop with 112px square portraits, 20–24px gaps, H3 names, live role and bio alongside. Below 768px, use 96px square portraits beside text, stacked after office introduction/actions. At very narrow widths allow a profile to stack if needed, never shrink or clip text. No three-column layout, tabs, carousel, or Read more. Preserve mobile hero/form-first order.
6. Use the exact attached originals as source files. Preserve originals under `public/images/team/originals/`. Do not hotlink. Create optimized JPEG fallback, WebP, and AVIF derivatives with explicit dimensions and responsive `picture`/`srcSet` at 96/192/112/224 widths as appropriate. Lazy-load below-fold portraits, use width/height, and preserve fully visible face/head crops. Do not retouch or synthesize.
7. In `#expertise`, for Beverly Hills only, change roster heading to `Backed by the Diamond Banc team`, add exactly `Our local offices are supported by Diamond Banc's broader team of leaders and specialists.`, retain founder story and founder portrait, retain all seven roster names and current order, and change only Jordan Isaacs' role to `National Director of Funding`. Do not remove anyone and do not alter other routes.
8. Preserve the existing quote CTA `Get my free quote` to `#get-quote`, tracked call action, appraisal embed/mount, scripts, events, attribution, query-string handling, forms, phone routing, anchors, metadata, and sibling routes byte-identically wherever not required by this spec. This is presentation/content only, with no instrumentation impact.

## Verification acceptance
- `npx next build` passes.
- Run the project lint with zero errors.
- Browser verify `https://quote.diamondbanc.com/beverly-hills` at 320px, 390px, and at least 1280px. Confirm no horizontal overflow, clipped names, layout shift from portraits, or broken image crops. Capture desktop/mobile screenshots of the local section and retained roster.
- Confirm live DOM order: `#two-options`, `#local-office`, `#how-it-works`; one `#local-office`; exact copy, profile order, roles, bios, alt text, and roster treatment.
- Confirm `tel:+13102999557` and the existing CTM/dynamic rendering remain intact. Do not submit a real lead. Confirm appraisal embed/mount, form wiring, tracking IDs, events, attribution, query-string handling, metadata, and sibling route files remain unchanged.
- Run a11y/DOM checks for the edited section and no overflow at all required widths.
- Create/update the PR from the worktree. Push the branch. Do not merge manually. After opening and after every push, use `skills/landing-page-deploy/scripts/lp-ship-pr.sh request Landing-Pages-Websites/diamond-banc-landing <PR_NUMBER>`, then use `lp-ship-pr.sh merge` until it exits 0. Customer review is not a ship gate.

## Tracking and lead-routing preservation
This edit must not alter tracking or lead-routing code. Preserve exact existing values and implementation for `MEGA_TAG_CONFIG`, site ID/key, GTM `GTM-WBLZ2J9`, Meta Pixel `1344125387527189`, CTM universal script/account `572388`, customer/site IDs, `useTracking`, appraisal embed/mount, forms, events, attribution, query params, and dynamic phone insertion. Preserve the existing raw/source phone `310-299-9557` and `tel:+13102999557` for Beverly Hills. Do not add or remove form fields, qualification controls, consent behavior, conversion events, destinations, or phone routing.

## Design context
Use the existing Diamond Banc premium editorial system. Preserve charcoal/teal/gold palette, Cormorant Garamond display type, Poppins body type, current section width/padding/CTA styling, and existing reveal motion. This is a surgical edit, not a redesign. Do not add generic stock, city skylines, new hero imagery, hero headshots, new hero links, external links, or synthetic group imagery.

## Image inventory and quality gate
- `silvea-parsamyan.jpg`: source dimensions 1490x2260, portrait, exact source attachment. Slot: Beverly Hills `#local-office` profile row, 112px desktop / 96px mobile, with 2x derivatives.
- `thuyvi-tran.jpg`: source dimensions 1438x2235, portrait, exact source attachment. Slot: Beverly Hills `#local-office` profile row, 112px desktop / 96px mobile, with 2x derivatives.
- Preserve original downloads; do not blindly serve archival JPEGs at display scale. The delivered files must be optimized and measured, contain the complete face/head, use the exact names for alt text, and use an appropriate JPEG fallback plus WebP/AVIF sources. Use `object-position`/crop only as needed to keep the head fully visible. Candidate section assignments remain subject to this quality gate.

Before handing off, confirm there are zero unfilled orchestrator placeholders or unresolved `TODO` instructions in this prompt, run the build/lint/browser checks, and provide concise evidence in the PR description.
