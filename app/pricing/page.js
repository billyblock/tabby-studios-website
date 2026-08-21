import Link from "next/link";
import Modal from "./Modal";
import styles from "./pricing.module.css";

export const metadata = {
  title: "Pricing | Tabby Studios",
  description:
    "Fixed, transparent pricing for websites built in Marquette, Michigan. Static sites at $699, business sites from $1,200–$2,500, and custom quotes for dynamic web applications.",
};

const priceStrip = [
  { label: "Static Website", value: "$699", href: "#tier1" },
  { label: "Business Website", value: "$1,200–$2,500", href: "#tier2" },
  { label: "Custom Web App", value: "Get a quote", href: "#tier3" },
  { label: "Care Plan", value: "from $30/mo", href: "#care-plans" },
];

const tiers = [
  {
    id: "tier1",
    name: "Tier 1 — Static Website",
    price: "$699",
    blurb: "A solid, credible online presence — no logins, no database, nothing dynamic.",
    highlights: ["Up to 5 pages", "Contact form & Google Maps", "Basic SEO built in", "Live in 10 business days"],
    note: "Payment plan available: $199 down + $49/mo × 12",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form",
      "Google Maps integration",
      "Basic SEO setup",
      "Fast-loading, optimized images",
      "Photo gallery",
      "Social media links",
      "Care Plan — 1st month included, then $30/mo",
      "Guaranteed 10 business day turnaround",
    ],
    cta: { label: "Get Started — $699", href: "/contact?package=tier1" },
  },
  {
    id: "tier2",
    name: "Tier 2 — Business Website",
    price: "$1,200–$2,500",
    blurb: "More pages, more polish — for businesses with a bigger story to tell.",
    highlights: ["6–15 pages, custom layouts", "Multiple forms & service pages", "Expanded SEO", "Everything in Tier 1"],
    features: [
      "6–15 pages",
      "Custom page layouts",
      "Multiple forms",
      "Enhanced animations/interactions",
      "Service area pages",
      "Testimonials & FAQ sections",
      "Expanded SEO (schema, keyword targeting, internal linking)",
      "Everything in Tier 1",
      "Care Plan — 1st month included, then $50/mo",
    ],
    featured: true,
    cta: { label: "Get Started", href: "/contact?package=tier2" },
  },
  {
    id: "tier3",
    name: "Tier 3 — Custom Web Application",
    price: "Starting at $2,000",
    blurb: "Logins, bookings, dashboards, payments — scoped and quoted for what you actually need.",
    highlights: ["Logins & customer portals", "Bookings tied to inventory", "Dashboards & payment processing", "Quoted to fit your project"],
    features: [
      "Login & customer portals",
      "Content management systems",
      "Admin dashboards",
      "Scheduling tied to inventory",
      "Memberships & order management",
      "Payment processing",
      "API integrations",
      "Custom functionality — quote required",
    ],
    cta: { label: "Book a Discovery Call", href: "/contact?package=tier3", outline: true },
  },
];

const basePlans = [
  {
    name: "Tier 1 Care Plan",
    price: "$30/mo",
    features: ["Hosting, backups & SSL", "Security updates", "Uptime monitoring", "Up to 15 min/mo content edits"],
  },
  {
    name: "Tier 2 Care Plan",
    price: "$50/mo",
    features: ["Hosting, backups & SSL", "Security updates", "Uptime monitoring", "Up to 30 min/mo content edits"],
  },
];

const supportPlans = [
  { name: "Tier 3 Software Support Retainer", detail: "Monitoring, minor fixes, patches — up to 2 hrs/mo", price: "$100/mo" },
  { name: "Tier 3 Priority Support", detail: "Up to 5 hrs/mo, faster response", price: "$200/mo" },
  { name: "Support overage", detail: "Past included hours", price: "$75/hr" },
];

const oneTimeAddOns = [
  { name: "Extra page", price: "$100/page" },
  { name: "Basic blog (up to 5 starter posts, standard layout)", price: "$350" },
  { name: "Full CMS setup (client can add their own pages/posts)", price: "$600" },
  { name: "Embedded booking widget (Calendly/Acuity-style embed)", price: "$350" },
  { name: "Custom-styled booking flow (matches site design)", price: "$700" },
  { name: "Expanded SEO upgrade (bring Tier 1 up to Tier 2 SEO)", price: "$200" },
  { name: "Logo refresh (touch up existing logo)", price: "$150" },
  { name: "New logo design", price: "$300" },
  { name: "Google Business Profile setup", price: "$150" },
  { name: "Rush delivery (faster than standard turnaround)", price: "+25% of project total" },
  { name: "Basic online store (up to 10 products, standard checkout)", price: "$1,800" },
];

const recurringAddOns = [
  { name: "Starter SEO retainer (2 posts/mo, basic monthly report)", price: "$250/mo" },
  { name: "Growth SEO retainer (4 posts/mo, backlink outreach, full report)", price: "$450/mo" },
  { name: "Expanded content updates (weekly edits vs. plan default)", price: "$75/mo" },
];

const buySteps = [
  {
    step: "Pick a tier",
    body: "Tier 1 and Tier 2 are fixed price — no call required. Add any à la carte extras you want, then reach out and we'll get the intake started.",
    cta: { label: "See Tier 1 & 2", href: "#tier1" },
  },
  {
    step: "Send over the basics",
    body: "A short form gets us your business name, brand colors, photos, copy, and must-have pages — that's all it takes to kick off the build.",
    cta: { label: "Get a Quote", href: "/contact" },
  },
  {
    step: "Something custom?",
    body: "Tier 3 work always starts with a quick call so we can scope it properly before pricing it.",
    cta: { label: "Book a Call", href: "/contact?package=tier3" },
  },
];

export default function Pricing() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`wrapper ${styles.heroInner}`}>
          <span className="kicker">Pricing</span>
          <h1 className={styles.heroTitle}>
            Every business is different. Your website should be priced that way too.
          </h1>
          <p className={styles.heroSubtitle}>
            But you should never have to guess what something costs. Tier 1 and Tier 2 are fixed,
            named prices — pick a package and get started, no call required. Anything genuinely
            custom gets a quote instead of a guess.
          </p>

          <div className={styles.priceStrip}>
            {priceStrip.map((item) => (
              <a className={styles.priceStripItem} href={item.href} key={item.label}>
                <span className={styles.priceStripLabel}>{item.label}</span>
                <span className={styles.priceStripValue}>{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.tiers}>
        <div className="wrapper">
          <div className={`${styles.sectionHeading} ${styles.centered}`}>
            <span className="kicker">The Three Tiers</span>
            <h2>Pick the tier that fits your business.</h2>
          </div>

          <div className={styles.tierGrid}>
            {tiers.map((tier) => (
              <article
                className={`${styles.tierCard} ${tier.featured ? styles.tierCardFeatured : ""}`}
                key={tier.name}
                id={tier.id}
              >
                <h3>{tier.name}</h3>
                <div className={styles.tierPrice}>{tier.price}</div>
                <p className={styles.tierBlurb}>{tier.blurb}</p>
                <ul className={styles.featureList}>
                  {tier.highlights.map((feature) => (
                    <li key={feature}>
                      <span className={styles.check}>&#10003;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  className={`${styles.tierCta} ${tier.cta.outline ? styles.tierCtaOutline : ""}`}
                  href={tier.cta.href}
                >
                  {tier.cta.label}
                </Link>

                <Modal
                  triggerLabel="See full details"
                  triggerClassName={styles.tierDetailsLink}
                  title={tier.name}
                >
                  <p className={styles.modalPrice}>{tier.price}</p>
                  {tier.note ? <p className={styles.tierNote}>{tier.note}</p> : null}
                  <p className={styles.modalBlurb}>{tier.blurb}</p>
                  <ul className={styles.featureList}>
                    {tier.features.map((feature) => (
                      <li key={feature}>
                        <span className={styles.check}>&#10003;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Modal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="care-plans" className={`${styles.carePlan} ${styles.muted}`}>
        <div className="wrapper">
          <div className={`${styles.sectionHeading} ${styles.centered}`}>
            <span className="kicker">Care Plans</span>
            <h2>Peace of mind, not just hosting.</h2>
            <p className={styles.sectionIntro}>
              You focus on running the business — we&apos;ll make sure the website keeps working
              and stays current. Every Tier 1 or Tier 2 site includes a free first month, then it
              continues at <strong>$30/mo</strong> (Tier 1) or <strong>$50/mo</strong> (Tier 2) —
              hosting, backups, security updates, monitoring, and a bit of content-edit time every
              month.
            </p>

            <Modal
              triggerLabel="See everything covered, including Tier 3 support →"
              triggerClassName={styles.tierDetailsLink}
              title="Care & Support Plans"
            >
              <div className={styles.carePlanGrid}>
                {basePlans.map((plan) => (
                  <div className={styles.carePlanCard} key={plan.name}>
                    <h3>{plan.name}</h3>
                    <div className={styles.carePlanCardPrice}>{plan.price}</div>
                    <ul className={styles.featureList}>
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <span className={styles.check}>&#10003;</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className={styles.supportNote}>
                <h4>Already have a Tier 3 build?</h4>
                <p>
                  A broken booking system or ordering flow is an operational emergency, not a
                  content edit — so it&apos;s a separate support retainer, priced and supported
                  like one.
                </p>
                <div className={styles.supportList}>
                  {supportPlans.map((plan) => (
                    <div className={styles.supportRow} key={plan.name}>
                      <div>
                        <div className={styles.tableCellTitle}>{plan.name}</div>
                        <div className={styles.tableCellDetail}>{plan.detail}</div>
                      </div>
                      <div className={styles.supportPrice}>{plan.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </section>

      <section className={styles.addOns}>
        <div className="wrapper">
          <div className={`${styles.sectionHeading} ${styles.centered}`}>
            <span className="kicker">Add-Ons</span>
            <h2>Build up from a base tier — à la carte.</h2>
            <p className={styles.sectionIntro}>
              Every add-on below is a named, fixed price — no ranges. Need something bigger, like
              a larger store or booking logic tied to inventory? That&apos;s Tier 3 territory —
              let&apos;s scope it together instead of forcing it into a number that doesn&apos;t
              fit.
            </p>
          </div>

          <h3 className={styles.tableTitle}>One-Time (Project) Add-Ons</h3>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Add-On</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {oneTimeAddOns.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className={`${styles.tableTitle} ${styles.tableTitleSpaced}`}>Recurring Add-Ons</h3>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Add-On</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {recurringAddOns.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={`${styles.buyProcess} ${styles.muted}`}>
        <div className="wrapper">
          <div className={`${styles.sectionHeading} ${styles.centered}`}>
            <span className="kicker">Getting Started</span>
            <h2>Three steps, no surprises.</h2>
          </div>

          <div className={styles.buyGrid}>
            {buySteps.map((item, index) => (
              <div className={styles.buyCard} key={item.step}>
                <div className={styles.processNumber}>{String(index + 1).padStart(2, "0")}</div>
                <h3>{item.step}</h3>
                <p>{item.body}</p>
                <Link className={styles.buyCardLink} href={item.cta.href}>
                  {item.cta.label} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`wrapper ${styles.ctaInner}`}>
          <div>
            <span className={`kicker ${styles.kickerLight}`}>Not sure what you need?</span>
            <h2>Tier 1 &amp; 2 don&apos;t need a call. Tier 3 starts with one.</h2>
            <p className={styles.ctaSubtext}>
              Prefer email? Reach us directly at{" "}
              <a href="mailto:tabbystudiosmqt@gmail.com">tabbystudiosmqt@gmail.com</a>
            </p>
          </div>
          <Link className={styles.primaryButtonLight} href="/contact">
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
