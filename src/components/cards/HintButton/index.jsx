import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function index({ data }) {
  const param = data.toLocaleLowerCase().replace(" ", "");
  return (
    <>
      <Link to={`/weather/${param}`} style={{ width: "100%" }}>
        <button className={styles.hintButton}>{data}</button>
      </Link>
    </>
  );
}

export default index;
