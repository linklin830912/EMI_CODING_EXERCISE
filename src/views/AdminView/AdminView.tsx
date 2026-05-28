import styles from "./AdminView.module.css";

export function AdminView() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.label}>
          Active Repairs
        </div>

        <div className={styles.metric}>
          14
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.label}>
          Avg Repair Time
        </div>

        <div className={styles.metric}>
          2.4h
        </div>
      </div>

      <div className={styles.cardWide}>
        <div className={styles.label}>
          Recent Events
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>Operator</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>08:12</td>
              <td>Start breakdown</td>
              <td>J Smith</td>
            </tr>

            <tr>
              <td>08:44</td>
              <td>Arrived at machine</td>
              <td>M Clark</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}