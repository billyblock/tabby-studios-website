import styles from "./pricing.module.css";

export const metadata = {
  title: "Pricing | Tabby Studios",
  description:
    "Scoped, transparent pricing for websites built in Marquette, Michigan. Static sites from $499, business sites from $999, and custom quotes for dynamic web applications.",
};

const tiers = [
  {
    name: "Tier 1 — Static Website",
    price: "Starting at $499",
    blurb:
      "For businesses that just need a solid, credible online presence — no logins, no database, nothing dynamic.",
    features: [
      "Up to 5 pages",
      "Mobile responsive",
      "Contact form",
      "Google Maps integration",
      "Basic SEO setup",
      "Fast-loading, optimized images",
      "Photo gallery",
      "Social media links",
    ],
  },
  {
    name: "Tier 2 — Business Website",
    price: "Starting at $999",
    blurb:
      "Everything in Tier 1, built out for businesses that need more room to tell their story and more content to organize.",
    features: [
      "6–15 pages",
      "Custom page layouts",
      "Multiple forms",
      "Enhanced animations/interactions",
      "Service area pages",
      "Testimonials & FAQ sections",
      "Everything in Tier 1",
      "Expanded SEO",
    ],
    featured: true,
  },
  {
    name: "Tier 3 — Custom Web Application",
    price: "Starting at $2,000 · Custom Quote",
    blurb:
      "This is where a database enters the picture. Every dynamic feature adds real development, testing, and maintenance time, so these projects are scoped individually.",
    features: [
      "Login & customer portals",
      "Content management systems",
      "Admin dashboards",
      "Scheduling & memberships",
      "Inventory & order management",
      "Payment processing",
      "API integrations",
      "Custom functionality — quote required",
    ],
  },
];

const addOns = [
  { name: "Extra page", price: "$100/page" },
  { name: "Blog / CMS", price: "$300–600" },
  { name: "Online booking", price: "$300–800" },
  { name: "Contact forms (basic)", price: "Included" },
  { name: "Photo gallery (basic)", price: "Included" },
  { name: "Google Business Profile setup", price: "$100–200" },
  { name: "Professional email setup", price: "$75–150" },
  { name: "Copywriting", price: "$100–400" },
  { name: "Logo refresh", price: "$100–300" },
  { name: "E-commerce", price: "Starting at $1,500" },
];

const carePlanIncludes = [
  "Hosting",
  "SSL certificate",
  "Automatic backups",
  "Security updates",
  "Uptime monitoring",
  "Up to 15 minutes/month of content updates",
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
            Prices below are starting points, not fixed rates — every quote is scoped to your
            business and traceable to a specific list of what&apos;s included. A simple landing
            page costs less. A loaded-up site costs more. Nothing is ever a mystery.
          </p>
        </div>
      </section>

      <section className={styles.tiers}>
        <div className={`wrapper ${styles.tierGrid}`}>
          {tiers.map((tier) => (
            <article
              className={`${styles.tierCard} ${tier.featured ? styles.tierCardFeatured : ""}`}
              key={tier.name}
            >
              <h2>{tier.name}</h2>
              <div className={styles.tierPrice}>{tier.price}</div>
              <p className={styles.tierBlurb}>{tier.blurb}</p>
              <ul className={styles.featureList}>
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <span className={styles.check}>&#10003;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.addOns} ${styles.muted}`}>
        <div className="wrapper">
          <div className={`${styles.sectionHeading} ${styles.centered}`}>
            <span className="kicker">Add-Ons</span>
            <h2>Build up from a base tier — à la carte.</h2>
            <p className={styles.sectionIntro}>
              Rather than a wall of overlapping packages, add exactly what your site needs on
              top of a base tier.
            </p>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Add-On</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((item) => (
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

      <section className={styles.carePlan}>
        <div className={`wrapper ${styles.carePlanInner}`}>
          <div className={styles.carePlanCopy}>
            <span className="kicker">Website Care Plan</span>
            <h2>$30/month for peace of mind.</h2>
            <p>
              You focus on running the business &mdash; we&apos;ll make sure the website keeps
              working and stays current. Hours changing for a holiday, a new price, a new photo,
              a seasonal notice: you shouldn&apos;t have to learn a CMS just to change a phone
              number. We do it for you.
            </p>
          </div>
          <div className={styles.carePlanList}>
            <span className="kicker">What&apos;s Included</span>
            <ul className={styles.featureList}>
              {carePlanIncludes.map((item) => (
                <li key={item}>
                  <span className={styles.check}>&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`wrapper ${styles.ctaInner}`}>
          <div>
            <span className={`kicker ${styles.kickerLight}`}>Not sure what you need?</span>
            <h2>Every quote starts with a conversation.</h2>
          </div>
          <a className={styles.primaryButtonLight} href="mailto:hello@tabbystudios.com">
            Get a Quote
          </a>
        </div>
      </section>
    </main>
  );
}
