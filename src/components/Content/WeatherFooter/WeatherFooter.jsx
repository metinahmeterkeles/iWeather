/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

import WeatherIcon from "../WeatherIcon/WeatherIcon";

function WeatherFooter({
  max_temp = "32ºc",
  min_temp = "26ºc",
  day = "Mon",
  weather,
}) {
  const date = new Date(day); // Date objesine dönüştür

  // Haftanın günlerini bul
  const weekDays = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  const dayOfWeek = date.getDay(); // Belirtilen tarihin haftanın hangi gününe denk geldiğini al
  const dayName = weekDays[dayOfWeek];

  return (
    <div className={styles.days}>
      <div className={styles.day}>{dayName}</div>
      <div className="icon">
        {/* <StormDay /> */}
        <WeatherIcon weatherCondition={weather} />
      </div>
      <div className={styles.details}>
        <span className={styles.max_temp}>{Math.floor(max_temp)}ºc</span>
        <span className={styles.min_temp}>{Math.floor(min_temp)}ºc</span>
      </div>
    </div>
  );
}

export default WeatherFooter;
