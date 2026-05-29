import { HoverToolTip } from "@/components/tooltip/HoverToolTip";
import styles from "./FooterSection.module.css";

type FooterSectionProps = {
  isComplete: boolean;
  handleStartNewRepair: () => void;
}
export function FooterSection(props: FooterSectionProps) {
  return (
    <footer className={styles.footer}>
      {!props.isComplete &&<div className={styles.left}>
        <HoverToolTip text={"Not in v1"}>
          <button disabled className={styles.secondaryButton}>
          Add Photo
          </button>
        </HoverToolTip>

        <HoverToolTip text={"Not in v1"}>
          <button disabled className={styles.secondaryButton}>
          Record Audio
          </button>
        </HoverToolTip>
      </div>}

      <button disabled={!props.isComplete} className={styles.primaryButton}
        onClick={() => props.handleStartNewRepair()}
      >
        START A NEW REPAIR
      </button>
    </footer>
  );
}