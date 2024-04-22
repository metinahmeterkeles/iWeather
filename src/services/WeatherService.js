import axios from "axios";

const getWeatherFromCity = async (city) => {
  try {
    const response = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=5&key=6540f20265514494812a5d41df0ff4fd`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const WeatherService = {
  getWeatherFromCity,
};

export default WeatherService;
