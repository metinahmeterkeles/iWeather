import WeatherContent from "../Content/WeatherContent/WeatherContent";
import WeatherHeader from "../Content/WeatherHeader/WeatherHeader";
import WeatherFooter from "../Content/WeatherFooter/WeatherFooter";
import WeatherContentLayout from "../layouts/WeatherContentLayout/WeatherContentLayout";
import WeatherFooterLayout from "../layouts/WeatherFooterLayout/WeatherFooterLayout";
import WeatherLayout from "../layouts/WeatherLayout";
import Loading from "../Loading";

import WeatherService from "../../services/WeatherService";

import {
  TypeCloudRainLight,
  TypeWindLight,
  TypeDropLight,
  TypeSunDimLight,
} from "../../assets/icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import GoBackButton from "../cards/GoBackButton";

function WeatherPage() {
  const { city } = useParams();
  const [selectedCity, setSelectedCity] = useState(city);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["weather_details", selectedCity],
    queryFn: () => WeatherService.getWeatherFromCity(selectedCity),
    staleTime: 300000,
    refetchInterval: 60000,
  });

  useEffect(() => {
    setSelectedCity(city);
  }, [city]);

  useEffect(() => {
    refetch();
  }, [selectedCity, refetch]);

  if (isLoading)
    return (
      <>
        <Loading />
      </>
    );
  if (isError) return <div>Error fetching data{isError}</div>;
  return (
    <>
      <WeatherLayout>
        <WeatherHeader
          city_name={data.city_name}
          country_code={data.country_code}
          datetime={data.data[0].datetime}
          temp={data?.data[0].temp}
          max_temp={data?.data[0].max_temp}
          min_temp={data?.data[0].min_temp}
          weather={data?.data[0].weather.description}
        />
        <WeatherContentLayout>
          <WeatherContent value={`${data?.data[0].temp}℃`} />
          <WeatherContent
            icon={<TypeCloudRainLight />}
            content="Probability of rain"
            value={`${data?.data[0].pop}%`}
          />
          <WeatherContent
            icon={<TypeWindLight />}
            content="Wind speed"
            value={`${data?.data[0].wind_spd} m/s`}
          />
          <WeatherContent
            icon={<TypeDropLight />}
            content="Air humidity"
            value={`${data?.data[0].rh}%`}
          />
          <WeatherContent
            icon={<TypeSunDimLight />}
            content="UV Index"
            value={data?.data[0].uv}
          />
        </WeatherContentLayout>

        <WeatherFooterLayout>
          {data?.data.map((arr, id) => (
            <WeatherFooter
              key={id}
              max_temp={arr.max_temp}
              min_temp={arr.min_temp}
              day={arr.datetime}
              weather={arr.weather.description}
            />
          ))}
        </WeatherFooterLayout>
        <GoBackButton />
      </WeatherLayout>
    </>
  );
}

export default WeatherPage;
