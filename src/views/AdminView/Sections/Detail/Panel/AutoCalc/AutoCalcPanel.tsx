import { RepairEvent } from "@/lib/types";
import styles from "./AutoCalcPanel.module.css";
import { getMinuteFromTime } from "@/util/getMinuteFromTime";

type AutoCalcPanelProps = {
  repairEvent: RepairEvent;
};

type Metric = {
  label: string;
  value?: number;
  emphasize?: boolean;
};

export function AutoCalcPanel({
  repairEvent,
}: AutoCalcPanelProps) {
  const milestoneEntries = repairEvent.entries.filter(
    (entry) => entry.type === "milestone"
  );

  const getDuration = (
    startIndex: number,
    endIndex: number
  ) => {
    const start = milestoneEntries[startIndex];
    const end = milestoneEntries[endIndex];

    if (!start || !end) return undefined;

    return getMinuteFromTime(
      start.at.time,
      end.at.time
    );
  };

  const metrics: Metric[] = [
    {
      label: "Response time",
      value: getDuration(0, 1),
    },
    {
      label: "Diagnosis time",
      value: getDuration(1, 2),
    },
    {
      label: "Repair time",
      value: getDuration(3, 4),
    },
    {
      label: "Total downtime",
      value: getDuration(0, 5),
      emphasize: true,
    },
  ];

  const getMetricStatus = (
    value?: number
  ) => {
    if (value === undefined) {
      return "undone";
    }

    if (value < 10) {
      return "good";
    }

    if (value < 30) {
      return "ok";
    }

    return "bad";
  };

  return (
    <div className={styles.calcPanel}>
      <div className={styles.calcBox}>
        <h3>Auto-calculated</h3>

        {metrics.map((metric) => (
          <div
            key={metric.label}
            className={styles.metric}
          >
            <span>{metric.label}</span>

            <strong
              className={
                metric.emphasize
                  ? styles.total
                  : styles[
                      getMetricStatus(
                        metric.value
                      )
                    ]
              }
            >
              {metric.value !== undefined
                ? `${metric.value} min`
                : "-"}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}