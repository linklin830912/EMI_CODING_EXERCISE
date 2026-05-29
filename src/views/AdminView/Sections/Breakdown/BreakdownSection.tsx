import { useStore } from "@/store/RepairEventStore";
import styles from "./BreakdownSection.module.css";
import { BreakdownCard } from "./BreakdownCard";

type BreakdownSectionProps = {
  selectedRepairEventIndex: number;
  setSelectedRepairEventIndex: (index: number) => void;
}
export function BreakdownSection(props: BreakdownSectionProps) { 
  const { state } = useStore();
    return <section className={styles.breakdowns}>
      <h2 className={styles.sectionTitle}>Breakdowns</h2>

      <div className={styles.breakdownGrid}>        

      {state.repairEvents.map((event, index) =>
        <BreakdownCard repairEvent={event} key={index}
          isSelected={index === props.selectedRepairEventIndex}
          onClick={() => props.setSelectedRepairEventIndex(index)} />
      )}

        </div>
      </section>;
}