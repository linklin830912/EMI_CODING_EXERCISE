import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Header } from "./header/Header";
import { TabletView } from "./views/TabletView/TabletView";
import { AdminView } from "./views/AdminView/AdminView";
import { useStore } from "./store/RepairEventStore";
import { createDefaultEvent } from "./util/createDefaultEvent";
import { defaultRepairEventProfile, RepairEvent } from "./lib/types";

export function App() {
  const [mode, setMode] = useState<"tablet" | "admin">("tablet");
  const [activeRepairEvent, setActiveRepairEvent] = useState<RepairEvent>();

  const { state, dispatch } = useStore();

  useEffect(() => {
    const repairEvent = createDefaultEvent(state.repairEvents.length, Date.now());
    setActiveRepairEvent(repairEvent);
    dispatch({
        type: "SET_CURRENT_REPAIR_PROFILE",
        payload: defaultRepairEventProfile(repairEvent.registeredBy)
      });
  }, [])

  useEffect(() => {
    dispatch({
      type: "SET_START_TIME",
      payload: Date.now(),
    });
  }, [dispatch]);

  const toggleMode = () => {
    setMode((m) => (m === "tablet" ? "admin" : "tablet"));
  };

  return (
    <div className={styles.app} data-mode={mode}>
      <Header mode={mode} onToggle={toggleMode} />

      {mode === "tablet" && activeRepairEvent && <TabletView repairEvent={activeRepairEvent} />}

      {mode === "admin" && activeRepairEvent && <AdminView repairEvent={activeRepairEvent}/>}
    </div>
  );
}