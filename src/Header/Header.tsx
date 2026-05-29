import styles from "./Header.module.css";

type Props = {
  mode: "tablet" | "admin";
  onToggle: () => void;
};

export function Header(props: Props) {
  return (
    <header
      className={styles.header}
      data-mode={props.mode}
    >
      <div className={styles.left}>
        <img data-mode={props.mode}
          className={`${styles.logo} ${props.mode === "admin" ? styles.invert : ""}`}
          src="/emi3-logo.png"
          alt="EMI3"
        />

        <h1 className={styles.title}>
          Repair Event
        </h1>
      </div>

      <button className={styles.toggle} onClick={props.onToggle}>
        {props.mode === "tablet" ? "Admin" : "Tablet"}
      </button>
    </header>
  );
}