import styles from "./FooterPatt.module.scss";

export function FooterPatt() {
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.communication}>
          <h3>Контакты</h3>
          <ul>
            <li>Москва, ул. Сущевский вал, д.16, стр.4.</li>
            <li>+7 (495) 369-04-02 доб.2</li>
            <li>E-mail: olimpiada@ifru.ru</li>
          </ul>
        </div>
        <div className={styles.sponsors}>
          <h3>Организаторы</h3>
          <ul>
            <li>
              <img src="../../../../public/sponsor/NIFRU.svg" alt="#" />
            </li>
            <li>
              <img src="../../../../public/sponsor/IE-RAN.svg" alt="#" />
            </li>
            <li>
              <img src="../../../../public/sponsor/mospolitech.svg" alt="#" />
            </li>
            <li>
              <img src="../../../../public/sponsor/IFRU.svg" alt="#" />
            </li>
            <li>
              <img
                src="../../../../public/sponsor/FinPotrebNadzor.svg"
                alt="#"
              />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
