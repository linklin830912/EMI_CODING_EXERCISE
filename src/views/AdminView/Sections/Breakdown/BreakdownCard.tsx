import { RepairEvent } from "@/lib/types";
import styles from "./BreakdownCard.module.css";
import { getMinuteFromTime } from "@/util/getMinuteFromTime";

type BreakdownCardProps = {
    repairEvent: RepairEvent;
    isSelected: boolean;
    onClick: () => void;    
};

export function BreakdownCard({
    repairEvent,
    isSelected,
    onClick
}: BreakdownCardProps) {
  const entries = repairEvent.entries;
  const lastEntry = entries.at(-1);

  const timeText = !lastEntry
    ? "No activity"
    : repairEvent.status === "Completed"
      ? `${getMinuteFromTime(
          entries[0]!.at.time,
          lastEntry.at.time
        )} min total`
      : `Last tap ${lastEntry.at.timestamp}`;

  return (
    <div className={isSelected ? styles.cardSelected : styles.card} onClick={onClick}>
      <div className={styles.id}>
        {repairEvent.id}
      </div>

      <div className={styles.machine}>
        {repairEvent.asset}
      </div>

      <div className={styles.type}>
        {repairEvent.system}
      </div>

      <div className={`${styles.status} ${ styles[repairEvent.status.toLowerCase()] }`}>
        {repairEvent.status}
        </div>

      <div className={styles.meta}>
        {timeText}
      </div>
    </div>
  );
}