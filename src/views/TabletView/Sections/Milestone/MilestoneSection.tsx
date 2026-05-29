import { MilestoneButton } from "@/components/MilestoneButton/MilestoneButton";
import styles from "./MilestoneSection.module.css";
import {  MILESTONE_BUTTONS_SEQUENCE, MilestoneKind, RepairEvent, RepairEventProfile, RepairEventStage } from "@/lib/types";
import { useStore } from "@/store/RepairEventStore";
import { getTimeStamp } from "@/util/getTimeStamp";

type MilestoneSectionProps = {
  repairEventProfile: RepairEventProfile;
  setRepairEventProfile: React.Dispatch<React.SetStateAction<RepairEventProfile>>;
  repairEvent: RepairEvent;
  setOngoingMilestone: React.Dispatch<React.SetStateAction<MilestoneKind | null>>;
}
export function MilestoneSection(props: MilestoneSectionProps) {
  const { state, dispatch } = useStore();
  
  const handleMilestoneClick = (index: number) => {
    const updated: RepairEventStage[] = props.repairEventProfile?.stages.map((stage, i) => {
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

    props.setRepairEventProfile({
      step: props.repairEventProfile.step + 1,
      stages: updated as RepairEventProfile["stages"]
    });
    props.setOngoingMilestone(index < MILESTONE_BUTTONS_SEQUENCE.length - 1 ? MILESTONE_BUTTONS_SEQUENCE[index]!.kind : null);
    
    if (props.repairEventProfile.step === MILESTONE_BUTTONS_SEQUENCE.length - 1) {
      dispatch({
      type: "SAVE_REPAIR_EVENT",
      payload: {
        id: props.repairEvent.id,
        asset: props.repairEvent.asset,
        system: props.repairEvent.system,
        registeredBy: props.repairEvent.registeredBy,
        status: "Completed",
        registeredAt: props.repairEventProfile.stages[0]?.at,
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
            completed={index < props.repairEventProfile.step}
            disabled={index >= props.repairEventProfile.step + 1}
            onClick={() => {
              handleMilestoneClick(index)
            }}
          />
          {props.repairEventProfile && props.repairEventProfile.stages[index]?.completed && <div className={styles.text}>
            <div className={styles.completedText}>
              {props.repairEventProfile.stages[index]?.at.timestamp}
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