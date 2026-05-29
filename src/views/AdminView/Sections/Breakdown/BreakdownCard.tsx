import { RepairEvent } from "@/lib/types";
import styles from "./BreakdownCard.module.css";
import { getMinuteFromTime } from "@/util/getMinuteFromTime";
import { StatusPill } from "@/components/pill/StatusPill";

type BreakdownCardProps = {
    repairEvent: RepairEvent;
    isSelected: boolean;
    onClick: () => void;    
};

export function BreakdownCard(props: BreakdownCardProps) {
  const { entries, status, id, asset, system } = props.repairEvent;

  const lastEntry = entries.at(-1);

  const getTimeText = () => {
    if (!lastEntry) return "No activity";
    if (status === "Completed") {
      return `${getMinuteFromTime( entries[0]!.at.time, lastEntry.at.time )} min total`;
    }
    return `Last tap ${lastEntry.at.timestamp}`;
  };

  const timeText = getTimeText();

  return (
    <div
      className={
        props.isSelected
          ? styles.cardSelected
          : styles.card
      }
      onClick={props.onClick}
    >
      <div className={styles.id}>{id}</div>

      <div className={styles.machine}>{asset}</div>

      <div className={styles.type}>{system}</div>

      <div
        className={`${styles.status} ${
          styles[status.toLowerCase()]
        }`}
      >
        <StatusPill status={status} />
      </div>

      <div className={styles.meta}>
        {timeText}
      </div>
    </div>
  );
}