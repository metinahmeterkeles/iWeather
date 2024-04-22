import images from "../../../images";

const getWeatherIcon = (weatherCondition) => {
  switch (weatherCondition?.toLocaleLowerCase()) {
    case "thunderstorm with light rain":
      return images.storm_day;
    case "thunderstorm with rain":
      return images.storm_day;
    case "thunderstorm with heavy rain":
      return images.storm_day;
    case "thunderstorm with light drizzle":
      return images.storm_day;
    case "thunderstorm with drizzle":
      return images.storm_day;
    case "thunderstorm with heavy drizzle":
      return images.storm_day;
    case "thunderstorm with hail":
      return images.storm_day;
    case "light drizzle":
      return images.rain_day;
    case "drizzle":
      return images.rain_day;
    case "heavy drizzle":
      return images.rain_day;
    case "light rain":
      return images.rain_day;
    case "moderate rain":
      return images.rain_day;
    case "heavy rain":
      return images.rain_day;
    case "freezing rain":
      return images.rain_day;
    case "light shower rain":
      return images.rain_day;
    case "shower rain":
      return images.rain_day;
    case "heavy shower rain":
      return images.rain_day;
    case "light snow":
      return images.rain_day;
    case "snow":
      return images.rain_day;
    case "heavy snow":
      return images.rain_day;
    case "mix snow/rain":
      return images.rain_day;
    case "sleet":
      return images.rain_day;
    case "heavy sleet":
      return images.rain_day;
    case "snow shower":
      return images.rain_day;
    case "heavy snow shower":
      return images.rain_day;
    case "flurries":
      return images.storm_day;
    case "mist":
      return images.storm_day;
    case "smoke":
      return images.storm_day;
    case "haze":
      return images.storm_day;
    case "sand/dust":
      return images.storm_day;
    case "fog":
      return images.storm_day;
    case "freezing fog":
      return images.storm_day;
    case "clear sky":
      return images.clear_day;
    case "few clouds":
      return images.fewclouds_day;
    case "scattered clouds":
      return images.fewclouds_day;
    case "broken clouds":
      return images.cloudy_day;
    case "overcast clouds":
      return images.cloudy_day;
    case "unknown precipitation":
      return images.cloudy_day;
    default:
      return images.storm_day;
  }
};

export default getWeatherIcon;
