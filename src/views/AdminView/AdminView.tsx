import { useState } from "react";
import styles from "./AdminView.module.css";
import { BreakdownSection } from "./Sections/Breakdown/BreakdownSection";
import { DetailSection } from "./Sections/Detail/DetailSection";
import { InfoSection } from "./Sections/Info/InfoSection";
import { useStore } from "@/store/RepairEventStore";

export function AdminView() {
  const [selectedRepairEventIndex, setSelectedRepairEventIndex] = useState<number>(0);
  const { state } = useStore();
  return (
    <div className={styles.container}>
      <BreakdownSection
        selectedRepairEventIndex={selectedRepairEventIndex}
        setSelectedRepairEventIndex={setSelectedRepairEventIndex}
      />
      {state.repairEvents[selectedRepairEventIndex] && <>
        <InfoSection repairEvent={state.repairEvents[selectedRepairEventIndex]} />
        <DetailSection repairEvent={state.repairEvents[selectedRepairEventIndex]} />
      </>}
              
    </div>
  );
}