import { AnnotationSection } from "./Sections/Annotation/AnnotationSection";
import { FooterSection } from "./Sections/Footer/FooterSection";
import { MilestoneSection } from "./Sections/Milestone/MilestoneSection";
import { RecentEntriesSection } from "./Sections/RecentEntries/RecentEntriesSection";
import { RepairInfoSection } from "./Sections/RepairInfo/RepairInfoSection";
import styles from "./TabletView.module.css";


export function TabletView() {
  return (
    <div className={styles.container}>
        <RepairInfoSection />

        <MilestoneSection />

        <AnnotationSection />
        <RecentEntriesSection/>

        <FooterSection />
    </div>
  );
}