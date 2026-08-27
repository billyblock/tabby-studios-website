# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Small business owners in and around Marquette, Michigan and the Upper Peninsula who need a website but don't have the time or expertise to build one themselves. They are non-technical, price-sensitive, and wary of agencies that hide costs behind "request a quote" forms or hand them off to account managers.

## Product Purpose

Tabby Studios designs and builds websites for small businesses: mobile-first, fast, SEO-ready sites at fixed, published prices. Success is a visitor who can see exactly what they'll pay and what they'll get before ever talking to anyone, then get a site live within a guaranteed timeline (10 business days for Tier 1).

## Positioning

Named, fixed pricing for Tier 1 ($699) and Tier 2 ($1,200–$2,500) — competitors quote ranges or require a sales call before revealing any number. One person designs, builds, and supports every site directly; there is no account manager, no outsourcing, and no handoff between "sales" and "the person who actually builds it."

## Operating Context

- Three-tier structure: Tier 1 (static, $699, up to 5 pages, no logins/database), Tier 2 (business, $1,200–$2,500, 6–15 pages, custom layouts), Tier 3 (custom web application, quoted individually, starts at $2,000 — logins, bookings, dashboards, payments).
- Tier 1 and Tier 2 can be purchased without a call; Tier 3 always starts with a discovery call since scope must be defined before it can be priced.
- **Self-serve start flow (`/start`)**: the site's primary CTA ("Get Started") for Tier 1/Tier 2. A structured intake — pick the tier, then fixed fields (contact info, domain, must-have pages, brand-asset readiness, copy readiness) — replaces open-ended "tell us about your project" copy for these two tiers, so a client commits and moves straight into the build queue instead of waiting on a reviewed quote. This is the concrete expression of the signature-offer/systemized-process positioning: one repeatable intake, not a case-by-case conversation. `/contact` remains for Tier 3 (always starts with a discovery call), general questions, and Care Plan/add-on inquiries; it links to `/start` for anyone who already knows they want Tier 1 or 2. Both flows post to the same formsubmit.co endpoint (see below) — `/start` is a distinct intake, not a different backend.
- Every build includes a first month of a Care Plan (hosting, backups, SSL, security updates, uptime monitoring, limited content-edit time), which then continues at $30/mo (Tier 1) or $50/mo (Tier 2). Tier 3 sites carry a separate software support retainer instead.
- A full menu of named, fixed-price add-ons exists (extra pages, blog, CMS setup, booking widgets, SEO retainers, logo work) for buyers who want to build up from a base tier.
- Both the `/contact` and `/start` forms post to formsubmit.co and redirect to a confirmation page; there is no backend/CMS and no payment processing — "starting" means submitting the intake, not paying on the site.
- Built with Next.js (App Router), vanilla CSS Modules — no CSS framework, no component library.

## Capabilities and Constraints

- Solo operator — copy and design must not imply a team, account managers, or outsourcing.
- Pricing figures above are current and accurate; preserve them exactly during the redesign unless the user changes them.
- No image-based logo or icon mark: the brand is expressed as typography only (the existing "Tabby / Studios" wordmark treatment). This is an explicit, binding constraint for this redesign — replace any remaining logo/icon imagery (including favicon-adjacent assets) with typographic treatment.
- Contact email: tabbystudiosmqt@gmail.com.

## Brand Commitments

- Name: Tabby Studios (cat-themed name; no cat iconography currently used or requested).
- Typographic wordmark only, no pictorial logo or icon mark, anywhere on the site.
- Existing voice: plain, honest, specific — no filler like "elevate" or "seamless"; pricing stated as real numbers, not vague ranges, wherever a fixed price exists.

## Evidence on Hand

None. No client sites, testimonials, or case studies exist yet. The redesign must not fabricate testimonials, client logos, or reviews — ship without a social-proof section rather than inventing one.

## Product Principles

- Price transparency is the product's core differentiator — never obscure a real number behind a "contact us" wall when a fixed price exists.
- One person, directly reachable — copy and structure should never imply a team or a sales layer.
- Mobile-first and fast — the audience is small business owners checking sites on their phones, not designers on large monitors.
- No logos, ever — identity is carried by typography, voice, and layout, not a mark.
- Honest content only — no invented proof, no padded claims, no round-number fakery.

## Accessibility & Inclusion

No specific standard was mandated by the user; build to WCAG AA as a baseline default (visible focus states, sufficient contrast, semantic HTML, keyboard-operable nav and forms).
