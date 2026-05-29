import { MilestoneButtonColorsType } from "@/lib/types";
import styles from "./MilestoneButton.module.css";

type Props = {
  number: number;
  label: string;
  colour: MilestoneButtonColorsType;
  next: boolean;
  disabled?: boolean;
    completed?: boolean;
  onClick: () => void
};

export function MilestoneButton({
  number,
  label,
  colour,
  disabled,
  next,
    completed,
  onClick
}: Props) {
  return (
    <div className={styles.wrapper}>
          <button
            onClick={() =>{if(!completed) onClick()}}
            disabled={disabled}
            className={`
            ${styles.button}
            ${styles[colour]}
            ${next ? styles.next : ""}
            ${disabled ? styles.disabled : ""}
        `}
      >
        <span className={styles.number}>
          {`${completed ? "✓":"" } ${number}`}
        </span>

        <span className={styles.label}>
          {label}
        </span>
      </button>
    </div>
  );
}