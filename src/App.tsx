import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Header } from "./header/Header";
import { TabletView } from "./views/TabletView/TabletView";
import { AdminView } from "./views/AdminView/AdminView";
import { useStore } from "./store/RepairEventStore";

export function App() {
  const [mode, setMode] = useState<"tablet" | "admin">("tablet");

  const { state, dispatch } = useStore();

  const activeRepairEvent = state.repairEvents[0];

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

      {mode === "tablet" && activeRepairEvent && (
        <TabletView repairEvent={activeRepairEvent} />
      )}

      {mode === "admin" && <AdminView />}
    </div>
  );
}