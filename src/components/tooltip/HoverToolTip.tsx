import styles from "./HoverToolTip.module.css";

type HoverToolTipProps = {
   text:string
  children: React.ReactNode;
};

export function HoverToolTip({
    text,
  children,
}: HoverToolTipProps) {
  return (
    <div className={styles.wrapper}>
      {children}

      <div className={styles.tooltip}>
              { text}
      </div>
    </div>
  );
}