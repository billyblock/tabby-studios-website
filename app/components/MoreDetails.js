"use client";

import { useId, useState } from "react";
import styles from "../contact/contact.module.css";

export default function MoreDetails({ summary, children }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={styles.moreDetails}>
      <button
        type="button"
        className={styles.moreSummary}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {summary}
      </button>
      <div
        id={panelId}
        role="region"
        className={`${styles.morePanel} ${open ? styles.morePanelOpen : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className={styles.morePanelInner}>
          <div className={styles.moreDetailsBody}>{children}</div>
        </div>
      </div>
    </div>
  );
}
