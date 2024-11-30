import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.communication}>
          <ul>
            <li>
              <span>olimpiada@ifru.ru</span>
            </li>
            <li>+7 (495) 369-04-02 доб.2</li>
          </ul>
        </div>
        <div className={styles.sponsors}>
          <ul>
            <li>
              <img src="../../public/sponsor/IFRU.svg" alt="#" />
            </li>
            <li>
              <img src="../../public/sponsor/NIFRU.svg" alt="#" />
            </li>
            <li>
              <img src="../../public/sponsor/FinPotrebNadzor.svg" alt="#" />
            </li>
            <li>
              <img src="../../public/sponsor/IE-RAN.svg" alt="#" />
            </li>
            <li>
              <img src="../../public/sponsor/mospolitech.svg" alt="#" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}