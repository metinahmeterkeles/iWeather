/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
import Typethermometersimplelight from "../../../assets/icons/TypeThermometerSimpleLight";

function WeatherContent({
  icon = <Typethermometersimplelight />,
  content = "Thermal Sensation",
  value = "26ºc",
}) {
  return (
    <div className={styles.properties}>
      <div className={styles.properties_main}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.description}>
          <p>{content}</p>
        </div>
      </div>
      <div className={styles.rating}>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default WeatherContent;
