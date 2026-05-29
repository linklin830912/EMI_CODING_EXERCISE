import { RepairEvent, TimeInfo } from "@/lib/types";
import { AnnotationSection } from "./Sections/Annotation/AnnotationSection";
import { FooterSection } from "./Sections/Footer/FooterSection";
import { MilestoneSection } from "./Sections/Milestone/MilestoneSection";
import { RecentEntriesSection } from "./Sections/RecentEntries/RecentEntriesSection";
import { RepairInfoSection } from "./Sections/RepairInfo/RepairInfoSection";
import styles from "./TabletView.module.css";

type TabletViewProps = {repairEvent: RepairEvent}
export function TabletView(props: TabletViewProps) {
    

  return (
    <div className={styles.container}>
        <RepairInfoSection repairEvent={props.repairEvent} />

        <MilestoneSection />

        <AnnotationSection />
        <RecentEntriesSection/>

        <FooterSection />
    </div>
  );
}