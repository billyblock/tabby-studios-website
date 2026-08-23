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
              <Link href="/contact">Get a quote</Link>
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <p>
              <Link href="/pricing">Pricing</Link>
            </p>
            <p>
              <Link href="/faq">FAQ</Link>
            </p>
            <p>
              <Link href="/#services">Services</Link>
            </p>
          </div>
        </div>

        <p className={styles.copy}>&copy; {new Date().getFullYear()} Tabby Studios. All rights reserved.</p>
      </div>
    </footer>
  );
}
