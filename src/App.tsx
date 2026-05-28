import { useState } from "react";
import styles from "./App.module.css";

import { TabletView } from "./views/TabletView/TabletView";
import { AdminView } from "./views/AdminView/AdminView";

export function App() {
  const [adminMode, setAdminMode] = useState(false);

  return (
    <div
      className={
        adminMode ? styles.adminContainer : styles.tabletContainer
      }
    >
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>EMI3 Repair System</h1>
          <p className={styles.subtitle}>
            Field maintenance tracking
          </p>
        </div>

        <button
          className={styles.toggle}
          onClick={() => setAdminMode(!adminMode)}
        >
          {adminMode ? "TABLET VIEW" : "ADMIN VIEW"}
        </button>
      </header>

      <main className={styles.main}>
        {adminMode ? <AdminView /> : <TabletView />}
      </main>
    </div>
  );
}