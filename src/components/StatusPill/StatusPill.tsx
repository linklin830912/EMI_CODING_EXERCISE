import styles from "./StatusPill.module.css";

type Props = {
  status: "ACTIVE" | "STOPPED" | "COMPLETED";
};

export function StatusPill({ status }: Props) {
  return (
    <span
      className={`${styles.pill} ${styles[status.toLowerCase()]}`}
    >
      {status}
    </span>
  );
}