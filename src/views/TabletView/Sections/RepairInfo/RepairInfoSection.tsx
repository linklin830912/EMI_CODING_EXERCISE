import { StatusPill } from "@/components/StatusPill/StatusPill";
import { RepairEvent } from "@/lib/types";
import styles from "./RepairInfoSection.module.css";
import { ElapsedTimer} from "./ElapsedTimer";

type RepairInfoSectionProps = { repairEvent: RepairEvent }
export function RepairInfoSection(props: RepairInfoSectionProps) {  
  
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <div className={styles.row}>
          {props.repairEvent.status === "Active" && <h2 className={styles.title}>Active repair</h2>}
          {props.repairEvent.status === "Stopped" && <h2 className={styles.title}>Repair Paused</h2>}
          {props.repairEvent.status === "Completed" && <h2 className={styles.title}>Repair complete</h2>}
          <StatusPill status={props.repairEvent.status} />
        </div>

        <p className={styles.meta}>
          {`${props.repairEvent.asset}  ·  ${props.repairEvent.system}  ·  Registered by ${props.repairEvent.registeredBy}`}
        </p>
      </div>

      <ElapsedTimer />
    </section>
  );
}