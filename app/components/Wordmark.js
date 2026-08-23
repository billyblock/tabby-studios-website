import styles from "./Wordmark.module.css";

export default function Wordmark({ size = "sm", onDark = false, className = "" }) {
  return (
    <span
      className={`${styles.wordmark} ${styles[size]} ${onDark ? styles.onDark : ""} ${className}`.trim()}
    >
      Tabby <span className={styles.accent}>Studios</span>
    </span>
  );
}
