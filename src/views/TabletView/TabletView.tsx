import { MilestoneKind, RepairEvent } from "@/lib/types";
import { AnnotationSection } from "./Sections/Annotation/AnnotationSection";
import { FooterSection } from "./Sections/Footer/FooterSection";
import { MilestoneSection } from "./Sections/Milestone/MilestoneSection";
import { RecentEntriesSection } from "./Sections/RecentEntries/RecentEntriesSection";
import { RepairInfoSection } from "./Sections/RepairInfo/RepairInfoSection";
import styles from "./TabletView.module.css";
import { useState } from "react";

type TabletViewProps = {repairEvent: RepairEvent}
export function TabletView(props: TabletViewProps) {
    
    const [ongoingMilestone, setOngoingMilestone] = useState<MilestoneKind | null>(null);

  return (
    <div className={styles.container}>
        <RepairInfoSection repairEvent={props.repairEvent} />

        <MilestoneSection registeredBy={props.repairEvent.registeredBy} setOngoingMilestone={setOngoingMilestone} />

        <AnnotationSection ongoingMilestone={ongoingMilestone} />
          
        <RecentEntriesSection/>

        <FooterSection />
    </div>
  );
}