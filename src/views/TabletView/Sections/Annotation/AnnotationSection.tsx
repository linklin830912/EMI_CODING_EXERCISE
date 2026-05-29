import { AnnotationKind, MilestoneKind } from "@/lib/types";
import styles from "./AnnotationSection.module.css";
import { AnnotationModal } from "./AnnotationModal";
import { useState } from "react";

const ANNOTATION_BUTTONS: readonly { title: string, kind: AnnotationKind }[] = [
  { title: 'Findings', kind: 'Finding' },
  { title: 'Actions', kind: 'Action' },
  { title: 'Parts', kind: 'Part' },
  { title: 'Notes', kind: 'Note' },
] as const;

type AnnotationSectionProps = {
    ongoingMilestone: MilestoneKind | null;
};
export function AnnotationSection(props: AnnotationSectionProps) {
  const [annotationKind, setAnnotationKind] = useState<AnnotationKind | null>(null);

  const handleOpenModal = (kind: AnnotationKind) => {
    setAnnotationKind(kind);
  };

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
        <AnnotationModal open={true} kind={annotationKind} user="John Doe"
          onClose={() => setAnnotationKind(null)} />
      )}

    </section>
  );
}