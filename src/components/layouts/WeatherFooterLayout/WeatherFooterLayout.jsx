/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

function WeatherFooterLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default WeatherFooterLayout;
