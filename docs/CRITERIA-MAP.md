# Criteria map against current website

Date: 2026-09-24
Basis: code inspection against the revised deck criteria in artifacts/copy/12-shared-navigation-and-website-messages.txt and artifacts/copy/13-review-notes-for-vivienne.txt, plus docs/BRIEF.md acceptance criteria.

Legend:
- Met: implemented in code and aligned with supplied criteria/copy
- Met (publish sign-off pending): implemented as supplied; publication governance is a separate decision
- Gap: not yet implemented
- Pending by design: intentionally deferred per current prototype scope

## 1) Shared navigation and website messages (Section 12)

| Criterion | Status | Evidence |
|---|---|---|
| Main nav includes Services, Who we help, About us, Contact CTA | Met | src/components/chrome.tsx, src/components/mobile-menu.tsx |
| Primary CTA text is "Tell us what's on your mind" | Met | src/components/chrome.tsx, src/components/mobile-menu.tsx, src/app/page.tsx |
| Footer message: "Know your numbers. Decide what comes next." | Met | src/components/chrome.tsx |
| Footer includes main links + Privacy Policy | Met | src/components/chrome.tsx |
| Footer includes email, Perth location, Australia-wide wording | Met | src/components/chrome.tsx, src/content/site.ts |
| Not-found page copy and actions match deck | Met | src/app/not-found.tsx |

## 2) Revision-direction criteria (Section 13)

| Criterion | Status | Evidence |
|---|---|---|
| Homepage includes "three questions" resource section | Met | src/app/page.tsx |
| Acquisition page includes short buyer checklist | Met | src/app/services/business-acquisition/page.tsx |
| Language invites enquiry vs immediate booking promises | Met | src/app/page.tsx, src/components/chrome.tsx, src/app/contact/page.tsx |
| Founder first-person voice is clearly provisional pending Vivienne approval | Met | src/app/about/page.tsx (PROVISIONAL comments) |
| Hero notification and founder-photo approval handled as provisional | Met | src/app/page.tsx contains the narrative direction and preserves review-first workflow |
| Pricing signal (starting price/range, inclusions, billing period, GST, conditions) added | Gap | No pricing block with these specifics in pages; FAQ remains generic in src/app/page.tsx |
| Client proof (approved testimonials/case examples) added | Gap | No testimonial/case-study content in current pages |
| Actual client-experience details (software, reports, review frequency, channels, delivery model) added | Gap | Not surfaced as concrete process details in service pages |
| Privacy page exists at /privacy | Met | src/app/privacy/page.tsx |
| Privacy policy fully completed and legally reviewed | Gap | src/app/privacy/page.tsx is explicit placeholder |

## 3) Factual checks from Section 13

| Criterion | Status | Evidence |
|---|---|---|
| Public contact email is vivienne@leemonarc.com.au | Met | src/content/site.ts, src/app/contact/page.tsx |
| Business location and Australia-wide wording | Met | src/content/site.ts, src/components/chrome.tsx, src/app/about/page.tsx |
| Chartered Accountant / years-of-experience claims carried from supplied copy | Met (publish sign-off pending) | Claims appear in src/app/page.tsx and src/app/about/page.tsx |
| Promoted service scopes carried from supplied copy | Met (publish sign-off pending) | Service pages exist under src/app/services/* |

## 4) Publication checks from Section 13

| Criterion | Status | Evidence |
|---|---|---|
| Enquiry form connected and success/error handling tested | Pending by design | Current contact model is direct mailto/tel in src/app/contact/page.tsx; no web form implementation |
| Secondary CTAs point to correct sections/pages | Met | Internal links and route CTAs across src/app/page.tsx and services pages |
| Service links, email links, privacy link functionally present | Met | src/components/chrome.tsx, src/app/contact/page.tsx, src/app/services/page.tsx |
| Professional disclosures/business identifiers published | Gap | Not yet added in final legal/professional disclosure format |

## 5) Prototype acceptance criteria from docs/BRIEF.md

| Criterion | Status | Evidence |
|---|---|---|
| Local production-ready structure with clear edit points | Met | README.md, docs/HANDOFF.md, tokenized/content split in src/app/tokens.css and src/content/site.ts |
| Desktop/tablet/mobile responsive implementation | Met | CSS architecture and viewport-targeted Playwright tests in tests/quality.spec.ts |
| Keyboard navigation and accessibility checks | Met | tests/quality.spec.ts, tests/enhancements.spec.ts, semantic nav/layout in components |
| Reduced-motion and no-JS fallback behavior | Met | tests/quality.spec.ts, tests/site.spec.ts, progressive patterns in page/components |
| Exact supplied logo usage and naming consistency | Met | src/components/chrome.tsx, assets usage via /public/brand |

## Priority gaps to close before publish

1. Finalize and legally review full privacy policy content for /privacy.
2. Add approved pricing specifics (or intentionally defer with explicit statement).
3. Add approved client proof (named testimonial or anonymized case snapshots).
4. Add verified process details for "how working together works".
5. Keep noindex until final publication sign-off is complete.
