import { useEffect, useState } from "react";
import styles from "./AnnotationModal.module.css";
import { AnnotationKind } from "@/lib/types";
import { useStore } from "@/store/RepairEventStore";
import { getTimeStamp } from "@/util/getTimeStamp";

type AnnotationModalProps = {
  open: boolean;
  kind: AnnotationKind;
  user: string;
  onClose: () => void;
};

export function AnnotationModal(props: AnnotationModalProps) {
    const [text, setText] = useState("");
    const { state, dispatch } = useStore();

  useEffect(() => {
    if (props.open) setText("");
  }, [props.open]);

  if (!props.open) return null;

  const handleSave = () => {
    if (!text.trim() || !state.activeStartTime) return;

      dispatch({
        type: "SAVE_ENTRY",
        payload: {
        type: "annotation",
        text: text.trim(),
        kind: props.kind,
        at: getTimeStamp(state.activeStartTime),
        by: props.user,}
      });

    props.onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          ANNOTATION
        </div>

        <div className={styles.title}>
          Add {props.kind}s
        </div>

        <textarea
          className={styles.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter details..."
        />

        <div className={styles.footer}>
          <button className={styles.cancel} onClick={props.onClose}>
            Cancel
          </button>

          <button
            className={styles.save}
            onClick={handleSave}
            disabled={!text.trim()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}