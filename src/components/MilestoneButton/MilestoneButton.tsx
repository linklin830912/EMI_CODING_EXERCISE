import styles from "./MilestoneButton.module.css";

type Props = {
  number: number;
  label: string;
  colour: "red" | "orange" | "gold" | "green";
  disabled?: boolean;
};

export function MilestoneButton({
  number,
  label,
  colour,
  disabled,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={`
        ${styles.button}
        ${styles[colour]}
        ${disabled ? styles.disabled : ""}
      `}
    >
      <span className={styles.number}>{number}</span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}