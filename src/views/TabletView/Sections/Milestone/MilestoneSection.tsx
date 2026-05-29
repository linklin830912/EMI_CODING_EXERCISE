import { MilestoneButton } from "@/components/MilestoneButton/MilestoneButton";
import styles from "./MilestoneSection.module.css";
import {  MILESTONE_BUTTONS_SEQUENCE, MilestoneKind, RepairEvent, RepairEventProfile, RepairEventStage } from "@/lib/types";
import { useStore } from "@/store/RepairEventStore";
import { getTimeStamp } from "@/util/getTimeStamp";

type MilestoneSectionProps = {
  repairEvent: RepairEvent;
  setOngoingMilestone: React.Dispatch<React.SetStateAction<MilestoneKind | null>>;
}
export function MilestoneSection(props: MilestoneSectionProps) {
  const { state, dispatch } = useStore();
  
  const handleMilestoneClick = (index: number) => {
    const updated: RepairEventStage[] = state.currentRepairEventProfile?.stages.map((stage, i) => {
    if (i !== index || !state.activeStartTime) return stage;

      return {
        ...stage,
        at: {timestamp: getTimeStamp(state.activeStartTime), time: state.activeStartTime},
        completed: true,
        entries: [...stage.entries, {
          type: "milestone",
          kind: MILESTONE_BUTTONS_SEQUENCE[index]!.kind,
          at: { timestamp: getTimeStamp(state.activeStartTime), time: state.activeStartTime },
          by: props.repairEvent.registeredBy
        }]
      };
    });

      dispatch({
          type: "SET_CURRENT_REPAIR_PROFILE",
          payload: {
          step: state.currentRepairEventProfile.step + 1,
          stages: updated as RepairEventProfile["stages"]
        }
      });

    props.setOngoingMilestone(index < MILESTONE_BUTTONS_SEQUENCE.length - 1 ? MILESTONE_BUTTONS_SEQUENCE[index]!.kind : null);
    
    if (state.currentRepairEventProfile.step === MILESTONE_BUTTONS_SEQUENCE.length - 1) {
      dispatch({
      type: "SAVE_REPAIR_EVENT",
      payload: {
        id: props.repairEvent.id,
        asset: props.repairEvent.asset,
        system: props.repairEvent.system,
        registeredBy: props.repairEvent.registeredBy,
        status: "Completed",
        registeredAt: state.currentRepairEventProfile.stages[0]?.at,
        entries: []
      } as RepairEvent
    }); 
    }    
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
            completed={index < state.currentRepairEventProfile.step}
            disabled={index >= state.currentRepairEventProfile.step + 1}
            onClick={() => {
              handleMilestoneClick(index)
            }}
          />
          {state.currentRepairEventProfile && state.currentRepairEventProfile.stages[index]?.completed && <div className={styles.text}>
            <div className={styles.completedText}>
              {state.currentRepairEventProfile.stages[index]?.at.timestamp}
            </div>
            <div className={styles.completedText}>
              {state.currentRepairEventProfile.stages[index]?.registeredBy}
            </div>
          </div>}
        </div>)}

      </div>
    </section>
  );
}