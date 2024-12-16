import styles from "./QApage.module.scss";
import { useState } from "react";

export const OneQuestion = ({ title, answ }) => {
  const nActiv = "../../../public/QA/non-activ.png";
  const Activ = "../../../public/QA/activ.png";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li onClick={() => setIsOpen(!isOpen)}>
      <img src={isOpen ? Activ : nActiv} alt="Иконка состояния" />
      <span className={isOpen ? styles.red_title : styles.def_title}>
        {title}
      </span>
      {isOpen && <p className={styles.answer_text}>{answ}</p>}
    </li>
  );
};
