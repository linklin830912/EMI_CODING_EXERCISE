import styles from "./FooterSection.module.css";

export function FooterSection() {
  return (
    <footer className={styles.footer}>
      <button disabled>
        Add Photo
      </button>

      <button disabled>
        Record Audio
      </button>
    </footer>
  );
}