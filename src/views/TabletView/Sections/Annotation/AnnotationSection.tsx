import styles from "./AnnotationSection.module.css";

export function AnnotationSection() {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>
        Between milestones
      </h3>

      <div className={styles.actions}>
        <button disabled>Add Finding</button>
        <button disabled>Add Action</button>
        <button disabled>Add Part</button>
        <button disabled>Add Note</button>
      </div>

      <p className={styles.note}>
        All annotation actions remain disabled
        until the first milestone is recorded.
      </p>
    </section>
  );
}