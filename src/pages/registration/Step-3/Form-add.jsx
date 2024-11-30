import styles from "../Step-1/Form.module.scss";
import { AddInfo } from "./for-map/AddInfo";
import { Link } from 'react-router-dom';

export function FormAdd() {
  const formMap = (expConst) => {
    return expConst.map((item) => (
      <div key={item.id} className={styles.form_field}>
        <p>
          {item.name} {item.required && <span>*</span>}
        </p>

        <div className={styles.form_back}>
          {item.name === "Особенности и потребности" ? (
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
          <h4 className={styles.head_form}>Дополнительная информация</h4>

          {formMap(AddInfo)}

          <div className={styles.checkbox}>
            <input type="checkbox" />
            <label>Согласие на обработку персональных данных</label>
          </div>

          <div className={styles.back_and_forth}>
            <Link to="/"><button>Завершить регистрацию</button></Link>
          </div>
        </form>
      </div>
    </>
  );
}
