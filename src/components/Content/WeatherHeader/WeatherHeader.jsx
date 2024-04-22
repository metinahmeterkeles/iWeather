/* eslint-disable react/prop-types */
import getWeatherIcon from "../WeatherBackgroundImage";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import styles from "./styles.module.css";

function WeatherHeader({
  city_name = "Istanbul",
  country_code = "TR",
  datetime = "Monday , May 15, 2023",
  temp = "28ºc",
  max_temp = "32ºc",
  min_temp = "26ºc",
  weather = "Few clouds",
}) {
  const originalDate = datetime;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const parts = originalDate.split("-");
  const year = parseInt(parts[0], 10);
  const monthIndex = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  const dateObject = new Date(year, monthIndex, day);
  const dayName = days[dateObject.getDay()];
  const monthName = months[monthIndex];

  const formattedDate = `${dayName} , ${monthName} ${day}, ${year}`;

  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{ backgroundImage: `url(${getWeatherIcon(weather)})` }}
      >
        <div className={styles.header}>
          <p className={styles.city}>
            {city_name}, {country_code}
          </p>
          <p className={styles.date}>{formattedDate}</p>
        </div>
        <div className={styles.features}>
          <div className={styles.features__content}>
            <div className={styles.temp}>{Math.floor(temp)}ºc</div>
            <div className={styles.temp_maxmin}>
              {Math.floor(min_temp)}ºc / {Math.floor(max_temp)}ºc
            </div>
            <div className={styles.weather}>{weather}</div>
          </div>
          <div className={styles.icon}>
            <WeatherIcon
              weatherCondition={weather}
              iconWidth="160"
              iconHeight="160"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherHeader;
