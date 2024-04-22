import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function GoBackButton() {
  return (
    <div className={styles.btn}>
      <Link to={`/`}>
        <button className={styles.buttonBack}>Go back</button>
      </Link>
    </div>
  );
}

export default GoBackButton;
