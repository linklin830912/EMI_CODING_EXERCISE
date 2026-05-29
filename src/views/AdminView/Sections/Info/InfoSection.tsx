import { RepairEvent } from "@/lib/types";
import styles from "./InfoSection.module.css";
import { StatusPill } from "@/components/pill/StatusPill";
type InfoSectionProps = {
    repairEvent: RepairEvent;
}

export function InfoSection(props: InfoSectionProps) { 
    return <section className={styles.info}>
        <div className={styles.infoHeader}>
            <h2>{props.repairEvent.asset} - {props.repairEvent.system}</h2>
            <StatusPill status={props.repairEvent.status}/>
        </div>
    </section>;
}