import styles from "./QApage.module.scss";
import { QuestionGroup } from "./QuestionsGroup";

export function QApage() {
  const redLine = "../../../public/QA/Line.png";
  return (
    <>
      <div className={styles.big_container}>
        <div className={styles.container}>
          <h3>Вопрос - ответ</h3>
          <QuestionGroup
            title="Общие вопросы о мероприятии"
            questions={[
              {
                title: "Что такое олимпиада по финансовой грамотности?",
                answer:
                  "Олимпиада по финансовой грамотности — это интеллектуальное соревнование, направленное на развитие знаний и навыков в области управления личными финансами, планирования бюджета, инвестирования и других основ финансовой грамотности. Участники решают задачи, связанные с реальными жизненными ситуациями, изучая актуальные финансовые инструменты и практики.",
              },
              {
                title: "Кто может участвовать в олимпиаде?",
                answer: "Ответ",
              },
            ]}
          />

          <img src={redLine} alt="Красная линия" />

          <QuestionGroup
            title="Формат и этапы проведения"
            questions={[
              {
                title: "Из каких этапов состоит олимпиада?",
                answer: "Ответ",
              },
              {
                title: "Сколько времени длится каждый этап?",
                answer: "Ответ",
              },
            ]}
          />

          <img src={redLine} alt="Красная линия" />

          <QuestionGroup
            title="Темы и подготовка"
            questions={[
              {
                title: "Какие темы охватывает олимпиада?",
                answer: "Ответ",
              },
              {
                title: "Где можно найти материалы для подготовки?",
                answer: "Ответ",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
