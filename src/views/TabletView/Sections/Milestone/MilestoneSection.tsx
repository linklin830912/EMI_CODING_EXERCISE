import { MilestoneButton } from "@/components/MilestoneButton/MilestoneButton";
import styles from "./MilestoneSection.module.css";


export function MilestoneSection() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <MilestoneButton
          number={1}
          label={"Start\nBreakdown"}
          colour="red"
        />

        <MilestoneButton
          number={2}
          label={"Arrived At\nMachine"}
          colour="orange"
          disabled
        />

        <MilestoneButton
          number={3}
          label={"Problem\nIdentified"}
          colour="gold"
          disabled
        />

        <MilestoneButton
          number={4}
          label={"Start\nRepair"}
          colour="orange"
          disabled
        />

        <MilestoneButton
          number={5}
          label={"Repair\nComplete"}
          colour="green"
          disabled
        />

        <MilestoneButton
          number={6}
          label={"Return To\nService"}
          colour="green"
          disabled
        />
      </div>

      <p className={styles.helper}>
        Only the next milestone is tappable.
      </p>
    </section>
  );
}