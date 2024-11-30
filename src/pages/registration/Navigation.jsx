import styles from "./Navigation.module.scss";

export function Navigation({ onChange }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.lol}>
          <button
            onClick={() => onChange("step1")}
            className={styles.circle}
          ></button>
          <div style={{ paddingTop: 9 }}>1</div>
          <p>Шаг</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.lol}>
          <button
            onClick={() => onChange("step2")}
            className={styles.circle}
          ></button>
          <div style={{ paddingTop: 9 }}>2</div>
          <p>Шаг</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.lol}>
          <button
            onClick={() => onChange("step3")}
            className={styles.circle}
          ></button>
          <div style={{ paddingTop: 9 }}>3</div>
          <p>Шаг</p>
        </div>
      </div>
    </>
  );
}
