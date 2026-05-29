import { RepairEvent } from "@/lib/types";
import styles from "./TimelinePanel.module.css";
import { TimelinePanelRow } from "./TimelinePanelRow";

type TimelinePanelProps = {
      repairEvent: RepairEvent;
}
export function TimelinePanel(props: TimelinePanelProps) {
  return (
    <div className={styles.timelinePanel}>
      <div className={styles.tableHeader}>
        <span>TIME</span>
        <span>EVENT</span>
        <span>DETAIL</span>
      </div>

      {props.repairEvent.entries.map((entry, index) => <TimelinePanelRow
        key={index}
        entry={entry} />)}
    </div>
  );
}