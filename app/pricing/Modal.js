"use client";

import { useEffect, useRef } from "react";
import styles from "./pricing.module.css";

export default function Modal({ triggerLabel, triggerClassName, title, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    const onClick = (event) => {
      const rect = dialog.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!inside) dialog.close();
    };

    dialog.addEventListener("click", onClick);
    return () => dialog.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <button
        type="button"
        className={triggerClassName}
        onClick={() => dialogRef.current?.showModal()}
      >
        {triggerLabel}
      </button>
      <dialog ref={dialogRef} className={styles.modal}>
        <button
          type="button"
          className={styles.modalClose}
          onClick={() => dialogRef.current?.close()}
          aria-label="Close"
        >
          &times;
        </button>
        <div className={styles.modalBody}>
          <h3 className={styles.modalTitle}>{title}</h3>
          {children}
        </div>
      </dialog>
    </>
  );
}
