import { headers } from "next/headers";
import Link from "next/link";
import styles from "../contact/contact.module.css";

const CONTACT_EMAIL = "tabbystudiosmqt@gmail.com";

export const metadata = {
  title: "Start Your Project | Tabby Studios",
  description:
    "Pick Tier 1 or Tier 2, send over the basics, and your build begins. No call required. Tabby Studios will follow up by email to confirm the details and your timeline.",
};

const startTiers = [
  {
    key: "tier1",
    name: "Tier 1: Static Website",
    price: "$699",
    blurb: "Up to 5 pages, live in 10 business days.",
  },
  {
    key: "tier2",
    name: "Tier 2: Business Website",
    price: "$1,499",
    blurb: "Up to 10 pages, custom layouts.",
  },
];

export default async function Start({ searchParams }) {
  const params = await searchParams;
  const requestedKey = typeof params?.package === "string" ? params.package : "";
  const defaultTier = startTiers.find((tier) => tier.key === requestedKey) ?? startTiers[0];

  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const proto =
    headersList.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "production" ? "https" : "http");
  const redirectUrl = `${proto}://${host}/start/confirmed?package=${defaultTier.key}`;

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBlob} aria-hidden="true" />
        <div className="wrapper">
          <div className={styles.heroInner}>
            <span className={styles.heroAccent} aria-hidden="true" />
            <h1 className={styles.heroTitle}>Start your website.</h1>
            <p className={styles.heroSubtitle}>
              Tier 1 and Tier 2 are fixed price, so there&apos;s no call required. Rather talk it
              through first, or need something custom?{" "}
              <Link href="/contact">Contact us instead</Link>.
            </p>
            <p className={styles.heroNote}>
              Just your name and email gets things moving. Everything else is optional for now.
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
            <input type="hidden" name="_subject" value="New Project Start: Tabby Studios" />
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

            <fieldset className={styles.tierPicker}>
              <legend className={styles.tierPickerLegend}>Which package?</legend>
              <div className={styles.tierOptions}>
                {startTiers.map((tier) => (
                  <label className={styles.tierOption} key={tier.key}>
                    <input
                      type="radio"
                      name="Package"
                      value={tier.name}
                      defaultChecked={tier.key === defaultTier.key}
                      required
                    />
                    <span className={styles.tierOptionCard}>
                      <span className={styles.tierOptionName}>{tier.name}</span>
                      <span className={styles.tierOptionPrice}>{tier.price}</span>
                      <span className={styles.tierOptionBlurb}>{tier.blurb}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className={styles.grid}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input id="name" name="Name" type="text" required placeholder="Maria Koski" />
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
            </div>

            <details className={styles.moreDetails}>
              <summary className={styles.moreSummary}>Add more project details (optional)</summary>
              <div className={styles.moreDetailsBody}>
                <p className={styles.fieldHint}>
                  None of this is required to get started, but it helps us move faster if you have
                  it handy.
                </p>

                <div className={styles.grid}>
                  <div className={styles.field}>
                    <label htmlFor="business">Business name</label>
                    <input
                      id="business"
                      name="Business"
                      type="text"
                      placeholder="Northland Coffee Co."
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="Phone" type="tel" placeholder="(906) 555-0100" />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="domain">Domain name</label>
                  <input
                    id="domain"
                    name="Domain"
                    type="text"
                    placeholder="northlandcoffee.com, or leave blank if you need one"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="pages">What pages do you need?</label>
                  <textarea
                    id="pages"
                    name="Must-Have Pages"
                    rows={3}
                    placeholder="e.g. Home, About, Menu, Contact"
                  />
                </div>

                <div className={styles.grid}>
                  <div className={styles.field}>
                    <label htmlFor="brand">Logo, brand colors &amp; photos</label>
                    <select id="brand" name="Brand Assets" defaultValue="Ready to send">
                      <option>Ready to send</option>
                      <option>Have some, need guidance</option>
                      <option>Starting from scratch</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="copy">Website copy/text</label>
                    <select id="copy" name="Copy Status" defaultValue="Ready to send">
                      <option>Ready to send</option>
                      <option>I need help writing it</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="notes">Anything else?</label>
                  <textarea
                    id="notes"
                    name="Additional Notes"
                    rows={4}
                    placeholder="Timeline to keep in mind, sites you like, anything else worth knowing."
                  />
                </div>
              </div>
            </details>

            <div className={styles.actions}>
              <button type="submit" className={styles.submitButton}>
                Start My Project
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
