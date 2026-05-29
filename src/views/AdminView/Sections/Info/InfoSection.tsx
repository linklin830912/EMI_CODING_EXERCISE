import { RepairEvent } from "@/lib/types";
import styles from "./InfoSection.module.css";
type InfoSectionProps = {
    repairEvent: RepairEvent;
}

export function InfoSection(props: InfoSectionProps) { 
    return <section className={styles.info}>
        <div className={styles.infoHeader}>
            <h2>{props.repairEvent.asset} - {props.repairEvent.system}</h2>
            <span className={`${styles.badge} ${styles[props.repairEvent.status.toLocaleLowerCase()]}`}>
                {props.repairEvent.status}
            </span>
        </div>
    </section>;
}