# Design

<!-- impeccable:design-schema 1 -->

## World

Warm editorial, neutral-first: paper/cream/ink carry the page, and marmalade orange (`--marmalade`) is a restrained accent — links, small badges, the check-icon circles, a single accent button, thin decorative marks — never a full-bleed section background or a large filled card on the homepage. Text on any orange fill is dark ink (`--ink`), never white — white fails contrast at the sizes used here. No pictorial logo or icon mark anywhere in the UI — identity is carried by the `Wordmark` component, a single-line serif lockup ("Tabby" in ink, "Studios" in clay), not a multi-part logotype. `app/icon.svg` is the browser-tab favicon only, not a brand mark used elsewhere.

**Open inconsistency to resolve on request, not silently:** the homepage (`app/page.js`/`page.module.css`) was pulled back to this restrained treatment after the user rejected a bolder, full-bleed-orange pass. The pricing and FAQ pages' CTA bands and the pricing page's recommended-tier card still carry that earlier bolder orange fill (`app/pricing/pricing.module.css`, `app/faq/faq.module.css`) — that wasn't in scope for the pullback and hasn't been touched. If asked to make the rest of the site consistent, match it to the homepage's restrained treatment (ink CTA bands, ink-filled recommended tier with orange price/badge accents), not the other way around.

## Typography

- Headings: Fraunces (serif, weights 400–700), tight tracking on large sizes.
- Body/UI: Work Sans (sans, weights 400–800).
- No eyebrow/kicker labels above headings anywhere — this is a hard rule, not a default; headings carry their own weight. If a category label is genuinely needed, fold it into the heading or body copy instead.

## Color tokens (`app/globals.css`)

`--ink` (#201c17, primary text/dark surfaces), `--ink-soft`, `--text-soft` (muted body), `--marmalade` (#dc7f31, the accent orange — links, small fills, badges), `--marmalade-deep` (darker orange for hover states), `--clay` (#9c4f22, deep orange-brown for link/price text on light backgrounds), `--marmalade-soft` (pale tint for check-icon circles), `--cream` (muted section background), `--paper` (base background), `--rule`/`--rule-strong` (hairline borders), `--shadow` (tinted, low-opacity — never pure black).

## Components

- **Homepage hero block row**: a reference-inspired pattern (nextec.sk) borrowed deliberately — four clickable, sharp-cornered (`border-radius: 0`), 2px-ink-bordered blocks in a row below the hero headline, each linking into a section of the site. Colored as a tonal ramp through Tabby's own palette only (paper → marmalade-soft → marmalade → ink), never nextec's actual hues (brick-red/teal/blue). This is the one place hard/sharp corners and 2px borders are deliberate; don't spread that language to the rest of the site without being asked. The homepage's `primaryButton`/`primaryButtonDark` and the services-list row dividers also went sharp/2px to tie back to this motif — the rest of the site (pricing/FAQ/contact, tier cards, form fields) keeps its softer `--radius-btn`/`--radius-md` rounding.
- **Buttons**: `--radius-btn` (6px) is the general system default, never pill-shaped. Background-color shift on hover, `scale(0.98)` on `:active` — no lift/shadow theatrics. The homepage's two primary CTA buttons are the sharp-cornered exception noted above.
- **Small tags/badges** (recommended-tier badge): pill-shaped is fine here — this is the one place `border-radius: 999px` is earned.
- **Never same-size cards**: repeated content avoids the grid-of-equal-boxes pattern. Services render as a hairline-divided list with an index number, not a card grid. Process/"getting started" steps render as a connected timeline, also with an index number (earned back since the sequence is real information).
- **Pricing tiers**: the one legitimate 3-up card grid on the homepage (a real comparison, not a lazy content container). Recommended tier is an ink-filled surface with an orange price and orange badge — color as a small pop, not a full fill.
- **FAQ accordion**: no card box around each item — hairline `border-bottom` only, plain `+`/`−` marker.
- **Sections**: left-aligned heading blocks with a constrained max-width, not centered/symmetrical by default.

## What not to reintroduce

No kicker/eyebrow text labels, no pill-shaped primary buttons or large containers, no flat linear-gradient section backgrounds (a low-opacity radial ambient glow behind the homepage hero is the one permitted exception), no pure-black untinted box-shadows, no white text set on an orange fill (contrast fails — use ink), no logo/icon imagery in the header, footer, hero, or anywhere else in the page UI, and no full-bleed orange section backgrounds on the homepage without being asked again.
