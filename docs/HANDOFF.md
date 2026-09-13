# Handoff — Lee Monarc prototype

## What is built

A homepage and contact page. The homepage establishes the full visual language and contains expandable expertise, a three-stage perspective interaction, Vivienne's introduction and a direct invitation to talk. Contact deliberately uses real mail/phone links instead of an unconfigured form.

## Where to change things

| Change                                                    | Location                                                          |
| --------------------------------------------------------- | ----------------------------------------------------------------- |
| Palette, type families, layout gutter, easing/durations   | `src/app/tokens.css`                                              |
| Homepage sections, hero, adviser copy, closing invitation | `src/app/page.tsx`                                                |
| Contact page composition and introductory copy            | `src/app/contact/page.tsx`                                        |
| Business/contact fields, service and perspective copy     | `src/content/site.ts`                                             |
| Global responsive composition                             | `src/app/globals.css`                                             |
| Contact-specific layout                                   | `src/app/contact/contact.css`                                     |
| Header, footer and arrow primitive                        | `src/components/chrome.tsx`                                       |
| Mobile menu behaviour                                     | `src/components/mobile-menu.tsx`                                  |
| Main interaction state and scroll handling                | `src/components/perspective.tsx`                                  |
| Main interaction geometry                                 | `src/components/perspective.css`                                  |
| Cursor behaviour                                          | `src/components/cursor.tsx`                                       |
| CSS arrival/scroll effects                                | `src/components/motion.css`                                       |
| Capability queries and cursor intensity                   | `src/lib/motion.ts`                                               |
| Supplied identity and photo                               | `public/brand/`, `public/images/`; provenance in `docs/ASSETS.md` |

## Safe editing

Read `AGENTS.md`, then `docs/BRIEF.md`, `docs/DESIGN.md` and `docs/MOTION.md`. Pages are Server Components. Keep client boundaries limited to the cursor, menu and perspective interaction. Do not mark the entire layout/page `use client` just to animate an element.

Logo PNGs are exact copies, not recreated type. Business spelling is **Lee Monarc**, even where older briefing prose says Monarch. Keep assets unchanged. The architecture photo is a mood image, not the office. No supplied portrait is available; do not invent one.

There are no GSAP, Motion, ScrollCraft or WebGL dependencies. The concept did not need them. The scene uses native sticky layout plus passive scroll measurement. It activates only on sufficiently large screens without reduced motion. Stage buttons remain usable on all screens. Resizing/reduced-motion changes remove pinning. Manual stage selection takes priority until the section leaves view. Its controls share a fixed explanation region; test long edits at all three widths.

The cursor never hides the native pointer, never catches clicks and shuts down on touch/reduced motion. Its requestAnimationFrame loop ends when settled. No animation is required to reveal essential text. Native service disclosures and mobile navigation work without JavaScript; the perspective chapter exposes all explanatory content in noscript.

## Running and tests

Commands are in README. Playwright defaults to a running server on 3100; `PLAYWRIGHT_BASE_URL` changes the test target. Current review production server uses 3101. Tests cover navigation, services, cursor, scroll stages, both pages at 360/768/1440, axe accessibility, no-JavaScript and reduced-motion behaviour. Captures and local metrics are in `artifacts/production/`; these are ignored by Git.

Next.js's current bundled documentation is in `node_modules/next/dist/docs/`. The dev server appended its documentation notice to AGENTS.md; this was framework-generated, not a rewrite of the brief. An unrelated VS Code notification setting appeared during the session and was left untouched. No commits or pushes were made. `.codegraph/` remains untouched.

On Windows, stopping an npm/npx wrapper may leave its Node server child listening. Before rebuilding and restarting production, verify the port is actually free and terminate only the confirmed project worker. Otherwise old in-memory HTML may reference removed build chunks. A 200 response from `/` is not sufficient: the asset smoke test checks CSS/JS responses and actual loaded styles.

## Dependency note

The installed Next ESLint React plugin is incompatible with ESLint 10's removed `context.getFilename` API. ESLint 9.39.5 is pinned as the working compatibility baseline; it emits an upstream support/deprecation notice. Upgrade the pair together when the plugin supports ESLint 10, then re-run lint. Runtime build dependencies are not affected. npm reported zero known vulnerabilities at installation.

## Before public release

- Client approval of provisional wording and service scope, especially e-CFO positioning.
- Verify phone/email are current. Present values are supplied-source values, not independently verified reachability.
- Confirm imagery/license suitability and provide a genuine portrait if desired.
- Hosting/domain and approved legal/privacy requirements. No analytics or personal-data backend is installed.
- Remove noindex only after approval. Noindex is not access control; use hosting preview protection for a private external review.
- If adding a contact form, build real submission, validation, abuse protection, delivery failure handling and approved privacy text. Do not replace working direct contact with a fake success state.
- Cross-browser and real-device checks before public launch. Current automated/visual verification is local Chromium, not a claim of Safari/Firefox certification.
