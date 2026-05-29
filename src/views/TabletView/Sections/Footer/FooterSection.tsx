import styles from "./FooterSection.module.css";

export function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <button disabled className={styles.secondaryButton}>
          Add Photo
        </button>

        <button disabled className={styles.secondaryButton}>
          Record Audio
        </button>
      </div>

      <button disabled className={styles.primaryButton}>
        START A NEW REPAIR
      </button>
    </footer>
  );
}