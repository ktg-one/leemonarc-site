# Motion

## Primary interaction: a connected perspective

Three offset circles represent numbers, business and direction. Selecting Understand → Connect → Move forward brings them into alignment. The labels and explanation change with the graphic; there are no invented financial figures.

`src/components/perspective.tsx` owns the state. `perspective.css` owns geometry and transition timing. `src/lib/motion.ts` owns capability queries and cursor response constants. Global durations and easing are in `src/app/tokens.css`.

Wide screens with enough vertical space and no reduced-motion preference get a short native sticky scroll scene. Its extra travel is 520px. No scroll interception, wheel listeners, synthetic scrolling or scroll engine. A passive listener schedules one animation-frame read, and React changes state only at stage thresholds. Clicking a stage takes priority until the scene leaves view.

Mobile, short screens and reduced motion get a normal document-flow section with direct buttons. All narrative is server-rendered; noscript exposes the remaining stage descriptions. Without JavaScript the static composition and service disclosures still work.

## Supporting motion

CSS-only hero arrival and viewfinder focus; native scroll-timeline photo depth and gentle section arrival where supported. No hidden-until-JavaScript content and no endlessly rotating decorations.

## Requested cursor

Circle plus immediate dot, fine pointer only. The ring eases behind the pointer and grows on interactive controls. Native cursor remains. It never receives pointer events and switches off for touch or reduced motion. The frame loop stops when settled and cleans up on unmount.

## Safe changes

Keep reduced-motion rules and cleanup paths. Test all three perspective states and resizing across capability thresholds. Don't add sticky pinning to mobile. Prefer transform/opacity to dimensions for animated changes. Review actual browser captures, not source alone.
