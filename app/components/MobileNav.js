"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileNav.module.css";

export default function MobileNav({ links }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={`${styles.bar} ${open ? styles.barTop : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barMid : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barBottom : ""}`} />
      </button>

      <nav className={`${styles.panel} ${open ? styles.panelOpen : ""}`} aria-label="Mobile navigation">
        <div className={styles.panelInner}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? styles.navActive : ""}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link className={styles.ctaLink} href="/start" onClick={() => setOpen(false)}>
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}
