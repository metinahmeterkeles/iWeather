import axios from "axios";

const getAllCities = async () => {
  try {
    const response = await axios.get(
      `https://countriesnow.space/api/v0.1/countries`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const CityService = {
  getAllCities,
};

export default CityService;
