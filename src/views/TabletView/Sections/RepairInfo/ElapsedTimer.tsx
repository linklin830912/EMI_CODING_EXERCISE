import { useEffect, useState } from "react";
import styles from "./ElapsedTimer.module.css";
import { useStore } from "@/store/RepairEventStore";
import { getTimeStamp } from "@/util/getTimeStamp";

export function ElapsedTimer() {
  const { state } = useStore();
  const [elapsed, setElapsed] = useState("00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      if (!state.activeStartTime) return;

      const formattedTime = getTimeStamp(state.activeStartTime);

      setElapsed(formattedTime.timestamp);
    }, 1000);

    return () => clearInterval(interval);
  }, [state.activeStartTime]);

  return (
    <div className={styles.elapsed}>
      <div className={styles.label}>Elapsed</div>
      <div className={styles.time}>{elapsed}</div>
    </div>
  );
}