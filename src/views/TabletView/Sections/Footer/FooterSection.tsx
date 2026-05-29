import styles from "./FooterSection.module.css";

type FooterSectionProps = {
  isComplete: boolean;
  handleStartNewRepair: () => void;
}
export function FooterSection(props: FooterSectionProps) {
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

      <button disabled={!props.isComplete} className={styles.primaryButton}
        onClick={() => props.handleStartNewRepair()}
      >
        START A NEW REPAIR
      </button>
    </footer>
  );
}