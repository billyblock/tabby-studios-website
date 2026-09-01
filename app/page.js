import Link from "next/link";
import styles from "./page.module.css";

const essentials = [
  "Mobile-friendly, every time",
  "Built for SEO from day one",
  "Fixed, honest pricing",
  "One person, start to finish",
];

const tiers = [
  {
    name: "Standard Website",
    price: "$349",
    blurb: "Get your business online. Up to 4 pages, mobile responsive, basic SEO & analytics.",
    href: "/pricing#tier1",
  },
  {
    name: "Advanced Website",
    price: "$599",
    blurb: "Let your website work for your business. Up to 10 pages, booking/ordering & integrations, advanced SEO.",
    recommended: true,
    href: "/pricing#tier2",
  },
  {
    name: "Custom Web Application",
    price: "Starting at $2,000",
    blurb: "Build something unique: logins, bookings, payments, e-commerce, scoped and quoted individually.",
    href: "/pricing#tier3",
  },
];

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBlob} aria-hidden="true" />
        <div className={styles.heroBlobSmall} aria-hidden="true" />
        <div className={`wrapper ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroHeadline}>
              A big-time website at a small-town price.
            </h1>
            <p className={styles.heroSubhead}>
              Designed and built by one person in Marquette, Michigan, from your first email to
              launch day.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="/start">
                Get Started
              </Link>
              <Link className={styles.textLink} href="/pricing">
                See pricing
              </Link>
            </div>
            <ul className={styles.essentials}>
              {essentials.map((item) => (
                <li key={item}>
                  <span className={styles.essentialsCheck} aria-hidden="true">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.pricingTeaser}>
        <div className="wrapper">
          <div className={styles.sectionHeading}>
            <h2>Every business is different. Your website should be priced that way too.</h2>
            <p className={styles.sectionIntro}>
              Fixed, named prices for Standard &amp; Advanced. No ranges, no guessing, no call
              required to buy.
            </p>
          </div>

          <div className={styles.tierGrid}>
            {tiers.map((tier) => (
              <Link
                href={tier.href}
                className={`${styles.tierCard} ${tier.recommended ? styles.tierCardRecommended : ""}`}
                key={tier.name}
              >
                {tier.recommended && (
                  <span className={styles.tierBadge}>Recommended for most small businesses</span>
                )}
                <h3>{tier.name}</h3>
                <div className={styles.tierPrice}>{tier.price}</div>
                <p>{tier.blurb}</p>
              </Link>
            ))}
          </div>

          <div className={styles.pricingLinkWrap}>
            <Link className={styles.textLinkDark} href="/pricing">
              See full pricing &amp; what&apos;s included &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`wrapper ${styles.ctaInner}`}>
          <div>
            <h2>Got a project in mind? Let&apos;s get it built.</h2>
          </div>
          <Link className={styles.primaryButtonDark} href="/start">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
