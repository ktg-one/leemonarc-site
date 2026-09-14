# Motion

## Primary interaction: a connected perspective

Three offset circles represent numbers, business and direction. Selecting Understand → Connect → Move forward brings them into alignment. The labels and explanation change with the graphic; there are no invented financial figures.

`src/components/perspective.tsx` owns the state. `perspective.css` owns geometry and transition timing. `src/lib/motion.ts` owns capability queries and cursor response constants. Global durations and easing are in `src/app/tokens.css`.

Wide screens with enough vertical space and no reduced-motion preference get a short native sticky scroll scene. Its extra travel is 520px. The gate runs twice from the same query: a pre-paint inline script in `layout.tsx` sets `data-scroll-scene` on `<html>` so the section height exists from first paint (page height never inflates post-hydration), and the component's matchMedia listener keeps it in sync on resize or preference changes. No scroll interception, wheel listeners, synthetic scrolling or scroll engine. A passive listener schedules one animation-frame read, and React changes state only at stage thresholds. Clicking a stage takes priority until the scene leaves view.

Mobile, short screens and reduced motion get a normal document-flow section with direct buttons. All narrative is server-rendered; noscript exposes the remaining stage descriptions. Without JavaScript the static composition and service disclosures still work.

## Secondary scroll scene: the monogram study

In the adviser chapter (`#vivienne`), rectilinear drafting geometry — corner brackets, a square outline, a diagonal hairline, cross marks and measurement ticks — assembles around the monogram through three scroll-driven steps: Composition → Construction → Character. It is the rectilinear sibling of the perspective orbits: same gate (`motion.scrollSceneQuery`), same rAF-coalesced passive scroll loop, same `data-step` + CSS transition model. The monogram itself never moves.

`src/components/monogram-study.tsx` owns the state and markup; `monogram-study.css` owns geometry and per-step transforms. Unlike the perspective pin, the art column is sticky while the adviser copy scrolls; the section gains 640px of extra travel. Purely decorative — no controls, no staged copy, overlay and step caption are `aria-hidden`.

The overlay and caption render only under `html[data-scroll-scene="true"]`, so mobile, short screens, reduced motion and no-JS all keep the original static composition.

## Supporting motion

CSS-only hero arrival and viewfinder focus; native scroll-timeline photo depth, gentle section arrival and the closing watermark rise (`.contact-watermark`, root scroll timeline over the final ~640px — banner plus footer height — so the rise starts as the card appears and completes exactly at page bottom; a `view()` range cannot work here because the banner never exits, so cover/exit ranges would clamp) where supported. No hidden-until-JavaScript content and no endlessly rotating decorations.

## Requested cursor

Circle plus immediate dot, fine pointer only. The ring eases behind the pointer and grows on interactive controls. Native cursor remains. It never receives pointer events and switches off for touch or reduced motion. The frame loop stops when settled and cleans up on unmount.

## Safe changes

Keep reduced-motion rules and cleanup paths. Test all three perspective states and resizing across capability thresholds. Don't add sticky pinning to mobile. Prefer transform/opacity to dimensions for animated changes. Review actual browser captures, not source alone.
