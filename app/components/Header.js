"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import MobileNav from "./MobileNav";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`wrapper ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Tabby Studios home">
          <Image src="/logo.png" alt="Tabby Studios logo" width={72} height={72} priority />
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="mailto:hello@tabbystudios.com" className={styles.cta}>
          Get a Quote
        </a>

        <MobileNav links={links} />
      </div>
    </header>
  );
}
