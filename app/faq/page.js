import Link from "next/link";
import Reveal from "../components/Reveal";
import FaqItem from "./FaqItem";
import styles from "./faq.module.css";

export const metadata = {
  title: "FAQ | Tabby Studios",
  description:
    "Answers to common questions about Tabby Studios' pricing, tiers, timelines, Care Plans, and add-ons.",
};

const categories = [
  {
    name: "Pricing & Packages",
    questions: [
      {
        q: "What's included in the $699 Static Website?",
        a: "Up to 5 pages, mobile responsive design, a contact form, Google Maps integration, basic SEO setup, fast-loading optimized images, a photo gallery, and social media links, plus a guaranteed 10 business day turnaround. It's built for businesses that don't need logins, a database, or anything dynamic.",
      },
      {
        q: "What's the difference between Tier 1 and Tier 2?",
        a: "Tier 2 is everything in Tier 1, built out for businesses with more to say: up to 10 pages instead of 5, custom page layouts, multiple forms, service area pages, testimonials and FAQ sections, enhanced animations, and expanded SEO (schema markup, keyword targeting, internal linking).",
      },
      {
        q: "What if I need more than 10 pages on Tier 2?",
        a: "Extra pages beyond Tier 2's 10-page cap are $100 each through the Extra Page add-on, so more content doesn't force you into Tier 3. Tier 3 is reserved for projects that need real app functionality, like logins, bookings tied to inventory, dashboards, or payment processing, not just a higher page count.",
      },
      {
        q: "What if my project is bigger than Tier 1 or Tier 2?",
        a: "That's Tier 3. Anything with a database enters the picture here: logins, customer portals, booking systems tied to inventory, dashboards, memberships, payment processing, or API integrations. These are genuinely different from project to project, so they're scoped and quoted individually starting at $2,000 rather than forced into a flat number.",
      },
      {
        q: "Do you offer a payment plan?",
        a: "Yes, for Tier 1: $199 down plus $49/month for 12 months instead of paying $699 up front. If you're interested in a similar arrangement for a Tier 2 or Tier 3 project, ask when you request your quote.",
      },
    ],
  },
  {
    name: "Getting Started",
    questions: [
      {
        q: "Do I need to schedule a call to get started?",
        a: "Not for Tier 1 or Tier 2. Those are fixed price, so you can request a quote and get moving without a meeting. If you'd rather talk it through first, that's always an option too. Tier 3 work always starts with a short discovery call, since custom scope has to be defined before it can be priced.",
      },
      {
        q: "What do I need to provide to start my project?",
        a: "Once you're ready to move forward, a short intake covers your business name, brand colors, photos, copy, and any must-have pages. That's typically all it takes to kick off the build.",
      },
      {
        q: "How long does a website take to build?",
        a: "Tier 1 sites are guaranteed within 10 business days. Tier 2 and Tier 3 timelines depend on scope and are confirmed once your project has been scoped out.",
      },
      {
        q: "Can I get my site built faster than the standard turnaround?",
        a: "Rush delivery is available as an add-on, for +25% of the total project price.",
      },
    ],
  },
  {
    name: "Care Plans & Add-Ons",
    questions: [
      {
        q: "What's a Care Plan?",
        a: "It covers hosting, backups, an SSL certificate, security updates, and uptime monitoring, plus a bit of content-edit time each month (up to 15 minutes on the Tier 1 plan, or 30 minutes on the Tier 2 plan), so you're not stuck learning a CMS just to change a phone number or swap a photo. The first month is included with every build, then it continues at $30/mo (Tier 1) or $50/mo (Tier 2).",
      },
      {
        q: "What if I need more content updates than my Care Plan covers in a given month?",
        a: "Extra support time beyond your plan is billed at $75/hr, or you can move to expanded content updates ($75/mo) if you need weekly edits on an ongoing basis rather than the plan default.",
      },
      {
        q: "Is the Care Plan the same thing for a Tier 3 custom site?",
        a: "No. Tier 3 sites carry a separate software support retainer, because a broken booking system or ordering flow is an operational emergency, not a content edit. That's $100/mo for monitoring, minor fixes, and patches (up to 2 hrs/mo), or $200/mo for priority support with faster response (up to 5 hrs/mo). Overage beyond included hours is $75/hr.",
      },
      {
        q: "Can I add extra pages, a blog, or online booking later?",
        a: "Add-ons are named, fixed prices, not estimates. A few examples: an extra page is $100, a basic blog with 5 starter posts is $350, a full CMS setup is $600, and an embedded booking widget is $350 (or $700 for a custom-styled flow that matches your site). The full list is on the pricing page.",
      },
      {
        q: "Do you offer SEO or content marketing after launch?",
        a: "A starter SEO retainer (2 blog posts/mo plus a basic monthly report) is $250/mo, and a growth retainer (4 blog posts/mo, backlink outreach, full report) is $450/mo. These publish to your site's blog, so if you don't have one yet, add the Basic blog or Full CMS setup add-on first.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((category) =>
    category.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function Faq() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className={styles.hero}>
        <div className={styles.heroBlob} aria-hidden="true" />
        <div className="wrapper">
          <div className={styles.heroInner}>
            <span className={styles.heroAccent} aria-hidden="true" />
            <h1 className={styles.heroTitle}>Questions? We&apos;ve got answers.</h1>
            <p className={styles.heroSubtitle}>
              The most common questions about pricing, timelines, and Care Plans. Don&apos;t see
              yours? Just ask.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="wrapper">
          {categories.map((category) => (
            <div className={styles.category} key={category.name}>
              <h2>{category.name}</h2>
              <Reveal className={`${styles.accordionList} revealGroup`}>
                {category.questions.map((item) => (
                  <FaqItem question={item.q} answer={item.a} key={item.q} />
                ))}
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`wrapper ${styles.ctaInner}`}>
          <div>
            <h2>We&apos;re happy to talk it through.</h2>
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
