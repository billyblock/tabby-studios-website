import Link from "next/link";
import styles from "./page.module.css";

const services = [
  {
    title: "Mobile-friendly design",
    body: "Most visitors browse on a phone first. Every site is designed and tested there first, not as an afterthought.",
  },
  {
    title: "Built for SEO",
    body: "Fast load times, clean code, and proper structure, so Google finds you as easily as people do.",
  },
  {
    title: "Honest, scoped pricing",
    body: "Every quote is tied to a visible list of what's included. No flat rate, no guessing games.",
  },
  {
    title: "A real person to talk to",
    body: "You work directly with the person building your site. No account manager, no handoffs to someone new halfway through.",
  },
];

const process = [
  {
    step: "Discover",
    body: "A short conversation about your business and what the site needs to do.",
  },
  {
    step: "Design & build",
    body: "A site built around your scope: mobile-first, fast, and easy to navigate.",
  },
  {
    step: "Launch",
    body: "Your new site goes live, tested on real devices and ready for visitors.",
  },
  {
    step: "Ongoing care",
    body: "An optional monthly care plan keeps it backed up, secure, and current.",
  },
];

const tiers = [
  {
    name: "Static Website",
    price: "$699",
    blurb: "Up to 5 pages, mobile responsive, contact form, basic SEO.",
  },
  {
    name: "Business Website",
    price: "$1,200–$2,500",
    blurb: "6–15 pages, custom layouts, expanded SEO, testimonials & FAQ.",
    recommended: true,
  },
  {
    name: "Custom Web Application",
    price: "Starting at $2,000",
    blurb: "Logins, bookings, payments, dashboards: scoped and quoted individually.",
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
              <Link className={styles.primaryButton} href="/contact">
                Get a Quote
              </Link>
              <Link className={styles.textLink} href="/pricing">
                See pricing
              </Link>
            </div>
          </div>
        </div>
        <a href="#about" className={styles.scrollCue}>
          <span className={styles.scrollCueLine} aria-hidden="true" />
          Scroll to learn more
        </a>
      </section>

      <section id="about" className={styles.about}>
        <div className={`wrapper ${styles.splitLayout}`}>
          <div className={styles.copyPanel}>
            <h2>
              The local web designer who&apos;s easy to talk to and clearly knows what
              they&apos;re doing.
            </h2>
            <p>
              Tabby Studios designs and builds websites for small businesses in and around
              Marquette. No jargon, no bloated packages. Just a clean, fast site built around what
              your business actually needs.
            </p>
            <p>
              Every project starts with a real conversation about your business, not a canned
              questionnaire. You&apos;ll always know what you&apos;re paying for, and why.
            </p>
            <div className={styles.checkList}>
              <div>
                <span className={styles.check}>&#10003;</span>
                <span>Mobile-friendly by default</span>
              </div>
              <div>
                <span className={styles.check}>&#10003;</span>
                <span>Built with SEO in mind from day one</span>
              </div>
              <div>
                <span className={styles.check}>&#10003;</span>
                <span>Direct communication, not an account manager</span>
              </div>
            </div>
          </div>
          <div className={styles.quotePanel}>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <p className={styles.quoteText}>
              Built by one person. Explained in plain English. Priced before you ask.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <div className="wrapper">
          <div className={styles.sectionHeading}>
            <h2>Every site starts from the same solid foundation.</h2>
          </div>

          <div className={styles.serviceList}>
            {services.map((service) => (
              <article className={styles.serviceRow} key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className={`${styles.process} ${styles.muted}`}>
        <div className="wrapper">
          <div className={styles.sectionHeading}>
            <h2>From first conversation to a live site.</h2>
          </div>

          <div className={styles.processTimeline}>
            {process.map((item, index) => (
              <div className={styles.processStep} key={item.step}>
                <div className={styles.processMarker}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className={styles.processStepBody}>
                  <h3>{item.step}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pricingTeaser}>
        <div className="wrapper">
          <div className={styles.sectionHeading}>
            <h2>Every business is different. Your website should be priced that way too.</h2>
            <p className={styles.sectionIntro}>
              Fixed, named prices for Tier 1 &amp; 2. No ranges, no guessing, no call required to
              buy.
            </p>
          </div>

          <div className={styles.tierGrid}>
            {tiers.map((tier) => (
              <article
                className={`${styles.tierCard} ${tier.recommended ? styles.tierCardRecommended : ""}`}
                key={tier.name}
              >
                {tier.recommended && (
                  <span className={styles.tierBadge}>Recommended for most small businesses</span>
                )}
                <h3>{tier.name}</h3>
                <div className={styles.tierPrice}>{tier.price}</div>
                <p>{tier.blurb}</p>
              </article>
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
            <h2>Got a project in mind? Let&apos;s talk about it.</h2>
          </div>
          <Link className={styles.primaryButtonDark} href="/contact">
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
