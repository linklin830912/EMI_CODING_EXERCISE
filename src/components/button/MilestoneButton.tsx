import { MilestoneButtonColorsType } from "@/lib/types";
import styles from "./MilestoneButton.module.css";

type MilestoneButtonProps = {
  number: number;
  label: string;
  colour: MilestoneButtonColorsType;
  next: boolean;
  disabled?: boolean;
  completed?: boolean;
  onClick: () => void
};

export function MilestoneButton(props: MilestoneButtonProps) {
  return (
    <div className={styles.wrapper}>
          <button
            onClick={() =>{if(!props.completed) props.onClick()}}
            disabled={props.disabled}
            className={`
            ${styles.button}
            ${styles[props.colour]}
            ${props.next ? styles.next : ""}
            ${props.disabled ? styles.disabled : ""}
        `}
      >
        <span className={styles.number}>
          {`${props.completed ? "✓":"" } ${props.number}`}
        </span>

        <span className={styles.label}>
          {props.label}
        </span>
      </button>
    </div>
  );
}