# Tabby Studios

Website for Tabby Studios, a web design studio based in Marquette, Michigan, focused on mobile-friendly, SEO-ready websites for local businesses.

Built with Next.js (App Router), React, and plain custom CSS (CSS Modules) — no UI framework, no backend/database. Structured to match the sibling `alder-storage-website`, `java-bay-cafe-website`, and `girlypop-website` projects.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project structure

- `app/page.js` — homepage (hero, about, services, process, pricing teaser, CTA)
- `app/pricing/page.js` — full pricing page (tiers, add-ons, care plan)
- `app/faq/page.js` — FAQ page
- `app/contact/page.js` — quote request form, posts to formsubmit.co and redirects to `app/contact/thank-you/page.js`
- `app/layout.js` — root layout, fonts, wraps every page with the header/footer
- `app/components/` — `Header`, `MobileNav`, `Footer`, and `Wordmark` (the typographic "Tabby / Studios" brand mark used everywhere in place of a logo image)
- `app/globals.css` — brand colors and global styles (ink/marmalade/clay/cream palette lives here as CSS variables)
- `app/page.module.css` / `app/pricing/pricing.module.css` / `app/faq/faq.module.css` / `app/contact/contact.module.css` — page-specific styles

## Brand

The site has no pictorial logo or icon mark — identity is carried entirely by the `Wordmark` component's typography, voice, and layout. `public/logo.png` is a leftover cat-mark asset from an earlier direction and is not referenced anywhere in the codebase; keep it out of any header, footer, hero, or favicon usage. `app/icon.svg` is the browser-tab favicon only, a minimal monogram at a scale too small for the wordmark to read — it is not brand usage elsewhere on the site.

Full product context (audience, positioning, pricing, brand commitments) lives in `PRODUCT.md` at the project root.

## Business info

**Contact.** `tabbystudiosmqt@gmail.com` is the live business email, used in the footer and as the fallback link on `/contact`. "Get a Quote" buttons across the site link to `/contact`, a quote-request form that posts to formsubmit.co and redirects to a thank-you page.

## To customize

- Update the tier/add-on pricing in the `tiers` and `addOns` arrays in `app/pricing/page.js`
- Update the homepage pricing teaser in the `tiers` array in `app/page.js`
- Swap in the real contact email/phone (see above)
- Swap colors in the `:root` block of `app/globals.css`
