import Link from "next/link";
import styles from "./Footer.module.css";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`wrapper ${styles.inner}`}>
        <div className={styles.top}>
          <Wordmark size="md" onDark />
          <p className={styles.tagline}>
            Mobile-friendly, SEO-ready websites for Marquette businesses.
          </p>
        </div>

        <div className={styles.grid}>
          <div>
            <h3>Based in Marquette</h3>
            <p>Serving the Upper Peninsula</p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>
              <a href="mailto:tabbystudiosmqt@gmail.com">tabbystudiosmqt@gmail.com</a>
            </p>
            <p>
              <Link href="/start">Start your project</Link>
            </p>
            <p>
              <Link href="/contact">Contact us</Link>
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <p>
              <Link href="/">Home</Link>
            </p>
            <p>
              <Link href="/about">About</Link>
            </p>
            <p>
              <Link href="/pricing">Pricing</Link>
            </p>
            <p>
              <Link href="/faq">FAQ</Link>
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {new Date().getFullYear()} Tabby Studios. All rights reserved.</p>
          <p className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
