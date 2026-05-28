import styles from "./TimelinePanel.module.css";

export function TimelinePanel() {
  return (
    <div className={styles.timelinePanel}>
      <div className={styles.tableHeader}>
        <span>TIME</span>
        <span>EVENT</span>
        <span>DETAIL</span>
      </div>

      <div className={styles.row}>
        <span>08:12</span>
        <span>Breakdown reported</span>
        <span>J Smith</span>
      </div>

      <div className={styles.row}>
        <span>08:18</span>
        <span>Technician arrived</span>
        <span>J Smith</span>
      </div>

      <div className={styles.row}>
        <span>08:22</span>
        <span>Finding</span>
        <span>Hydraulic leak</span>
      </div>

      <div className={styles.row}>
        <span>08:25</span>
        <span>Problem identified</span>
        <span>Hose rupture</span>
      </div>

      <div className={styles.row}>
        <span>08:27</span>
        <span>Note</span>
        <span>Calling M Perez</span>
      </div>

      <div className={styles.row}>
        <span>08:30</span>
        <span>Repair started</span>
        <span>M Perez</span>
      </div>

      <div className={styles.row}>
        <span>08:45</span>
        <span>Action</span>
        <span>Hose replaced</span>
      </div>

      <div className={styles.row}>
        <span>08:47</span>
        <span>Part</span>
        <span>HYD-HOSE-2456</span>
      </div>

      <div className={styles.row}>
        <span>09:02</span>
        <span>Complete</span>
        <span>Pressure tested</span>
      </div>

      <div className={styles.row}>
        <span>09:05</span>
        <span>Return</span>
        <span>Released</span>
      </div>
    </div>
  );
}