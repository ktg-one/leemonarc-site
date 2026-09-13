---
version: alpha
name: Lee Monarc — A Clearer Perspective
description: Architectural calm and editorial clarity, grounded in the supplied navy and brass identity.
colors:
  primary: "#182237"
  secondary: "#46515f"
  tertiary: "#cca85b"
  neutral: "#f8f7f3"
  muted: "#62666b"
  sand: "#e8ddc5"
typography:
  heading:
    fontFamily: Instrument Serif
    fontSize: 4rem
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  body:
    fontFamily: Manrope Variable
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.65
rounded:
  control: 2px
spacing:
  mobile-gutter: 24px
  section: 130px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.control}"
    padding: 16px
  body-text:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
  secondary-text:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.muted}"
  contact-panel:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.primary}"
---

## Overview

One direction, not another kit: clear perspective. Pale architectural photography creates space, oversized serif composition adds a human voice, and fine rules supply structure. Navy and gold come from the approved PNGs. The original marks are unmodified.

## Colors

`src/app/tokens.css` is runtime authority. Gold is linework and emphasis, not small body text on ivory. Muted body text must stay legible; use the darker gold token for accents on pale surfaces. Sand is reserved for the closing invitation.

## Typography

Instrument Serif, regular and italic, for editorial headlines; Manrope for navigation, body and labels. Fonts are self-hosted. Avoid all-caps body copy, dense card layouts, fake dashboard metrics and excessive bold type.

## Layout

Asymmetric split hero; wide horizontal service rows; a navy perspective chapter; a personal adviser introduction; sand contact invitation. Mobile is intentionally recomposed, not merely shrunken. The logo is not a substitute portrait: its framed presentation explicitly reads as brand artwork.

## Components

Real links, native disclosure elements and explicit perspective buttons. Few primitives; page composition remains readable in React. Homepage is the reference. Contact has a practical editorial layout rather than a duplicated landing-page template.

## Do's and Don'ts

Do preserve the exact supplied logo and business spelling. Do keep text and structure strong without animation. Don't imply the architectural image is the office. Don't invent results, testimonials, credentials or pricing. Don't add an animation library unless a future concept requires one.
