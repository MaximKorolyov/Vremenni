import styles from "./RedHeader.module.scss";
import { Link } from 'react-router-dom';

export function RedHeader() {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.deploy}>
            <a href="#">Общая информация</a>
          </li>
          <li className={styles.deploy}>
            <a href="#">Подготовка</a>
          </li>
          <li>
          <Link to="/documents">Документы</Link>
          </li>
          <li>
            <a href="#">Для спонсоров</a>
          </li>
          <li>
          <Link to="/partners">Партнёры</Link>
          </li>
          <li>
          <Link to="/organizators">Организаторы</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
