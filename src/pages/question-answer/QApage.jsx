import styles from "./QApage.module.scss";
export function QApage() {
  const nActiv = "../../../public/QA/non-activ.png";
  const redLine = "../../../public/QA/Line.png";
  return (
    <>
      <div className={styles.big_container}>
        <div className={styles.container}>
          <h3>Вопрос - ответ</h3>
          <div className={styles.ask_group}>
            <h2>Общие вопросы о мероприятии</h2>

            <ul>
              <li>
                <img src={nActiv} alt="#" />
                <span>Что такое олимпиада по финансовой грамотности?</span>
              </li>
              <li>
                <img src={nActiv} alt="#" />
                <span>Кто может участвовать в олимпиаде?</span>
              </li>
            </ul>
          </div>

          <img src={redLine} alt="Красная линия" />

          <div className={styles.ask_group}>
            <h2>Формат и этапы проведения</h2>

            <ul>
              <li>
                <img src={nActiv} alt="#" />
                <span>Из каких этапов состоит олимпиада?</span>
              </li>
              <li>
                <img src={nActiv} alt="#" />
                <span>Сколько времени длится каждый этап?</span>
              </li>
            </ul>
          </div>

          <img src={redLine} alt="Красная линия" />

          <div className={styles.ask_group}>
            <h2>Темы и подготовка</h2>

            <ul>
              <li>
                <img src={nActiv} alt="#" />
                <span>Какие темы охватывает олимпиада?</span>
              </li>
              <li>
                <img src={nActiv} alt="#" />
                <span>Где можно найти материалы для подготовки?</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
