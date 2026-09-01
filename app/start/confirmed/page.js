import Link from "next/link";
import styles from "../../contact/contact.module.css";

export const metadata = {
  title: "You're In! | Tabby Studios",
  description: "Your project has started. We'll follow up by email shortly to confirm the details.",
  robots: { index: false, follow: true },
};

const copyByTier = {
  tier1: {
    subtitle:
      "Your Standard site is officially in motion. We'll email you within 1 business day to confirm the details and lock in your 10-business-day timeline.",
  },
  tier2: {
    subtitle:
      "Your Advanced site is officially in motion. We'll email you within 1 business day to confirm scope, page count, and your timeline.",
  },
};

export default async function StartConfirmed({ searchParams }) {
  const params = await searchParams;
  const key = typeof params?.package === "string" ? params.package : "";
  const subtitle =
    copyByTier[key]?.subtitle ??
    "Your project has started. We'll email you within 1 business day to confirm the details.";

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBlob} aria-hidden="true" />
        <div className="wrapper">
          <div className={styles.heroInner}>
            <span className={styles.heroAccent} aria-hidden="true" />
            <h1 className={styles.heroTitle}>You&apos;re on the build queue.</h1>
            <p className={styles.heroSubtitle}>{subtitle}</p>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="wrapper">
          <div className={styles.thankYouActions}>
            <Link className={styles.submitButton} href="/">
              Back Home
            </Link>
            <Link className={styles.secondaryLink} href="/pricing">
              See Pricing
            </Link>
            <Link className={styles.secondaryLink} href="/faq">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
