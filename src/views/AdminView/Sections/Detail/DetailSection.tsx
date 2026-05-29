import { RepairEvent } from "@/lib/types";
import styles from "./DetailSection.module.css";
import { AutoCalcPanel } from "./Panel/AutoCalc/AutoCalcPanel";
import { TimelinePanel } from "./Panel/Timeline/TimelinePanel";

type DetailSectionProps = {
      repairEvent: RepairEvent;
}
  
export function DetailSection(props: DetailSectionProps) { 
    return <section className={styles.detail}>
        <TimelinePanel repairEvent={props.repairEvent } />
        
        <AutoCalcPanel repairEvent={props.repairEvent }/>
      </section >;
}