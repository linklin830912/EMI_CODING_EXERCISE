import styles from "./TabletView.module.css";

import { RepairCard } from "../../components/RepairCard/RepairCard";
import { MilestoneButton } from "../../components/MilestoneButton/MilestoneButton";

export function TabletView() {
  return (
    <div className={styles.container}>
      <RepairCard />

      <section className={styles.section}>
        <h2 className={styles.heading}>
          Repair Milestones
        </h2>

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
          />

          <MilestoneButton
            number={3}
            label={"Problem\nIdentified"}
            colour="gold"
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
      </section>
    </div>
  );
}