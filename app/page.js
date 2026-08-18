import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const services = [
  {
    title: "Mobile-Friendly Design",
    body: "Most visitors browse on a phone first. Every site is designed and tested there first, not as an afterthought.",
  },
  {
    title: "Built for SEO",
    body: "Fast load times, clean code, and proper structure — set up to be found on Google, not just to look good.",
  },
  {
    title: "Honest, Scoped Pricing",
    body: "Every quote is tied to a visible list of what's included. No flat rate, no guessing games, no surprise invoices.",
  },
  {
    title: "A Real Person to Talk To",
    body: "You work directly with the person building your site — no account managers, no outsourcing, no runaround.",
  },
];

const process = [
  {
    step: "Discover",
    body: "A short conversation about your business and what the site needs to do.",
  },
  {
    step: "Design & Build",
    body: "A site built around your scope — mobile-first, fast, and easy to navigate.",
  },
  {
    step: "Launch",
    body: "Your new site goes live, tested on real devices and ready for visitors.",
  },
  {
    step: "Ongoing Care",
    body: "An optional monthly care plan keeps it backed up, secure, and current.",
  },
];

const tiers = [
  {
    name: "Static Website",
    price: "Starting at $499",
    blurb: "Up to 5 pages, mobile responsive, contact form, basic SEO.",
  },
  {
    name: "Business Website",
    price: "Starting at $999",
    blurb: "6–15 pages, custom layouts, expanded SEO, testimonials & FAQ.",
  },
  {
    name: "Custom Web Application",
    price: "Custom Quote",
    blurb: "Logins, bookings, payments, dashboards — scoped and quoted individually.",
  },
];

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`wrapper ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className="kicker">Marquette, Michigan &middot; Web Design Studio</span>
            <h1 className={styles.heroTitle}>
              Websites that look sharp, load fast, and actually bring in customers.
            </h1>
            <p className={styles.heroSubtitle}>
              Tabby Studios builds mobile-friendly, SEO-ready websites for local businesses
              &mdash; clean design, honest pricing, and a local designer who&apos;s easy to
              reach.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="mailto:hello@tabbystudios.com">
                Get a Quote
              </a>
              <Link className={styles.textLink} href="/pricing">
                See pricing
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.browserCard}>
              <div className={styles.browserBar}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
                <div className={styles.browserUrl}>yourbusiness.com</div>
              </div>
              <div className={styles.browserBody}>
                <div className={`${styles.skeletonBlock} ${styles.skeletonHero}`} />
                <div className={`${styles.skeletonBlock} ${styles.skeletonLineWide}`} />
                <div className={`${styles.skeletonBlock} ${styles.skeletonLine}`} />
                <div className={`${styles.skeletonBlock} ${styles.skeletonButton}`} />
              </div>
            </div>
            <div className={styles.badge}>
              <Image src="/logo.png" alt="Tabby Studios" width={72} height={72} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.trustBar}>
        <div className={`wrapper ${styles.trustBarInner}`}>
          <div>
            <span className="kicker">Built For</span>
            <strong>Mobile screens first</strong>
          </div>
          <div>
            <span className="kicker">Optimized For</span>
            <strong>Search &amp; speed</strong>
          </div>
          <div>
            <span className="kicker">Based In</span>
            <strong>Marquette, Michigan</strong>
          </div>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={`wrapper ${styles.splitLayout}`}>
          <div className={styles.logoPanel}>
            <Image src="/logo.png" alt="Tabby Studios logo" width={340} height={340} className={styles.logoImage} />
          </div>
          <div className={styles.copyPanel}>
            <span className="kicker">About Tabby Studios</span>
            <h2>
              The local web designer who&apos;s easy to talk to and clearly knows what
              they&apos;re doing.
            </h2>
            <p>
              Tabby Studios designs and builds websites for small businesses in and around
              Marquette &mdash; no jargon, no bloated packages, just a clean, fast site built
              around what your business actually needs.
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
                <span>Direct communication &mdash; no account managers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={`${styles.services} ${styles.muted}`}>
        <div className="wrapper">
          <div className={`${styles.sectionHeading} ${styles.centered}`}>
            <span className="kicker">What you get</span>
            <h2>Every site starts from the same solid foundation.</h2>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <article className={styles.serviceCard} key={service.title}>
                <div className={styles.iconWrap}>{String(index + 1).padStart(2, "0")}</div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className={styles.process}>
        <div className="wrapper">
          <div className={`${styles.sectionHeading} ${styles.centered}`}>
            <span className="kicker">How it works</span>
            <h2>From first conversation to a live site.</h2>
          </div>

          <div className={styles.processGrid}>
            {process.map((item, index) => (
              <div className={styles.processCard} key={item.step}>
                <div className={styles.processNumber}>{String(index + 1).padStart(2, "0")}</div>
                <h3>{item.step}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.pricingTeaser} ${styles.muted}`}>
        <div className="wrapper">
          <div className={`${styles.sectionHeading} ${styles.centered}`}>
            <span className="kicker">Pricing</span>
            <h2>Every business is different. Your website should be priced that way too.</h2>
          </div>

          <div className={styles.tierGrid}>
            {tiers.map((tier) => (
              <article className={styles.tierCard} key={tier.name}>
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
            <span className={`kicker ${styles.kickerLight}`}>Ready when you are</span>
            <h2>Ready for a website that works as hard as you do?</h2>
          </div>
          <a className={styles.primaryButtonLight} href="mailto:hello@tabbystudios.com">
            Get a Quote
          </a>
        </div>
      </section>
    </main>
  );
}
