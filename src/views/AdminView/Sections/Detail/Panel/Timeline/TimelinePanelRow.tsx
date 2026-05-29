import { Entry, MILESTONE_TITLE_BY_KIND } from "@/lib/types";
import styles from "./TimelinePanelRow.module.css";
type TimelinePanelRowProps = {
    entry:Entry
}

export function TimelinePanelRow(props:TimelinePanelRowProps) {
    return <div className={styles.row}>
        <span>{props.entry.at.timestamp}</span>
        <span>{MILESTONE_TITLE_BY_KIND[props.entry.kind]}</span>
        <span>{props.entry.type==="annotation" ?props.entry.text : props.entry.by}</span>
      </div>
}