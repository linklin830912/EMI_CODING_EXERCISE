import { AnnotationKind, Entry, MilestoneKind, RepairEventProfile } from "@/lib/types";
import styles from "./AnnotationSection.module.css";
import { AnnotationModal } from "./AnnotationModal";
import { useState } from "react";
import { useStore } from "@/store/RepairEventStore";

const ANNOTATION_BUTTONS: readonly { title: string, kind: AnnotationKind }[] = [
  { title: 'Findings', kind: 'Finding' },
  { title: 'Actions', kind: 'Action' },
  { title: 'Parts', kind: 'Part' },
  { title: 'Notes', kind: 'Note' },
] as const;

type AnnotationSectionProps = {
    // repairEventProfile: RepairEventProfile;
    // setRepairEventProfile: React.Dispatch<React.SetStateAction<RepairEventProfile>>;
    registeredBy: string;
    ongoingMilestone: MilestoneKind | null;
};
export function AnnotationSection(props: AnnotationSectionProps) {
  const { state, dispatch } = useStore();
  const [annotationKind, setAnnotationKind] = useState<AnnotationKind | null>(null);

  const handleOpenModal = (kind: AnnotationKind) => {
    setAnnotationKind(kind);
  };

  const handleModalSave = (entry:Entry) => {
    const updateStages = state.currentRepairEventProfile.stages.map(stage => {
                if (stage.milestone === props.ongoingMilestone) {
                  return {
                    ...stage,
                    entries: [...stage.entries, entry],
                  };
                }
                return stage;
    });
    const profile = { ...state.currentRepairEventProfile, stages: updateStages } as RepairEventProfile
    dispatch({
      type: "SET_CURRENT_REPAIR_PROFILE",
      payload: profile
    });
  }

  return (
    <section className={styles.section}>

      <h3 className={styles.heading}>Annotations</h3>

      <div className={styles.actions}>{ANNOTATION_BUTTONS.map((btn) => (
        <button key={btn.title} disabled={!props.ongoingMilestone}
          onClick={() => handleOpenModal(btn.kind)}>
          Add {btn.kind}s
        </button>
      ))}
      </div>

      {annotationKind && (
        <AnnotationModal
          open={true} kind={annotationKind} user="John Doe"
          onSave={handleModalSave}
          onClose={() => setAnnotationKind(null)} />
      )}

    </section>
  );
}