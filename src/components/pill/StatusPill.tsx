import styles from "./StatusPill.module.css";
import { RepairStatus } from "@/lib/types";

type Props = {
    status: RepairStatus;
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