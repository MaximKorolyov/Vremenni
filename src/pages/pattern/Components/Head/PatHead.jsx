import styles from "./PatHead.module.scss";
import { HeaderPatt } from "../HeaderPatt/HeaderPatt";
import { Link } from 'react-router-dom';

export function PatHead() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.blur_block}>
          <HeaderPatt />
          <div className={styles.block_in_right}>
            <div className={styles.info_block}>
              <Link to="/"><img
                className={styles.info_logo}
                src="../../../../public/pattern/Logo.png"
                alt="#"
                height={85}
              ></img></Link>
              <div className={styles.info_text}>
                ВСЕРОССИЙСКАЯ ОЛИМПИАДА ПО ФИНАНСОВОЙ ГРАМОТНОСТИ
              </div>
              <Link to="/regisration"><button className={styles.info_btn}>Зарегистрироваться</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
