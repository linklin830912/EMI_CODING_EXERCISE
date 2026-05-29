import { useState } from "react";
import styles from "./AdminView.module.css";
import { BreakdownSection } from "./Sections/Breakdown/BreakdownSection";
import { DetailSection } from "./Sections/Detail/DetailSection";
import { InfoSection } from "./Sections/Info/InfoSection";
import { useStore } from "@/store/RepairEventStore";
import { RepairEvent } from "@/lib/types";
import { convertRepairEventProfileToEvent } from "@/util/convertRepairEventProfileToEvent";

type AdminViewProps = {
  repairEvent:RepairEvent
}
export function AdminView(props:AdminViewProps) {
  const [selectedRepairEventIndex, setSelectedRepairEventIndex] = useState<number>(0);
  const { state } = useStore();

  
  const allEvents = [convertRepairEventProfileToEvent(state.currentRepairEventProfile, props.repairEvent, "Active"),
    ...state.repairEvents];
  const selectedEvent = allEvents[selectedRepairEventIndex];
  
  return (
    <div className={styles.container}>
      <BreakdownSection
        repairEvents={allEvents}
        selectedRepairEventIndex={selectedRepairEventIndex}
        setSelectedRepairEventIndex={setSelectedRepairEventIndex}
      />
      {selectedEvent && <>
        <InfoSection repairEvent={selectedEvent} />
        <DetailSection repairEvent={selectedEvent} />
      </>}
              
    </div>
  );
}