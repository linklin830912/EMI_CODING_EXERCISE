import { defaultRepairEventProfile, MILESTONE_BUTTONS_SEQUENCE, MilestoneKind, RepairEvent, RepairEventProfile } from "@/lib/types";
import { AnnotationSection } from "./Sections/Annotation/AnnotationSection";
import { FooterSection } from "./Sections/Footer/FooterSection";
import { MilestoneSection } from "./Sections/Milestone/MilestoneSection";
import { RecentEntriesSection } from "./Sections/RecentEntries/RecentEntriesSection";
import { RepairInfoSection } from "./Sections/RepairInfo/RepairInfoSection";
import styles from "./TabletView.module.css";
import { useEffect, useState } from "react";
import { useStore } from "@/store/RepairEventStore";

type TabletViewProps = { repairEvent: RepairEvent };

export function TabletView({ repairEvent }: TabletViewProps) {
  const [ongoingMilestone, setOngoingMilestone] = useState<MilestoneKind | null>(null);  
  const {state, dispatch} = useStore();
  
  const handleStartNewRepair = () => {
      dispatch({
      type: "SET_CURRENT_REPAIR_PROFILE",
      payload: defaultRepairEventProfile(repairEvent.registeredBy)
      });
    
    setOngoingMilestone(null);
  };

  return (
    <div className={styles.container}>
      <RepairInfoSection repairEvent={repairEvent} />
      <MilestoneSection
        repairEvent={repairEvent}
        setOngoingMilestone={setOngoingMilestone}
      />
    <AnnotationSection
        registeredBy={repairEvent.registeredBy}
        ongoingMilestone={ongoingMilestone} />
      <RecentEntriesSection repairEventProfile={state.currentRepairEventProfile} />
      <FooterSection
        isComplete={state.currentRepairEventProfile.stages.every(stage => stage.completed)}
        handleStartNewRepair={handleStartNewRepair}
      />
    </div>
  );
}