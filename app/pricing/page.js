import Link from "next/link";
import Modal from "./Modal";
import Reveal from "../components/Reveal";
import styles from "./pricing.module.css";

export const metadata = {
  title: "Pricing | Tabby Studios",
  description:
    "Fixed, transparent pricing for websites built in Marquette, Michigan. Standard sites at $349, Advanced sites at $599, and custom quotes for dynamic web applications.",
};

const priceStrip = [
  { label: "Standard", value: "$349", href: "#tier1" },
  { label: "Advanced", value: "$599", href: "#tier2", featured: true },
  { label: "Custom", value: "Get a quote", href: "#tier3" },
  { label: "Care Plan", value: "from $30/mo", href: "#care-plans" },
];

const tiers = [
  {
    id: "tier1",
    name: "Standard Website",
    price: "$349",
    blurb: "Get your business online with a clean, professional site that just works.",
    highlights: ["Up to 4 pages", "1 contact form", "1 round of revisions", "Live in 10 business days"],
    features: [
      "Up to 4 pages",
      "Professional custom design",
      "Mobile responsive",
      "1 contact form",
      "Google Maps integration",
      "Basic SEO setup",
      "Basic analytics",
      "FAQ section",
      "Fast-loading, optimized images",
      "Photo gallery",
      "Social media links",
      "1 round of revisions",
      "Care Plan (1st month included, then $30/mo)",
      "Guaranteed 10 business day turnaround",
    ],
    cta: { label: "Get Started ($349)", href: "/start?package=tier1" },
  },
  {
    id: "tier2",
    name: "Advanced Website",
    price: "$599",
    blurb: "Let your website work for your business, with the tools to handle bookings, orders, and integrations.",
    highlights: [
      "Up to 10 pages, custom layouts",
      "Multiple contact forms",
      "Booking/ordering & integrations",
      "Everything in Standard",
    ],
    features: [
      "Up to 10 pages",
      "Custom page layouts",
      "Multiple contact forms",
      "Enhanced animations/interactions",
      "Service area pages",
      "Testimonials & FAQ sections",
      "Advanced analytics & reporting",
      "Booking/ordering integration",
      "Advanced third-party integrations",
      "Expanded SEO (schema, keyword targeting, internal linking)",
      "3 rounds of revisions",
      "Everything in Standard",
      "Care Plan (1st month included, then $50/mo)",
    ],
    featured: true,
    cta: { label: "Get Started ($599)", href: "/start?package=tier2" },
  },
  {
    id: "tier3",
    name: "Custom Web Application",
    price: "Starting at $2,000",
    blurb: "Build something unique: logins, dashboards, payments, and e-commerce, scoped and quoted for what you actually need.",
    highlights: [
      "Logins & customer portals",
      "E-commerce & custom systems",
      "Dashboards & payment processing",
      "Quoted to fit your project",
    ],
    features: [
      "Login & customer portals",
      "Content management systems",
      "Admin dashboards",
      "E-commerce & custom systems",
      "Scheduling tied to inventory",
      "Memberships & order management",
      "Payment processing",
      "API integrations",
      "Custom functionality (quote required)",
    ],
    cta: { label: "Book a Discovery Call", href: "/contact?package=tier3" },
  },
];

const comparisonRows = [
  { feature: "One-time", standard: "$349", advanced: "$599", custom: "Custom quote" },
  { feature: "Care Plan", standard: "$30/mo", advanced: "$50/mo", custom: "Custom" },
  { feature: "Pages", standard: "Up to 4", advanced: "Up to 10", custom: "Custom" },
  { feature: "Professional design", standard: true, advanced: true, custom: true },
  { feature: "Mobile responsive", standard: true, advanced: true, custom: true },
  { feature: "Basic SEO", standard: true, advanced: true, custom: true },
  { feature: "Contact forms", standard: "1", advanced: "Multiple", custom: "Custom" },
  { feature: "Revisions", standard: "1 round", advanced: "3 rounds", custom: "Custom" },
  { feature: "FAQ section", standard: true, advanced: true, custom: true },
  { feature: "Analytics", standard: "Basic", advanced: "Advanced", custom: "Custom" },
  { feature: "Booking/ordering", standard: false, advanced: true, custom: true },
  { feature: "Advanced integrations", standard: false, advanced: true, custom: true },
  { feature: "E-commerce/custom systems", standard: false, advanced: false, custom: true },
];

const basePlans = [
  {
    name: "Standard Care Plan",
    price: "$30/mo",
    features: ["Hosting, SSL & monthly backups", "Security updates", "Uptime monitoring", "Up to 15 min/mo content edits"],
  },
  {
    name: "Advanced Care Plan",
    price: "$50/mo",
    features: [
      "Hosting, SSL & weekly backups",
      "Priority security updates",
      "Uptime + integration monitoring",
      "Upkeep for booking/ordering & other integrations",
      "Up to 30 min/mo content edits",
    ],
  },
];

const supportPlans = [
  { name: "Custom Software Support Retainer", detail: "Monitoring, minor fixes, patches (up to 2 hrs/mo)", price: "$100/mo" },
  { name: "Custom Priority Support", detail: "Up to 5 hrs/mo, faster response", price: "$200/mo" },
  { name: "Extra support hours", detail: "After your plan's included hours are used up", price: "$75/hr" },
];

const oneTimeAddOns = [
  { name: "Extra page", price: "$100/page" },
  { name: "Basic blog (up to 5 starter posts, standard layout)", price: "$350" },
  { name: "Full CMS setup (client can add their own pages/posts)", price: "$600" },
  { name: "Embedded booking widget (Calendly/Acuity-style embed)", price: "$350" },
  { name: "Custom-styled booking flow (matches site design)", price: "$700" },
  { name: "Expanded SEO upgrade (bring Standard up to Advanced SEO)", price: "$200" },
  { name: "Logo refresh (touch up existing logo)", price: "$150" },
  { name: "Google Business Profile setup", price: "$150" },
  { name: "Rush delivery (faster than standard turnaround)", price: "+25% of project total" },
  { name: "Basic online store (up to 10 products, standard checkout)", price: "$1,800" },
];

const oneTimeAddOnsNote = "Booking and advanced integration add-ons require an Advanced or Custom site.";

const buySteps = [
  {
    step: "Pick a plan",
    body: "Standard and Advanced are fixed price, so no call is required. Add any à la carte extras you want, then reach out and we'll get the intake started.",
    cta: { label: "See Standard & Advanced", href: "#tier1" },
  },
  {
    step: "Send over the basics",
    body: "A short form gets us your business name, brand colors, photos, copy, and must-have pages. That's all it takes to kick off the build.",
    cta: { label: "Start Your Project", href: "/start" },
  },
];

const customPath = {
  title: "Need something custom instead?",
  body: "Custom work always starts with a quick call so we can scope it properly before pricing it.",
  cta: { label: "Book a Call", href: "/contact?package=tier3" },
};

function renderCompareCell(value) {
  if (value === true) return <span className={styles.compareYes}>&#10003;</span>;
  if (value === false) return <span className={styles.compareNo}>&mdash;</span>;
  return value;
}

export default function Pricing() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBlob} aria-hidden="true" />
        <div className="wrapper">
          <div className={styles.heroInner}>
            <span className={styles.heroAccent} aria-hidden="true" />
            <h1 className={styles.heroTitle}>See exactly what your website costs.</h1>
            <p className={styles.heroSubtitle}>
              You should never have to guess what something costs. Standard and Advanced are
              fixed, named prices, so you can pick a package and get started without a call.
              Anything genuinely custom gets a quote instead of a guess.
            </p>

            <div className={styles.priceStrip}>
              {priceStrip.map((item) => (
                <a
                  className={`${styles.priceStripItem} ${item.featured ? styles.priceStripItemFeatured : ""}`}
                  href={item.href}
                  key={item.label}
                >
                  <span className={styles.priceStripLabel}>{item.label}</span>
                  <span className={styles.priceStripValue}>{item.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.tiers}>
        <div className="wrapper">
          <div className={styles.sectionHeading}>
            <h2>Pick the plan that fits your business.</h2>
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

          <h3 className={`${styles.tableTitle} ${styles.tableTitleSpaced}`}>Compare plans at a glance</h3>
          <div className={styles.tableWrap}>
            <table className={`${styles.table} ${styles.compareTable}`}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Standard</th>
                  <th>Advanced</th>
                  <th>Custom</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{renderCompareCell(row.standard)}</td>
                    <td>{renderCompareCell(row.advanced)}</td>
                    <td>{renderCompareCell(row.custom)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="care-plans" className={`${styles.carePlan} ${styles.muted}`}>
        <div className="wrapper">
          <div className={styles.sectionHeading}>
            <h2>Peace of mind, not just hosting.</h2>
            <p className={styles.sectionIntro}>
              You focus on running the business; we&apos;ll make sure the website keeps working
              and stays current. Every Standard or Advanced site includes a free first month,
              then it continues at <strong>$30/mo</strong> (Standard) or <strong>$50/mo</strong>{" "}
              (Advanced). Advanced costs more because there&apos;s more to look after: weekly
              backups, priority updates, and monitoring for booking/ordering and other
              integrations, on top of the same hosting, security, and content-edit time as
              Standard.
            </p>

            <Modal
              triggerLabel="See everything covered, including Custom support →"
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
                <h4>Already have a Custom build?</h4>
                <p>
                  A broken booking system or ordering flow is an operational emergency, not a
                  content edit. It&apos;s handled as a separate support retainer, priced
                  accordingly.
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
          <div className={styles.sectionHeading}>
            <h2>Build up from a base plan, à la carte.</h2>
            <p className={styles.sectionIntro}>
              Every add-on below is a named, fixed price, no ranges. Need something bigger, like a
              larger store or booking logic tied to inventory? That&apos;s Custom territory, and
              we&apos;d rather scope it together than force it into a number that doesn&apos;t
              fit.
            </p>
          </div>

          <h3 className={styles.tableTitle}>One-Time (Project) Add-Ons</h3>
          <p className={styles.tableNote}>{oneTimeAddOnsNote}</p>
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
        </div>
      </section>

      <section className={`${styles.buyProcess} ${styles.muted}`}>
        <div className="wrapper">
          <div className={styles.sectionHeading}>
            <h2>Two steps, no surprises.</h2>
          </div>

          <Reveal className={`${styles.buyList} revealGroup`}>
            {buySteps.map((item, index) => (
              <div className={styles.buyRow} key={item.step}>
                <span className={styles.buyIndex}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.step}</h3>
                  <p>{item.body}</p>
                  <Link className={styles.buyCardLink} href={item.cta.href}>
                    {item.cta.label} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </Reveal>

          <div className={styles.customPath}>
            <h3>{customPath.title}</h3>
            <p>{customPath.body}</p>
            <Link className={styles.buyCardLink} href={customPath.cta.href}>
              {customPath.cta.label} &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`wrapper ${styles.ctaInner}`}>
          <div>
            <h2>Ready to get started?</h2>
            <p className={styles.ctaSubtext}>
              Prefer email? Reach us directly at{" "}
              <a href="mailto:tabbystudiosmqt@gmail.com">tabbystudiosmqt@gmail.com</a>
            </p>
          </div>
          <Link className={styles.primaryButtonLight} href="/start">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
