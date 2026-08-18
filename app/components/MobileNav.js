"use client";

import { useState } from "react";
import styles from "./MobileNav.module.css";

export default function MobileNav({ links }) {
  const [open, setOpen] = useState(false);

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
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="mailto:hello@tabbystudios.com" onClick={() => setOpen(false)}>
            Get a Quote
          </a>
        </div>
      </nav>
    </div>
  );
}
