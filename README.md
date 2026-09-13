# Lee Monarc — Website prototype

A Next.js / React / TypeScript website for Vivienne Lee. The brief and supplied assets remain authoritative. This is a private review build, not a published site.

## Run

From this folder:

- `npm ci`
- `npm run dev` — http://127.0.0.1:3100
- `npm run build`
- `npm start` — production server on port 3100 (stop dev first)

For a simultaneous production preview: `npx next start --hostname 127.0.0.1 --port 3101`.

## Verify

- `npm run lint`
- `npm run typecheck`
- `npm test` — against the running server on port 3100
- `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3101 npm test` — Git Bash, against production
- `node scripts/verify-visual.mjs` — production captures on port 3101, saved under `artifacts/production/`

Browser setup on a new machine: `PLAYWRIGHT_SKIP_BROWSER_GC=1 npx playwright install chromium`. The environment variable prevents deleting other projects' cached browser versions.

## Edit

Start with [docs/HANDOFF.md](docs/HANDOFF.md). Design tokens live in `src/app/tokens.css`; service and perspective content in `src/content/site.ts`; compositions in `src/app/page.tsx` and `src/app/contact/page.tsx`.

No CMS, animation framework, database, tracking scripts or server-side contact form. Fonts and imagery are local. Contact links open the user's email or telephone app.

## Review before launch

Confirm provisional copy and service scope with Vivienne/Youssef. Confirm current contact details. Hosting/domain, approved legal content and any future contact-form handling remain launch decisions. `robots: noindex` is intentional until approval; it is not authentication.
