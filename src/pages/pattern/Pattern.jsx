import styles from "./Pattern.module.scss";
import { PatHead } from "./Components/Head/PatHead";
import { RedHeader } from "./Components/RedHeader/RedHeader";
import { FooterPatt } from "./Components/FooterPatt/FooterPatt";

export function Pattern({ children }) {
  return (
    <>
      <div className={styles.container}>
        <PatHead />
        <RedHeader />
        { children }
        <FooterPatt />
      </div>
    </>
  );
}
