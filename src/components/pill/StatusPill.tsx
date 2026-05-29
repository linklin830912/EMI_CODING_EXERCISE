import styles from "./StatusPill.module.css";
import { RepairStatus } from "@/lib/types";

type StatusPillProps = {
    status: RepairStatus;
};

export function StatusPill(props: StatusPillProps) {
  return (
    <span
      className={`${styles.pill} ${styles[props.status.toLowerCase()]}`}
    >
      {props.status}
    </span>
  );
}