import { useStore } from "@/store/RepairEventStore";
import styles from "./RecentEntries.module.css";
import { AnnotationEntry } from "@/lib/types";

export function RecentEntriesSection() {
    const { state } = useStore();
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Recent entries</h3>

      <div className={styles.divider} />

      <div className={styles.list}>
              {state.entries.filter((entry): entry is AnnotationEntry => entry.type === "annotation")
                  .map((entry, i) => (
            <div key={i} className={styles.row}>
                <div className={styles.time}>{entry.at}</div>

                <div className={styles.type}>{entry.kind}</div>

                <div className={styles.text}>{entry.text}</div>
            </div>
        ))}
      </div>
    </section>
  );
}