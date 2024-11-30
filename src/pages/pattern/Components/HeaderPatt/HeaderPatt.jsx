import styles from "./HeaderPatt.module.scss";
import { Link } from 'react-router-dom';

export function HeaderPatt() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.project_status}>
          <span>Статус проекта:</span>{" "}
          <span className={styles.not_bold}>отборочный тур</span>
        </div>
        <div className={styles.info}>
          <div className={styles.feedback}>
            <p className={styles.email}>olimpiada@ifru.ru</p>
            <p className={styles.number}>+7 495 369-04-02 доб.2</p>
          </div>
          <div className={styles.login}>
            <Link to="/regisration"><button className={styles.btn}>Регистрация</button></Link>
            <button className={styles.btn}>Вход</button>
          </div>
        </div>
      </div>
    </header>
  );
}
