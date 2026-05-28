import styles from "./BreakdownSection.module.css";
export function BreakdownSection() { 
    return <section className={styles.breakdowns}>
        <h2 className={styles.sectionTitle}>Breakdowns</h2>

        <div className={styles.breakdownGrid}>
          <div className={styles.cardSelected}>
            <div className={styles.id}>RE-2401</div>
            <div className={styles.machine}>CAT 793F #12</div>
            <div className={styles.type}>Hydraulic</div>
            <div className={styles.status}>COMPLETED</div>
            <div className={styles.meta}>53 min total</div>
          </div>

          <div className={styles.card}>
            <div className={styles.id}>RE-2402</div>
            <div className={styles.machine}>KOM 980E #07</div>
            <div className={styles.type}>Drivetrain</div>
            <div className={styles.status}>COMPLETED</div>
            <div className={styles.meta}>146 min total</div>
          </div>

          <div className={styles.card}>
            <div className={styles.id}>RE-2403</div>
            <div className={styles.machine}>LIE R 9400 #03</div>
            <div className={styles.type}>Electrical</div>
            <div className={styles.statusStopped}>STOPPED</div>
            <div className={styles.meta}>last tap 14:31</div>
          </div>
        </div>
      </section>;
}