/* eslint-disable react/prop-types */
import {
  ClearDay,
  CloudyDay,
  CloudyNight,
  FewcloudsDay,
  RainDay,
  StormDay,
} from "../../../assets/icons";

// Hava durumu koşullarına göre iconları eşleyen bir fonksiyon
const getWeatherIcon = (weatherCondition, iconWidth, iconHeight) => {
  switch (weatherCondition?.toLocaleLowerCase()) {
    case "thunderstorm with light rain":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "thunderstorm with rain":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "thunderstorm with heavy rain":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "thunderstorm with light drizzle":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "thunderstorm with drizzle":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "thunderstorm with heavy drizzle":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "thunderstorm with hail":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "light drizzle":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "drizzle":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "heavy drizzle":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "light rain":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "moderate rain":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "heavy rain":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "freezing rain":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "light shower rain":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "shower rain":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "heavy shower rain":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "light snow":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "snow":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "heavy snow":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "mix snow/rain":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "sleet":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "heavy sleet":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "snow shower":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "heavy snow shower":
      return <RainDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "flurries":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "mist":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "smoke":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "haze":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "sand/dust":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "fog":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "freezing Fog":
      return <StormDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "clear sky":
      return <ClearDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "few clouds":
      return <FewcloudsDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "scattered clouds":
      return <FewcloudsDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "broken clouds":
      return <CloudyDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "overcast clouds":
      return <CloudyDay iconWidth={iconWidth} iconHeight={iconHeight} />;
    case "unknown precipitation":
      return <CloudyNight iconWidth={iconWidth} iconHeight={iconHeight} />;
    default:
      return null;
  }
};

// Hava durumu icon bileşeni
const WeatherIcon = ({ weatherCondition, iconWidth, iconHeight }) => {
  const icon = getWeatherIcon(weatherCondition, iconWidth, iconHeight); // Hava durumu koşuluna göre iconu al
  return <>{icon}</>;
};

export default WeatherIcon;
