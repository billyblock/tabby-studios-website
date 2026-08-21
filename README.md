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
- `app/layout.js` — root layout, fonts, wraps every page with the header/footer
- `app/components/` — `Header`, `MobileNav`, and `Footer`
- `app/globals.css` — brand colors and global styles (ink/marmalade/clay/cream palette lives here as CSS variables)
- `app/page.module.css` / `app/pricing/pricing.module.css` — page-specific styles
- `public/logo.png` — the Tabby Studios cat mark, cropped from the source badge artwork

## Business info

Copy is based on the `Tabby Studios Brand Identity` and `Pricing Strategy & Website Copy` reference docs (voice, positioning statement, color palette, tier pricing, add-ons, and the Website Care Plan). Fonts are Fraunces (headings) and Work Sans (body), per the typography direction in the brand doc.

**Contact.** `tabbystudiosmqt@gmail.com` is the live business email, used in the footer and as the fallback link on `/contact`. "Get a Quote" buttons across the site link to `/contact`, a quote-request form (`app/contact/ContactForm.js`) that composes a mailto to that address on submit rather than posting to a backend.

## To customize

- Update the tier/add-on pricing in the `tiers` and `addOns` arrays in `app/pricing/page.js`
- Update the homepage pricing teaser in the `tiers` array in `app/page.js`
- Swap in the real contact email/phone (see above)
- Swap colors in the `:root` block of `app/globals.css`
