import styles from "./BreakdownSection.module.css";
import { BreakdownCard } from "./BreakdownCard";
import { RepairEvent } from "@/lib/types";

type BreakdownSectionProps = {
  repairEvents: RepairEvent[];
  selectedRepairEventIndex: number;
  setSelectedRepairEventIndex: (index: number) => void;
}
export function BreakdownSection(props: BreakdownSectionProps) { 
    return <section className={styles.breakdowns}>
      <h2 className={styles.sectionTitle}>Breakdowns</h2>

      <div className={styles.breakdownGrid}>        

      {props.repairEvents.map((event, index) =>
        <BreakdownCard repairEvent={event} key={index}
          isSelected={index === props.selectedRepairEventIndex}
          onClick={() => props.setSelectedRepairEventIndex(index)} />
      )}

        </div>
      </section>;
}