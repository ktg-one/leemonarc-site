# Asset provenance

- `public/brand/*.png`: exact byte-for-byte copies of supplied `assets/*.png`. No recolouring, tracing, cropping or logo redesign. All four variants inspected; banner-light is the navigation/footer mark, logo-light is the editorial monogram.
- `public/images/perspective.webp`: photograph by **niklas schoenberger**, https://unsplash.com/photos/green-trees-beside-white-concrete-building-WfCePInWrlQ . Free Unsplash image, not Unsplash+. Source: https://images.unsplash.com/photo-1602128110234-2d11c0aaadfe . Locally downloaded and converted to WebP for reliability. Architectural mood image, not Vivienne's premises and not represented as such. See https://unsplash.com/license . Re-check license context before public launch.
- Newsreader and Manrope: loaded at build time through `next/font/google`, then self-hosted. No browser request to Google Fonts. Newsreader replaces Instrument Serif for the Figma-aligned reference build; it is a substitution for Paraform's proprietary Bureau Serif, not an identical font.
- Business card JPEGs and `assets/2.jpg` inspected as source material, not republished on the site. Do not reuse the poster's guarantees or credential badges without explicit factual sign-off.
- No `assets/reference/` folder was supplied.
- Live Paraform viewport screenshots were captured with BrowserSkill on 25 September into ignored `artifacts/reference/` for comparison. They are evidence only and must not be used as website implementation assets.
- Final hero video, founder portrait and approved client proof are awaiting supply. Use explicit review placeholders. Hero source/poster/crop configuration is isolated so the asset can be swapped without restructuring the page.
- Image generation was attempted but its provider failed DNS resolution. No generated output was produced or used.
