import styles from "./DetailSection.module.css";
import { AutoCalcPanel } from "./Panel/AutoCalc/AutoCalcPanel";
import { TimelinePanel } from "./Panel/Timeline/TimelinePanel";
export function DetailSection() { 
    return <section className={styles.detail}>
        <TimelinePanel />
        
        <AutoCalcPanel />
      </section >;
}