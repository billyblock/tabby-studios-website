import styles from "../legal/legal.module.css";

export const metadata = {
  title: "Terms of Service | Tabby Studios",
  description:
    "The terms that apply when you hire Tabby Studios to design and build a website: pricing, payment, ownership, and how projects work.",
};

export default function Terms() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBlob} aria-hidden="true" />
        <div className="wrapper">
          <div className={styles.heroInner}>
            <span className={styles.heroAccent} aria-hidden="true" />
            <h1 className={styles.heroTitle}>Terms of Service</h1>
            <p className={styles.heroSubtitle}>
              The terms that apply when you hire Tabby Studios to design and build your website.
            </p>
            <p className={styles.updated}>Last updated August 25, 2026</p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="wrapper">
          <div className={styles.prose}>
            <h2>Who you&apos;re working with</h2>
            <p>
              Tabby Studios is a one-person web design business based in Marquette, Michigan.
              There is no account manager or outsourced team. The person you contact is the
              person who designs, builds, and supports your site. Reach out anytime at{" "}
              <a href="mailto:tabbystudiosmqt@gmail.com">tabbystudiosmqt@gmail.com</a>.
            </p>

            <h2>Pricing &amp; payment</h2>
            <p>
              Pricing for Standard and Advanced is fixed and published on the{" "}
              <a href="/pricing">Pricing</a> page. Custom projects are scoped individually and
              quoted before any work begins. A project&apos;s price is locked in once you&apos;ve
              agreed to it and won&apos;t change after the fact unless you request work outside
              the original scope. Payment terms (full payment or deposit) are confirmed in
              writing before the build starts.
            </p>

            <h2>What we need from you</h2>
            <p>
              Timelines assume you provide the content, photos, and feedback your project needs in
              a reasonably timely manner. If materials or feedback are delayed, your project
              timeline moves back accordingly.
            </p>

            <h2>Revisions</h2>
            <p>
              Reasonable revisions during the build (refining layout, copy placement, or design
              details within the agreed scope) are included. Requests that go beyond the original
              scope (new pages, new features, a different design direction after approval) are
              treated as new work and quoted separately.
            </p>

            <h2>Ownership</h2>
            <p>
              Once a project is paid in full, you own the final design, code, and content
              delivered for your site. Tabby Studios may reference completed projects (screenshots,
              a link, a short description) as portfolio work, unless you request otherwise in
              writing.
            </p>

            <h2>Care Plans &amp; ongoing support</h2>
            <p>
              Every build includes a first month of Care Plan (hosting, backups, SSL, security
              updates, and uptime monitoring), which then continues on a monthly basis at the rate
              listed on the <a href="/pricing">Pricing</a> page. Custom sites carry a separate
              software support retainer instead. Details on canceling or changing a plan are
              confirmed directly with you when your project starts.
            </p>

            <h2>Cancellations</h2>
            <p>
              Because pricing is fixed and scoped upfront, cancellation and refund terms for a
              specific project are agreed in writing before work begins, so both sides know where
              they stand if a project needs to stop early.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              Tabby Studios will do good, professional work, but isn&apos;t liable for indirect or
              consequential losses (like lost business or lost revenue) arising from your use of
              the delivered site. Total liability for any project is limited to the amount you
              paid for it.
            </p>

            <h2>Governing law</h2>
            <p>These terms are governed by the laws of the State of Michigan.</p>

            <h2>Changes to these terms</h2>
            <p>
              These terms may be updated from time to time; the date above reflects the most
              recent revision. Terms already agreed to in writing for an active project take
              precedence over this page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
