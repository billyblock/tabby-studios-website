import { headers } from "next/headers";
import Link from "next/link";
import styles from "./contact.module.css";

const CONTACT_EMAIL = "tabbystudiosmqt@gmail.com";

export const metadata = {
  title: "Get a Quote | Tabby Studios",
  description:
    "Tell us a bit about your business and what you need. It goes straight to our inbox. Or email tabbystudiosmqt@gmail.com directly.",
};

const packageOptions = [
  { key: "", label: "Not sure yet" },
  { key: "tier1", label: "Standard Website ($349)" },
  { key: "tier2", label: "Advanced Website ($599)" },
  { key: "tier3", label: "Custom Web Application (quote)" },
  { key: "careplan", label: "Just a Care Plan or add-on" },
];

export default async function Contact({ searchParams }) {
  const params = await searchParams;
  const requestedKey = typeof params?.package === "string" ? params.package : "";
  const defaultPackage =
    packageOptions.find((option) => option.key === requestedKey)?.label ?? packageOptions[0].label;

  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const proto =
    headersList.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "production" ? "https" : "http");
  const redirectUrl = `${proto}://${host}/contact/thank-you`;

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBlob} aria-hidden="true" />
        <div className="wrapper">
          <div className={styles.heroInner}>
            <span className={styles.heroAccent} aria-hidden="true" />
            <h1 className={styles.heroTitle}>Tell us about your business.</h1>
            <p className={styles.heroSubtitle}>
              Fill this out and hit send. It goes straight to our inbox, no email app required.
              Prefer to skip the form? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
              directly.
            </p>
            <p className={styles.heroNote}>
              Already know you want Standard or Advanced?{" "}
              <Link href="/start">Skip the wait and start your project</Link>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="wrapper">
          <form
            className={styles.card}
            action={`https://formsubmit.co/${CONTACT_EMAIL}`}
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Quote Request: Tabby Studios" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={redirectUrl} />
            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className={styles.grid}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input id="name" name="Name" type="text" required placeholder="Maria Koski" />
              </div>

              <div className={styles.field}>
                <label htmlFor="business">Business name</label>
                <input id="business" name="Business" type="text" placeholder="Northland Coffee Co." />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="maria@northlandcoffee.com"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="phone">Phone (optional)</label>
                <input id="phone" name="Phone" type="tel" placeholder="(906) 555-0100" />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="package">What are you interested in?</label>
              <select id="package" name="Package" defaultValue={defaultPackage}>
                {packageOptions.map((option) => (
                  <option key={option.key} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="details">Tell us about the project</label>
              <textarea
                id="details"
                name="Project Details"
                required
                rows={6}
                placeholder="What does your business do, what pages or features do you need, and any timeline to keep in mind?"
              />
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.submitButton}>
                Send to Tabby Studios
              </button>
              <p className={styles.fallback}>
                Prefer email? Reach us directly at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
