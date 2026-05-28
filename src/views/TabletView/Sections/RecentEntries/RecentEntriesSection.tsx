import styles from "./RecentEntries.module.css";

type EntryType = "FINDING" | "NOTE" | "ACTION" | "PART";

type Entry = {
  time: string;
  type: EntryType;
  text: string;
};

const entries: Entry[] = [
  {
    time: "08:22",
    type: "FINDING",
    text: "Hydraulic hose split near the hoist cylinder.",
  },
  {
    time: "08:27",
    type: "NOTE",
    text: "Calling M Perez over - needs two on this.",
  },
  {
    time: "08:45",
    type: "ACTION",
    text: "Hose replaced. System pressure tested.",
  },
  {
    time: "08:47",
    type: "PART",
    text: "HYD-HOSE-2456",
  },
];

export function RecentEntriesSection() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Recent entries</h3>

      <div className={styles.divider} />

      <div className={styles.list}>
        {entries.map((e, i) => (
          <div key={i} className={styles.row}>
            <div className={styles.time}>{e.time}</div>

            <div className={styles.type}>{e.type}</div>

            <div className={styles.text}>{e.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}