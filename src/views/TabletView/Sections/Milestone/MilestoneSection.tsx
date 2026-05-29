import { MilestoneButton, MilestoneButtonColorsType } from "@/components/MilestoneButton/MilestoneButton";
import styles from "./MilestoneSection.module.css";
import { useState } from "react";

const MILESTONE_BUTTONS_SEQUENCE: readonly { title: string, color: MilestoneButtonColorsType }[] = [
  { title: 'Start Breakdown', color: 'red' },
  { title: 'Arrived At Machine', color: 'orange' },
  { title: 'Problem Identified', color: 'gold' },
  { title: 'Start Repair', color: 'orange' },
  { title: 'Repair Complete', color: 'green' },
  { title: 'Return To Service', color: 'green' },
] as const;

export function MilestoneSection() {
  const [currentStep, setCurrentStep] = useState(0);
  
  return (
    <section className={styles.section}>
      <div className={styles.grid}>

        {MILESTONE_BUTTONS_SEQUENCE.map((milestone, index) => <div
          className={styles.milestoneButtonWrapper} key={milestone.title}>
          <MilestoneButton
            key={milestone.title}
            number={index + 1}
            label={milestone.title}
            colour={milestone.color}
            completed={index < currentStep}
            disabled={index >= currentStep + 1}
            onClick={() => {
            setCurrentStep(index + 1)
          }}
        />
          <div className={styles.completedText}>
            Complete
          </div>
        </div>)}

      </div>
    </section>
  );
}