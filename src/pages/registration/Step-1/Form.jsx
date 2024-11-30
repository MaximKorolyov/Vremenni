import styles from "./Form.module.scss";
import { PrsData } from "./for-map/PersonalData";
import { Address } from "./for-map/Address";
// import { useForm } from "react-hook-form";

export function Form({ onChange }) {
  const formMap = (expConst) => {
    return expConst.map((item) => (
      <div key={item.id} className={styles.form_field}>
        <p>
          {item.name} <span>*</span>
        </p>

        <div className={styles.form_back}>
          <input type={item.tp} placeholder={item.pcholder} />
        </div>

        {item.name === "Город" && (
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <label>Являюсь жителем сельской местности</label>
          </div>
        )}
      </div>
    ));
  };

  return (
    <>
      <div className={styles.container}>
        <form>
          <h4 className={styles.head_form}>Персональные данные</h4>

          <div key={1} className={styles.form_field}>
            <p>
              Кем Вы являетесь при регистрации? <span>*</span>
            </p>

            <div className={styles.form_back}>
              <select
                className={styles.like_input}
                aria-label="Default select example"
              >
                <option selected> </option>
                <option value="1">Школьник</option>
                <option value="2">Студент СПО</option>
                <option value="3">Студент ВУЗа</option>
                <option value="4">Дополнительные категории</option>
                <option value="5">Представитель работодателя</option>
                <option value="6">Представитель партнера</option>
                <option value="7">Родитель или опекун</option>
                <option value="8">Волонтер</option>
                <option value="9">Специалист</option>
                <option value="10">Учитель</option>
                <option value="11">Наставник</option>
                <option value="12">Научный руководитель</option>
                <option value="13">Молодой специалист</option>
                <option value="14">Эксперт</option>
              </select>
            </div>
          </div>

          {formMap(PrsData)}
          <h4 className={styles.head_form}>
            Детальная информация о месте проживания
          </h4>
          {formMap(Address)}
          <div className={styles.house_and_ap}>
            <div className={styles.form_back}>
              <input type="text" placeholder="Дом" />
            </div>
            <div className={styles.form_back}>
              <input type="text" placeholder="Квартира" />
            </div>
          </div>
          <div className={styles.back_and_forth}>
            <button onClick={() => onChange("step1")}>Предыдущий шаг</button>
            <button onClick={() => onChange("step2")}>Следующий шаг</button>
          </div>
        </form>
      </div>
    </>
  );
}
