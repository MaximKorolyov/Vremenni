import styles from "./Registration.module.scss";
import { Form } from "./Step-1/Form";
import { FormSchool } from "./Step-2/Form-school";
import { FormAdd } from "./Step-3/Form-add";
import { Navigation } from "./Navigation";
import { useState } from "react";
import { Header } from "../../Components/Header/Header.jsx";

export function Registration() {
  const [tab, setTab] = useState("step1");

  return (
    <>
    <Header />
      <div className={styles.big_back}>
        <div className={styles.back_layer}>
          <div className={styles.container}>
            <h3 className={styles.header_h3}>
              Регистрация на олимпиаду “Название олимпиады”
            </h3>
            {tab === "step1" && <Form onChange={setTab} />}
            {tab === "step2" && <FormSchool onChange={setTab} />}
            {tab === "step3" && <FormAdd onChange={setTab} />}
            <div className={styles.nav}>
              <Navigation onChange={setTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
