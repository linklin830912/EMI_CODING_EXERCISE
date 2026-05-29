import styles from "./MilestoneButton.module.css";

export type MilestoneButtonColorsType = "red" | "orange" | "gold" | "green";

type Props = {
  number: number;
  label: string;
  colour: MilestoneButtonColorsType;
  disabled?: boolean;
    completed?: boolean;
  onClick: () => void
};

export function MilestoneButton({
  number,
  label,
  colour,
  disabled,
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