# Project Brief
## Details
"I had a discussion with Vivienne about the direction she would like to take, and we both felt that this website is a strong reference point: **https://www.paraform.com/**
We like the overall branding direction, visual style, layout, and the way the site feels polished and modern. Would you be able to use this as inspiration when creating Vivienne’s website and develop something with a similar level of visual quality and direction?" = Client request

**Project**: Lee Monarc Website
**Project Deadline**: 25th September 2026
**1st prototype required by**: 14th September 2026
**Non-negotiables**:
- Branding (Colour & Typography) and design system must work with items in assets/
- "Website must be editable by Codex and Claude code"
- Vivienne asked for the cursor fx with the circle and dot following it around
**Context**:
- Solo Accountant Vivienne Lee & her Creative director Youssef in Perth, WA. Targeting slightly more high-end clientele. 
- "Polished and Modern"
- **Vivienne loves animations** - if you look at paraform.com every single view port has it's own animated feature. 
- She also loves GSAP scrolltrigger and will probably be asked it of us ~ but I'll try and talk it down in the meeting
- alternatively, https://github.com/nateherkai/scroll-craft <-- Codex plugin/skill that builds impressive scroll driven sites without scrolltrigger's mess

---

## Project

Build the initial Lee Monarch website.

Read `AGENTS.md` completely before doing anything else.

Then inspect:
1. the entire current project structure,
2. every supplied Lee Monarch logo/wordmark asset,
3. any files in `/assets/reference`,
4. the Paraform reference linked from AGENTS.md.

Assume this project is under a two-week production deadline.

The objective is to establish a strong, production-quality creative direction and working site that a creative director can continue editing through Codex afterward.

Do not spend the sprint manufacturing a large brand deck or a speculative design system.

## Phase 1 — Understand

Infer the minimum viable brand system from the approved logo:

- core colors
- typography direction
- spacing/rhythm
- imagery direction
- component character
- interaction personality

Study Paraform for its relationship between simple structure and sophisticated motion.

Do not copy it.

Identify what makes the reference feel unusually polished despite relatively simple information architecture.

## Phase 2 — Conceive

Explore multiple directions internally.

Do not present concept options unless they materially affect business scope.

Select the strongest direction yourself based on:
- brand fit
- audience credibility
- originality
- interaction quality
- maintainability
- performance

Commit to it and build.

## Phase 3 — Establish the visual world

Create only the documentation required to preserve useful decisions:

- `docs/BRIEF.md`
- `docs/DESIGN.md`
- `docs/MOTION.md`

Keep them concise.

They should describe the decisions actually being implemented, not hypothetical systems.

The existing logo remains authoritative.

## Phase 4 — Build the homepage first

Build the homepage as the reference implementation for the entire site.

It must establish:

- navigation
- typography
- spacing
- color usage
- image treatment
- buttons/links
- section rhythm
- responsive behaviour
- motion language
- footer

The page should communicate that Lee Monarch is more than a transactional accountant: she operates as a commercially minded financial partner / e-CFO style adviser.

Use provisional copy where necessary but invent no factual credentials or business claims.

The homepage must look excellent with JavaScript animation disabled.

## Phase 5 — Motion

Once the static composition is strong, introduce motion.

Give the homepage one primary memorable interaction.

Use supporting motion sparingly.

Choose animation technology based on the actual concept rather than preference.

Evaluate ScrollCraft where substantial scroll choreography is required.

Use Motion, GSAP, or Three.js only where they provide a clear advantage.

Do not introduce an animation library merely because it is available.

Respect `prefers-reduced-motion`.

## Phase 6 — Expand

Once the homepage establishes the language, determine the minimum necessary remaining pages from the actual narrative and content.

Likely candidates:

- Services
- Advisory / e-CFO
- About
- Contact

Do not manufacture unnecessary pages.

Reuse the visual language without turning every page into the same composition.

Where appropriate, give major pages their own restrained signature interaction.

## Phase 7 — Verify

Do not declare completion based on source inspection.

Run the application and visually inspect it.

Verify desktop and mobile together.

Test representative widths around:
- 360px
- 768px
- 1440px

Inspect the full scroll experience and animation states.

Check:
- typography
- spacing
- visual hierarchy
- crops
- overflow
- navigation
- focus
- reduced motion
- console
- responsive behaviour
- animation smoothness
- layout stability

Fix all obvious defects in one bounded correction pass, then confirm the result.

Run the production build and relevant type/lint checks.

## Phase 8 — Handoff

Create `docs/HANDOFF.md`.

Keep it practical.

Document:
- where global design tokens live
- where content is edited
- where page compositions live
- where motion configuration lives
- which dependencies power unusual interactions
- any fragile or non-obvious implementation details
- how a future Codex/Claude/Gemini agent should modify the site safely

The creative director should be able to enter this repository and make substantial visual changes without having to reverse-engineer your work.

## Quality bar

Do not try to impress with complexity.

A simpler concept executed exceptionally is preferable to an elaborate concept executed generically.

The client already has access to frontier coding agents.

Outperform commodity AI web design through:

**judgment → concept → composition → typography → interaction → execution → verification**

Build the site now.