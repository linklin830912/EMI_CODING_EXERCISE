import styles from "./AutoCalcPanel.module.css";

export function AutoCalcPanel() {
  return (
    <div className={styles.calcPanel}>
      <div className={styles.calcBox}>
        <h3>Auto-calculated</h3>

        <div className={styles.metric}>
          <span>Response time</span>
          <strong className={styles.good}>6 min (good)</strong>
        </div>

        <div className={styles.metric}>
          <span>Diagnosis time</span>
          <strong className={styles.good}>7 min (good)</strong>
        </div>

        <div className={styles.metric}>
          <span>Repair time</span>
          <strong className={styles.ok}>32 min (ok)</strong>
        </div>

        <div className={styles.metric}>
          <span>Total downtime</span>
          <strong className={styles.bad}>53 min (bad)</strong>
        </div>
      </div>
    </div>
  );
}