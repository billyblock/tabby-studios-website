import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";
import headshot from "../../public/headshot-outside.png";

export const metadata = {
  title: "About | Tabby Studios",
  description:
    "William Block is the developer behind Tabby Studios: a computer science degree, an industry web development background, and a mission to help Marquette businesses get found online.",
};

export default function About() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBlob} aria-hidden="true" />
        <div className="wrapper">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <span className={styles.heroAccent} aria-hidden="true" />
              <h1 className={styles.heroTitle}>Hi, I&apos;m William.</h1>
              <p className={styles.heroSubtitle}>
                I design and build every Tabby Studios site myself, right here in Marquette.
              </p>
            </div>

            <div className={styles.photoWrap}>
              <Image
                src={headshot}
                alt="William Block, founder of Tabby Studios, standing outside near the water in Marquette"
                className={styles.photo}
                priority
                quality={95}
                sizes="(max-width: 760px) 60vw, 320px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="wrapper">
          <div className={styles.section}>
            <h2>Background</h2>
            <p>
              I have a computer science degree from Northern Michigan University and hands-on
              experience building software from the ground up. Before Tabby Studios, I spent two
              years teaching programming and game design to over a thousand students online, and I
              worked in IT support handling deployments, troubleshooting, and documentation. That
              combination is basically the whole business: I can build the site, explain what
              I&apos;m doing without hiding behind jargon, and keep it running afterward.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Why Marquette</h2>
            <p>
              Marquette and the surrounding Upper Peninsula have some of the best places around,
              but a lot of them stay hidden because nobody outside the area ever finds them
              online. My goal with Tabby Studios is to help modernize how local businesses show up
              on the internet, and in the process help more people discover what&apos;s actually
              here. We could have some of the coolest spots in the state, but if a website
              doesn&apos;t exist, or never shows up in a search, nobody&apos;s going to know.
            </p>
          </div>

          <div className={styles.section}>
            <h2>How I work</h2>
            <p>
              Every project goes through one person, start to finish: no account managers, no
              handoffs, no outsourcing. Pricing is fixed and posted up front, and Standard or
              Advanced projects can get started without a call. The full breakdown is on the{" "}
              <Link href="/pricing">Pricing</Link> and <Link href="/faq">FAQ</Link> pages.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={`wrapper ${styles.ctaInner}`}>
          <div>
            <h2>Want to work together?</h2>
            <p className={styles.ctaSubtext}>
              Reach me directly at{" "}
              <a href="mailto:tabbystudiosmqt@gmail.com">tabbystudiosmqt@gmail.com</a>
            </p>
          </div>
          <Link className={styles.primaryButtonLight} href="/start">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
