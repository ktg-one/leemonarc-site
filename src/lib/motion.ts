// Motion is enhancement only. Keep this query in sync with perspective.css.
export const motion = {
  scrollSceneQuery:
    "(min-width: 900px) and (min-height: 750px) and (prefers-reduced-motion: no-preference)",
  cursorQuery:
    "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
  cursorFollow: 0.2,
  cursorSettleDistance: 0.2,
};
