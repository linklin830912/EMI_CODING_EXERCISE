import { useStore } from "@/store/RepairEventStore";
import styles from "./RecentEntries.module.css";
import { AnnotationEntry, RepairEventProfile } from "@/lib/types";
import { useMemo } from "react";

type RecentEntriesSectionProps = {
    repairEventProfile: RepairEventProfile;
};
export function RecentEntriesSection(props: RecentEntriesSectionProps) {

const annotationEntries = useMemo<AnnotationEntry[]>(() => {
    return props.repairEventProfile?.stages
        ?.flatMap(stage => stage.entries)
        .filter(entry => entry.type === "annotation") as AnnotationEntry[];
  }, [props.repairEventProfile]);

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Recent entries</h3>

      <div className={styles.divider} />

      <div className={styles.list}>
              {annotationEntries.map((entry, i) => (
            <div key={i} className={styles.row}>
                <div className={styles.time}>{entry.at.timestamp}</div>

                <div className={styles.type}>{entry.kind}</div>

                <div className={styles.text}>{entry.text}</div>
            </div>
        ))}
      </div>
    </section>
  );
}