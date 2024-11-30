import styles from "../Step-1/Form.module.scss";
import { School } from "./for-map/School";

export function FormSchool({ onChange }) {
  const formMap = (expConst) => {
    return expConst.map((item) => (
      <div key={item.id} className={styles.form_field}>
        <p>
          {item.name} {item.required && <span>*</span>}
        </p>

        <div className={styles.form_back}>
          {item.name === "Название" ? (
            <select
              className={styles.like_input}
              aria-label="Default select example"
            >
              <option selected> </option>
              <option value="1">-</option>
              <option value="2">-</option>
              <option value="3">-</option>
            </select>
          ) : (
            <input type={item.tp} placeholder={item.pcholder} />
          )}
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className={styles.container}>
        <form>
          <h4 className={styles.head_form}>
            Информация об образовательном учреждении
          </h4>

          {formMap(School)}

          <div className={styles.back_and_forth}>
            <button onClick={() => onChange("step1")}>Предыдущий шаг</button>
            <button onClick={() => onChange("step3")}>Следующий шаг</button>
          </div>
        </form>
      </div>
    </>
  );
}
