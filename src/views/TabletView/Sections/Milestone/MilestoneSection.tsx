import { MilestoneButton, MilestoneButtonColorsType } from "@/components/MilestoneButton/MilestoneButton";
import styles from "./MilestoneSection.module.css";
import { useState } from "react";
import { AnnotationEntry, MilestoneKind } from "@/lib/types";
import { useStore } from "@/store/RepairEventStore";
import { getTimeStamp } from "@/util/getTimeStamp";

const MILESTONE_BUTTONS_SEQUENCE: readonly { title: string, color: MilestoneButtonColorsType, kind: MilestoneKind }[] = [
  { title: 'Start Breakdown', color: 'red', kind: 'StartBreakdown' },
  { title: 'Arrived At Machine', color: 'orange', kind: 'ArrivedAtMachine' },
  { title: 'Problem Identified', color: 'gold', kind: 'ProblemIdentified' },
  { title: 'Start Repair', color: 'orange', kind: 'StartRepair' },
  { title: 'Repair Complete', color: 'green', kind: 'RepairComplete' },
  { title: 'Return To Service', color: 'green', kind: 'ReturnToService' },
] as const;

type RepairEventStage = {
  registeredBy: string;
  milestone: MilestoneKind;
  timestamp: string;
  completed: boolean;
  annotationEntries: AnnotationEntry[]
};
type MilestoneSectionProps = {
  registeredBy: string;
  setOngoingMilestone: React.Dispatch<React.SetStateAction<MilestoneKind | null>>;
}
export function MilestoneSection(props: MilestoneSectionProps) {
  const { state, dispatch } = useStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [repairEventProfile, setRepairEventProfile] = useState<RepairEventStage[]>(
    () =>
      MILESTONE_BUTTONS_SEQUENCE.map(seq => ({
        registeredBy: props.registeredBy,
        milestone: seq.kind,
        timestamp: "",
        completed: false,
        annotationEntries: [],
      }))
  );  
  
  const handleMilestoneClick = (index: number) => {
    const updated = repairEventProfile.map((stage, i) => {
    if (i !== index) return stage;

      return {
        ...stage,
        timestamp: getTimeStamp(state.activeStartTime ?? Date.now()),
        completed: true,
      };
    });

    dispatch({
      type: "SAVE_ENTRY",
      payload: {
        type: "milestone",
        kind: MILESTONE_BUTTONS_SEQUENCE[index]!.kind,
        at: getTimeStamp(state.activeStartTime!),
        by: props.registeredBy
      }
    });

    setRepairEventProfile(updated);
    setCurrentStep(prev => prev + 1);
    props.setOngoingMilestone(index < MILESTONE_BUTTONS_SEQUENCE.length - 1 ? MILESTONE_BUTTONS_SEQUENCE[index]!.kind : null);
  };
  
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
              handleMilestoneClick(index)
            }}
          />
          {repairEventProfile[index]?.completed && <div className={styles.text}>
            <div className={styles.completedText}>
              {repairEventProfile[index]?.timestamp}
            </div>
            <div className={styles.completedText}>
              {repairEventProfile[index]?.registeredBy}
            </div>
          </div>}
        </div>)}

      </div>
    </section>
  );
}