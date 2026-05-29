import styles from "./HoverToolTip.module.css";

type HoverToolTipProps = {
   text:string
  children: React.ReactNode;
};

export function HoverToolTip(props: HoverToolTipProps) {
  return (
    <div className={styles.wrapper}>
      {props.children}

      <div className={styles.tooltip}>
              { props.text}
      </div>
    </div>
  );
}