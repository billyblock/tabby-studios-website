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
        q: "What's included in the $349 Standard Website?",
        a: "Up to 4 pages, professional custom design, mobile responsive layout, 1 contact form, Google Maps integration, basic SEO and analytics, fast-loading optimized images, a photo gallery, and social media links, plus a guaranteed 10 business day turnaround. It's built for businesses that need a clean, credible presence without booking, ordering, or other dynamic functionality.",
      },
      {
        q: "What's the difference between Standard and Advanced?",
        a: "Advanced is everything in Standard, built out for businesses with more going on: up to 10 pages instead of 4, custom page layouts, multiple contact forms, testimonials and FAQ sections, enhanced animations, advanced analytics and reporting, booking/ordering integration, advanced third-party integrations, and expanded SEO (schema markup, keyword targeting, internal linking).",
      },
      {
        q: "What if I need more than 10 pages on Advanced?",
        a: "Extra pages beyond Advanced's 10-page cap are $100 each through the Extra Page add-on, so more content doesn't force you into a Custom build. Custom is reserved for projects that need real app functionality, like logins, e-commerce, dashboards, or payment processing, not just a higher page count.",
      },
      {
        q: "What if my project is bigger than Standard or Advanced?",
        a: "That's a Custom Web Application. Anything with a database enters the picture here: logins, customer portals, e-commerce, booking systems tied to inventory, dashboards, memberships, payment processing, or API integrations. These are genuinely different from project to project, so they're scoped and quoted individually rather than forced into a flat number.",
      },
    ],
  },
  {
    name: "Getting Started",
    questions: [
      {
        q: "Do I need to schedule a call to get started?",
        a: "Not for Standard or Advanced. Those are fixed price, so you can request a quote and get moving without a meeting. If you'd rather talk it through first, that's always an option too. Custom work always starts with a short discovery call, since custom scope has to be defined before it can be priced.",
      },
      {
        q: "What do I need to provide to start my project?",
        a: "Once you're ready to move forward, a short intake covers your business name, brand colors, photos, copy, and any must-have pages. That's typically all it takes to kick off the build.",
      },
      {
        q: "How long does a website take to build?",
        a: "Standard sites are guaranteed within 10 business days. Advanced and Custom timelines depend on scope and are confirmed once your project has been scoped out.",
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
        a: "It covers hosting, backups, an SSL certificate, security updates, and uptime monitoring, plus a bit of content-edit time each month (up to 15 minutes on the Standard plan, or 30 minutes on the Advanced plan), so you're not stuck learning a CMS just to change a phone number or swap a photo. The first month is included with every build, then it continues at $30/mo (Standard) or $50/mo (Advanced).",
      },
      {
        q: "Why is the Advanced Care Plan $50/mo instead of $30?",
        a: "Advanced sites have more moving parts, so there's more to look after: weekly backups instead of monthly, priority security updates, and ongoing monitoring for booking/ordering tools and other integrations, on top of the same hosting and content-edit time included in the Standard plan.",
      },
      {
        q: "Is the Care Plan the same thing for a Custom site?",
        a: "No. Custom sites carry a separate software support retainer, because a broken booking system or ordering flow is an operational emergency, not a content edit. That's $100/mo for monitoring, minor fixes, and patches (up to 2 hrs/mo), or $200/mo for priority support with faster response (up to 5 hrs/mo). Overage beyond included hours is $75/hr.",
      },
      {
        q: "Can I add extra pages, a blog, or online booking later?",
        a: "Add-ons are named, fixed prices, not estimates. A few examples: an extra page is $100, a basic blog with 5 starter posts is $350, a full CMS setup is $600, and an embedded booking widget is $350 (or $700 for a custom-styled flow that matches your site). Booking and integration add-ons need an Advanced or Custom site to run on. The full list is on the pricing page.",
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
