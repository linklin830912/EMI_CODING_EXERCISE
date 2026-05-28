import { StatusPill } from "@/components/StatusPill/StatusPill";
import styles from "./RepairInfoSection.module.css";

export function RepairInfoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <div className={styles.row}>
          <h2 className={styles.title}>Active repair</h2>

          <StatusPill status="ACTIVE" />
        </div>

        <p className={styles.meta}>
          CAT 793F #12 · Hydraulic · Registered by J Smith
        </p>
      </div>

      <div className={styles.elapsed}>
        <div className={styles.label}>Elapsed</div>

        <div className={styles.time}>00:00</div>
      </div>
    </section>
  );
}