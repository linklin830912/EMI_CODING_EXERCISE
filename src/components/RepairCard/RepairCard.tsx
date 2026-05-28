import styles from "./RepairCard.module.css";
import { StatusPill } from "../StatusPill/StatusPill";

export function RepairCard() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.machine}>
            CAT 793F #12
          </h3>

          <p className={styles.issue}>
            Hydraulic hose split near hoist cylinder
          </p>
        </div>

        <StatusPill status="ACTIVE" />
      </div>

      <div className={styles.meta}>
        Registered by J Smith · 08:12
      </div>
    </div>
  );
}