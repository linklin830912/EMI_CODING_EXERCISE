import { MilestoneKind, RepairEvent, RepairEventProfile } from "@/lib/types";
import { AnnotationSection } from "./Sections/Annotation/AnnotationSection";
import { FooterSection } from "./Sections/Footer/FooterSection";
import { MILESTONE_BUTTONS_SEQUENCE, MilestoneSection } from "./Sections/Milestone/MilestoneSection";
import { RecentEntriesSection } from "./Sections/RecentEntries/RecentEntriesSection";
import { RepairInfoSection } from "./Sections/RepairInfo/RepairInfoSection";
import styles from "./TabletView.module.css";
import { useState } from "react";

type TabletViewProps = { repairEvent: RepairEvent };

const defaultRepairEventProfile = (registeredBy: string): RepairEventProfile => {return{
    step: 0,
    stages: MILESTONE_BUTTONS_SEQUENCE.map(seq => ({
    registeredBy,
    milestone: seq.kind,
    timestamp: {timestamp: "", time:0},
    completed: false,
    entries: [],
  }))}};

export function TabletView({ repairEvent }: TabletViewProps) {
  const [ongoingMilestone, setOngoingMilestone] = useState<MilestoneKind | null>(null);
  const [repairEventProfile, setRepairEventProfile] = useState<RepairEventProfile>(
    () => defaultRepairEventProfile(repairEvent.registeredBy)
  );

    const handleStartNewRepair = () => {
    setRepairEventProfile(defaultRepairEventProfile(repairEvent.registeredBy));
    setOngoingMilestone(null);
  };

  return (
    <div className={styles.container}>
      <RepairInfoSection repairEvent={repairEvent} />
      <MilestoneSection
        repairEvent={repairEvent}
        setOngoingMilestone={setOngoingMilestone}
        repairEventProfile={repairEventProfile}
        setRepairEventProfile={setRepairEventProfile}
      />
    <AnnotationSection
        setRepairEventProfile={setRepairEventProfile}
        repairEventProfile={repairEventProfile}
        registeredBy={repairEvent.registeredBy}
        ongoingMilestone={ongoingMilestone} />
      <RecentEntriesSection repairEventProfile={repairEventProfile} />
      <FooterSection
        isComplete={repairEventProfile.stages.every(stage => stage.completed)}
        handleStartNewRepair={handleStartNewRepair}
      />
    </div>
  );
}