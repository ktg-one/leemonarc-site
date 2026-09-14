# Lee Monarch Website

## Mission

Build and maintain the public website for Lee Monarch Accounting & Advisory.

This is a premium professional-services website for a solo accountant / commercial finance adviser in Perth, Western Australia.

Lee Monarch positions herself closer to an embedded e-CFO / strategic finance partner than a transactional bookkeeping practice.

The target audience is established and higher-value businesses that value:
- commercial judgment
- financial clarity
- direct access to a senior adviser
- proactive advice
- trust and discretion

The site must feel credible to sophisticated business owners without becoming corporate, fintech-like, or visually conservative to the point of anonymity.

## Priority

When goals compete, optimize in this order:

1. Trust and clarity
2. Brand coherence
3. Composition and typography
4. Interaction quality
5. Performance and accessibility
6. Novelty

Technical complexity is never a goal by itself.

---

# Brand Authority

The supplied Lee Monarch logo and wordmark are the fixed visual authority.

There is no broader approved brand system yet.

Derive the supporting visual system from the logo rather than redesigning the identity.

Infer:
- palette
- typography pairings
- spacing character
- visual rhythm
- imagery direction
- component character
- motion language

Preserve the logo itself exactly unless explicitly asked to modify it.

The desired brand qualities are:

**composed · intelligent · trusted · established · editorial · contemporary · premium without luxury theatre · human rather than corporate**

A useful shorthand:

> **Restrained brand. Modern interaction.**

If a proposed design element fights the logo, the logo wins.

---

# Creative Reference

Primary interaction and composition reference:

https://www.paraform.com/

Study the reference for principles rather than copying its identity.

Relevant qualities:
- simple information architecture
- confident whitespace
- strong typography
- minimal component clutter
- polished automatic and scroll-linked motion
- sections with their own interaction idea
- high production quality despite simple structure
- design that remains strong when motion is removed

Do not reproduce Paraform's branding, layouts, assets, copy, or visual identity literally.

---

# Design Standard

The client has access to frontier coding agents and specifically an avid user of codex and GPT-6. So how do we add value and build something better? and avoid "oh my codex could've just built that - what am I paying this guy for?". 

Commodity implementation has no value.

The site's differentiation should come from:
- concept
- editorial judgment
- composition
- typography
- narrative pacing
- interaction design
- bespoke details
- visual coherence
- production execution

The goal is not to make the code unusually complicated.

The goal is to make the **decisions unusually good**.

Avoid falling back to generic professional-services, accounting, SaaS, or AI-site conventions.

Prefer strong composition over collections of cards.

Static screenshots of every page must already look excellent before animation is considered.

---

# Interaction and Motion

Motion is part of the design system, not decoration.

Each major page may have **one primary signature interaction or motion idea**.

Supporting motion should be quieter and subordinate to that idea.

Suitable behaviours include:
- typographic reveals
- image choreography
- subtle parallax
- pinned narrative sequences
- controlled horizontal movement
- sectional transitions
- restrained counters or quantitative transitions
- background or rule progression where it reinforces structure

Prefer motion that communicates progression, hierarchy, relationships, or change.

Maintain a complete reduced-motion experience.

Avoid making every element animate merely because the tooling allows it.

## Motion technology

Choose the smallest tool that cleanly achieves the result.

Preferred hierarchy:

1. CSS / browser-native animation for simple behaviour
2. Motion for component-level interaction
3. ScrollCraft for substantial scroll choreography when it simplifies the implementation
4. GSAP / ScrollTrigger where genuinely required
5. Three.js / WebGL only when a concept specifically earns it

Do not introduce WebGL merely as evidence of technical sophistication.

A conventional DOM implementation with exceptional composition is preferable to unnecessary canvas complexity.

---

# Technical Direction

Default target:

- Next.js
- React
- TypeScript

Inspect the existing project before choosing versions, packages, styling systems, or project structure.

Use the existing styling system if one is already established.

If starting from an empty project, choose a straightforward maintainable styling approach suitable for a bespoke editorial website.

Do not introduce multiple competing styling systems.

The project must remain straightforward for Codex, Claude Code, Gemini CLI, and a human developer to modify.

Favor:
- semantic HTML
- readable React components
- clear naming
- shared design tokens
- centralized content where practical
- explicit motion configuration
- simple component boundaries
- conventional project structure

Avoid:
- unnecessary meta-frameworks
- opaque abstraction layers
- visual-builder generated code
- giant configurable components
- premature design-system engineering
- scattered magic styling values
- clever code that makes visual editing harder

Build reusable primitives where repetition exists, not in anticipation of hypothetical reuse.

---

# Editability

The creative director will continue modifying the site with coding agents.

Optimize for **agent legibility**.

A future agent should be able to locate and change:
- typography
- colors
- spacing
- content
- navigation
- imagery
- section composition
- animation intensity
- page-specific signature interactions

without reverse-engineering the entire application.

Keep high-level design tokens and motion parameters discoverable.

Do not couple unrelated page sections through fragile animation logic.

A visual change to one section should not unexpectedly break another.

---

# Design Authority

You are the primary design authority for this project.

Make visual, interaction, layout, typography, motion, and art-direction decisions autonomously.

Do not ask the user to approve:
- design concepts
- typography
- palette extensions
- layout direction
- motion choices
- imagery direction
- page composition
- component styling
- aesthetic tradeoffs

Use your strongest design judgment and commit to the best direction.

Only stop for human input when:
- required factual business information is missing
- legal/compliance wording is uncertain
- credentials, testimonials, claims, pricing, or services cannot be verified
- access/credentials are required
- a destructive or irreversible technical action is needed

When multiple good design options exist, choose one rather than presenting a menu.

---

# Content

Use the exact business name and spelling present in the supplied approved assets.

Do not invent factual claims, credentials, client numbers, awards, financial outcomes, testimonials, memberships, or regulatory statements.

When final copy has not been supplied:
- write credible provisional copy
- keep it concise
- make it easy to replace
- clearly avoid presenting invented facts as established truth

Positioning may emphasize:
- accounting
- advisory
- commercial finance
- strategic financial guidance
- e-CFO style support

but factual service claims must remain grounded in supplied information.

---

# Imagery

Use supplied assets first.

Generated imagery may be used where it strengthens the art direction.

Generated assets should support the established logo-derived brand rather than create a competing visual identity.

Prefer:
- editorial restraint
- architecture
- material/detail
- business environments
- abstract financial or structural concepts when appropriate

Avoid generic stock-office imagery and literal finance clichés unless intentionally selected.

Figma is not a required intermediate artifact.

The browser implementation may serve as the primary design surface.

---

# Site Architecture

Determine the smallest information architecture that communicates the business clearly.

Likely surfaces include:

- Home
- Services
- Advisory / e-CFO
- About
- Contact

These are not mandatory.

Add or remove pages according to the actual content and narrative.

Do not create pages solely because professional-services templates usually contain them.

---

# Project Documentation

Keep implementation truth in the repository.

## Before visual or layout work
Read `docs/BRIEF.md` if it exists.

## Before changing established visual language
Read `docs/DESIGN.md` if it exists.

## Before changing animation or scroll behaviour
Read `docs/MOTION.md` if it exists.

## Before major restructuring or handoff
Read `docs/HANDOFF.md` if it exists.

These documents should describe decisions that are expensive to rediscover.

Do not duplicate easily discoverable package configuration or source-code facts into documentation.

Update design documentation when an established decision genuinely changes.

---

# Code Navigation

This repo is indexed with CodeGraph (`.codegraph/`). The CLI is on PATH — use it instead of broad file sweeps:

- `codegraph explore <topic>` — relevant symbols' source plus call paths
- `codegraph context <task>` — task-scoped symbols and relationships
- `codegraph impact <symbol>` — blast radius before editing shared code (e.g. `tokens.css`, `motion.ts`)
- `codegraph query <name>` — locate a symbol
- `codegraph sync` — refresh the index after structural edits

No MCP server or extra configuration is required.

---

# Working Method

Before editing:

1. Inspect the relevant existing files.
2. Inspect the current rendered implementation when possible.
3. Identify the design or implementation pattern already in use.
4. Preserve working decisions unless the task explicitly changes them.

For non-trivial work, state a short implementation plan and then execute.

Make reasonable reversible design decisions autonomously.

Do not stop for approval on routine or easily reversible choices.

Surface uncertainty when:
- factual business information is missing
- requirements materially conflict
- an irreversible architectural choice is required
- a design change would replace an already-approved direction

---

# Visual Verification

A successful compile is not evidence of successful design.

For meaningful visual changes:

1. Run the site.
2. Inspect the actual result in-browser.
3. Check desktop and mobile together.
4. Inspect animation through its full state, not only its starting frame.
5. Fix visible defects in one bounded pass.
6. Confirm the corrected result.

At minimum verify representative widths around:

- 360px
- 768px
- 1440px

Check:
- hierarchy
- line lengths
- spacing rhythm
- image crops
- overflow
- navigation
- focus states
- motion timing
- reduced motion
- layout stability
- console errors

Avoid endless polishing loops.

---

# Production Floor

Before treating a page as finished:

- production build succeeds
- TypeScript succeeds
- no relevant console errors
- responsive layouts hold
- keyboard interaction works
- text contrast is appropriate
- reduced-motion behaviour works
- animations do not create obvious layout shift or scroll breakage
- no lorem ipsum remains
- no invented business claims remain
- supplied logo assets render correctly
- content remains straightforward to edit

The result should feel deliberately designed rather than generated from a category template.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
