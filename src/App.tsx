import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./Header/Header";
import { TabletView } from "./views/TabletView/TabletView";
import { AdminView } from "./views/AdminView/AdminView";

export function App() {
  const [mode, setMode] = useState<"tablet" | "admin">("tablet");

  const toggleMode = () => {
    setMode((m) => (m === "tablet" ? "admin" : "tablet"));
  };

  return (
    <div className={styles.app} data-mode={mode}>
      <Header mode={mode} onToggle={toggleMode} />

      {mode === "tablet" ? <TabletView /> : <AdminView />}
    </div>
  );
}