"use client";

import { useId, useState } from "react";
import styles from "./faq.module.css";

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={styles.accordionItem}>
      <h3 className={styles.accordionHeading}>
        <button
          type="button"
          className={styles.accordionTrigger}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{question}</span>
          <span className={styles.marker} aria-hidden="true" />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        className={`${styles.panel} ${open ? styles.panelOpen : ""}`}
        aria-hidden={!open}
      >
        <div className={styles.panelInner}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
