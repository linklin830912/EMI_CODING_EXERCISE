import { GOOD_METRIC, MID_METRIC, RepairEvent } from "@/lib/types";
import styles from "./AutoCalcPanel.module.css";
import { getMinuteFromTime } from "@/util/getMinuteFromTime";

type AutoCalcPanelProps = {
  repairEvent: RepairEvent;
};

type Metric = {
  label: string;
  value: number;
  isTotal?: number;
};

export function AutoCalcPanel(props: AutoCalcPanelProps) {
  const milestoneEntries = props.repairEvent.entries.filter(
    (entry) => entry.type === "milestone"
  );

  const getDuration = (startIndex: number,endIndex: number):number => {
    const start = milestoneEntries[startIndex];
    const end = milestoneEntries[endIndex];
    if (!start || !end) return -1;

    return getMinuteFromTime(
      start.at.time,
      end.at.time
    );
  };

  const metrics: Metric[] = [
    { label: "Response time", value: getDuration(0, 1) },
    { label: "Diagnosis time", value: getDuration(1, 2) },
    { label: "Repair time", value: getDuration(3, 4) },
    { label: "Total downtime", value: getDuration(0, 5) },
  ];

  const getMetricStatus = (value: number) => {
    if (value === -1) {
      return "undone";
    } else if (value < GOOD_METRIC) {
      return "good";
    } else if (value < MID_METRIC) {
      return "ok";
    }
    return "bad";
};

  return (
    <div className={styles.calcPanel}>
      <div className={styles.calcBox}>
        <h3>Auto-calculated</h3>

        {metrics.map((metric) => (
          <div key={metric.label} className={styles.metric} >
            <span>{metric.label}</span>

            <strong className={metric.isTotal? styles.total : styles[getMetricStatus(metric.value)]}>
              {metric.value !== -1 ? `${metric.value} min`: "-"}
            </strong>
          </div>
        ))}

      </div>
    </div>
  );
}