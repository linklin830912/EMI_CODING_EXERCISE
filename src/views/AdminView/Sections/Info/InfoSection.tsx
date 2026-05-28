import styles from "./InfoSection.module.css";
export function InfoSection() { 
    return <section className={styles.info}>
        <div className={styles.infoHeader}>
            <h2>CAT 793F #12 - Hydraulic</h2>
            <span className={styles.badge}>COMPLETED</span>
        </div>

        <p className={styles.subtext}>
            Auto-generated from milestone taps. No technician typing required.
        </p>
    </section>;
}