import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`wrapper ${styles.inner}`}>
        <div className={styles.top}>
          <Image className={styles.logo} src="/logo.png" alt="Tabby Studios logo" width={88} height={88} />
          <div>
            <p className={styles.brand}>Tabby Studios</p>
            <p className={styles.tagline}>
              Mobile-friendly, SEO-ready websites for Marquette businesses.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <div>
            <span className="kicker">Based In</span>
            <p>Marquette, Michigan</p>
            <p>Serving the Upper Peninsula</p>
          </div>

          <div>
            <span className="kicker">Contact</span>
            <p>
              <a href="mailto:tabbystudiosmqt@gmail.com">tabbystudiosmqt@gmail.com</a>
            </p>
            <p>
              <Link href="/contact">Get a Quote</Link>
            </p>
          </div>

          <div>
            <span className="kicker">Explore</span>
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
