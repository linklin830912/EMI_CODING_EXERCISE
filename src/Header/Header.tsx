import styles from "./Header.module.css";

type Props = {
  mode: "tablet" | "admin";
  onToggle: () => void;
};

export function Header({ mode, onToggle }: Props) {
  return (
    <header
      className={styles.header}
      data-mode={mode}
    >
      <div className={styles.left}>
        <img data-mode={mode}
          className={`${styles.logo} ${mode === "admin" ? styles.invert : ""}`}
          src="/emi3-logo.png"
          alt="EMI3"
        />

        <h1 className={styles.title}>
          Repair Event
        </h1>
      </div>

      <button className={styles.toggle} onClick={onToggle}>
        {mode === "tablet" ? "Admin" : "Tablet"}
      </button>
    </header>
  );
}