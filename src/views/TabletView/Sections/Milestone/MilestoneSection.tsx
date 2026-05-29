import { MilestoneButton, MilestoneButtonColorsType } from "@/components/MilestoneButton/MilestoneButton";
import styles from "./MilestoneSection.module.css";
import {  MilestoneKind, RepairEventProfile } from "@/lib/types";
import { useStore } from "@/store/RepairEventStore";
import { getTimeStamp } from "@/util/getTimeStamp";

export const MILESTONE_BUTTONS_SEQUENCE: readonly { title: string, color: MilestoneButtonColorsType, kind: MilestoneKind }[] = [
  { title: 'Start Breakdown', color: 'red', kind: 'StartBreakdown' },
  { title: 'Arrived At Machine', color: 'orange', kind: 'ArrivedAtMachine' },
  { title: 'Problem Identified', color: 'gold', kind: 'ProblemIdentified' },
  { title: 'Start Repair', color: 'orange', kind: 'StartRepair' },
  { title: 'Repair Complete', color: 'green', kind: 'RepairComplete' },
  { title: 'Return To Service', color: 'green', kind: 'ReturnToService' },
] as const;

type MilestoneSectionProps = {
  repairEventProfile: RepairEventProfile;
  setRepairEventProfile: React.Dispatch<React.SetStateAction<RepairEventProfile>>;
  registeredBy: string;
  setOngoingMilestone: React.Dispatch<React.SetStateAction<MilestoneKind | null>>;
}
export function MilestoneSection(props: MilestoneSectionProps) {
  const { state, dispatch } = useStore();
  
  const handleMilestoneClick = (index: number) => {
    const updated = props.repairEventProfile?.stages.map((stage, i) => {
    if (i !== index || !state.activeStartTime) return stage;

      return {
        ...stage,
        timestamp: getTimeStamp(state.activeStartTime ?? Date.now()),
        completed: true,
        entries: [...stage.entries, {
          type: "milestone",
          kind: MILESTONE_BUTTONS_SEQUENCE[index]!.kind,
          at: getTimeStamp(state.activeStartTime),
          by: props.registeredBy
        }]
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

    props.setRepairEventProfile({
      step: props.repairEventProfile.step + 1,
      stages: updated as RepairEventProfile["stages"]
    });
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
            completed={index < props.repairEventProfile.step}
            disabled={index >= props.repairEventProfile.step + 1}
            onClick={() => {
              handleMilestoneClick(index)
            }}
          />
          {props.repairEventProfile && props.repairEventProfile.stages[index]?.completed && <div className={styles.text}>
            <div className={styles.completedText}>
              {props.repairEventProfile.stages[index]?.timestamp}
            </div>
            <div className={styles.completedText}>
              {props.repairEventProfile.stages[index]?.registeredBy}
            </div>
          </div>}
        </div>)}

      </div>
    </section>
  );
}