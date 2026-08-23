import Link from "next/link";
import styles from "../contact.module.css";

export const metadata = {
  title: "Thanks! | Tabby Studios",
  description: "Your quote request was sent. We'll follow up by email shortly.",
};

export default function ThankYou() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`wrapper ${styles.heroInner}`}>
          <span className={styles.heroAccent} aria-hidden="true" />
          <h1 className={styles.heroTitle}>Got it, thanks for reaching out.</h1>
          <p className={styles.heroSubtitle}>
            Your message is on its way to our inbox. We&apos;ll follow up by email, usually
            within 1 business day.
          </p>
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
