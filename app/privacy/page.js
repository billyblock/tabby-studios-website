import styles from "../legal/legal.module.css";

export const metadata = {
  title: "Privacy Policy | Tabby Studios",
  description:
    "How Tabby Studios collects, uses, and protects information submitted through the contact and start-a-project forms.",
};

export default function Privacy() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBlob} aria-hidden="true" />
        <div className="wrapper">
          <div className={styles.heroInner}>
            <span className={styles.heroAccent} aria-hidden="true" />
            <h1 className={styles.heroTitle}>Privacy Policy</h1>
            <p className={styles.heroSubtitle}>
              Plain language on what information this site collects and what happens to it.
            </p>
            <p className={styles.updated}>Last updated August 25, 2026</p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="wrapper">
          <div className={styles.prose}>
            <h2>Who this covers</h2>
            <p>
              This policy applies to tabbystudios.com, operated by Tabby Studios, a one-person web
              design business based in Marquette, Michigan. If you have questions about anything
              here, email{" "}
              <a href="mailto:tabbystudiosmqt@gmail.com">tabbystudiosmqt@gmail.com</a> directly.
            </p>

            <h2>What information is collected</h2>
            <p>
              Information is only collected when you submit it yourself, through the{" "}
              <a href="/contact">Contact</a> form or the <a href="/start">Start Your Project</a>{" "}
              form. Depending on the form, that can include your name, business name, email
              address, phone number, the package you&apos;re interested in, and any project
              details you write in.
            </p>
            <p>
              This site does not use cookies, analytics, or any third-party tracking scripts.
              Nothing about your visit is logged or collected unless you fill out and submit a
              form.
            </p>

            <h2>How it&apos;s used and where it goes</h2>
            <p>
              Both forms are processed by{" "}
              <a href="https://formsubmit.co" target="_blank" rel="noreferrer noopener">
                FormSubmit
              </a>
              , a third-party form-delivery service that sends your submission directly to Tabby
              Studios&apos; email inbox. There is no database or server on this site storing form
              submissions. Your information exists only in that email and, if a project moves
              forward, in whatever project files and correspondence are needed to design and build
              your site.
            </p>
            <p>
              Information you submit is used solely to respond to your inquiry or to deliver the
              service you&apos;ve requested. It is never sold, rented, or shared with anyone
              outside of FormSubmit acting as the delivery mechanism for the form itself.
            </p>

            <h2>How long it&apos;s kept</h2>
            <p>
              Submitted information is kept for as long as reasonably needed for business
              records, for example ongoing correspondence about a project or Care Plan billing
              history. You can ask for your information to be deleted at any time; see below.
            </p>

            <h2>Your choices</h2>
            <p>
              Email{" "}
              <a href="mailto:tabbystudiosmqt@gmail.com">tabbystudiosmqt@gmail.com</a> at any
              time to ask what information is on file for you, request a correction, or request
              deletion. Requests are handled directly, usually within a few business days.
            </p>

            <h2>Children</h2>
            <p>
              This site and its services are intended for business owners and are not directed at
              children under 13.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              If this policy changes, for example if analytics or a new form processor is added
              later, this page will be updated and the date above will change.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
