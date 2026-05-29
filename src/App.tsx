import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Header } from "./header/Header";
import { TabletView } from "./views/TabletView/TabletView";
import { AdminView } from "./views/AdminView/AdminView";
import { RepairEvent } from "./lib/types";
import { loadEvents } from "./lib/storage";
import { useStore } from "./store/RepairEventStore";

export function App() {
  const [mode, setMode] = useState<"tablet" | "admin">("tablet");
  const [allRepairEvents, setAllRepairEvents] = useState<RepairEvent[]>([]);
  const [currentRepairEvent, setCurrentRepairEvent] = useState<RepairEvent | null>(null);
  const { dispatch } = useStore();

  useEffect(() => {
    const events = loadEvents([]);
    setAllRepairEvents(events);
    if (events.length > 0 && events[0]) {
      setCurrentRepairEvent(events[0]);
    }

    dispatch({
      type: "SET_START_TIME",
      payload: Date.now(),
    });
  }, []);

  const toggleMode = () => {
    setMode((m) => (m === "tablet" ? "admin" : "tablet"));
  };

  return (
    <div className={styles.app} data-mode={mode}>
      <Header mode={mode} onToggle={toggleMode} />

      {mode === "tablet" && currentRepairEvent && <TabletView
        repairEvent={currentRepairEvent}
      />}
      {mode === "admin" && <AdminView />}
    </div>
  );
}