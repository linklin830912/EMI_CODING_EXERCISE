import styles from "./AdminView.module.css";
import { BreakdownSection } from "./Sections/Breakdown/BreakdownSection";
import { DetailSection } from "./Sections/Detail/DetailSection";
import { InfoSection } from "./Sections/Info/InfoSection";

export function AdminView() {
  return (
    <div className={styles.container}>
        <BreakdownSection />
        <InfoSection />      
        <DetailSection />      
    </div>
  );
}