import styles from "./QApage.module.scss";
import { OneQuestion } from "./OneQuestion";

export const QuestionGroup = ({ title, questions }) => {
  return (
    <div className={styles.ask_group}>
      <h2>{title}</h2>
      <ul>
        {questions.map((q, index) => (
          <OneQuestion key={index} title={q.title} answ={q.answer} />
        ))}
      </ul>
    </div>
  );
};
