import { useState } from "react";
import styles from "./styles.module.css";
import CityService from "../../services/CityService";
import { useQuery } from "@tanstack/react-query";
import CityHint from "../cards/CityHint";

import images from "../../images";

function HomePage() {
  const [city, setCity] = useState("");
  const [hintData, setHintData] = useState();

  const { data } = useQuery({
    queryKey: ["all_city"],
    queryFn: () => CityService.getAllCities(),
  });

  function suggestCities(inputText, data) {
    const suggestions = [];

    // Kullanıcının girdiği metni veri setinizdeki her şehirle karşılaştırın
    data.data.forEach((country) => {
      country.cities.forEach((city) => {
        // Eşleşen şehirleri bulun
        if (city.toLowerCase().includes(inputText.toLowerCase())) {
          suggestions.push(city);
        }
      });
    });

    // Eşleşen şehirleri geri döndürün
    return suggestions;
  }

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const suggestions = suggestCities(inputValue, data);
    setHintData(suggestions);
    setCity(inputValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={images.logo_with_text} alt="Logo" />
      </div>
      <div className={styles.content}>
        <p className={styles.contentHeading}>
          Welcome to the <span>TypeWeather</span>
        </p>
        <p className={styles.contentSubheading}>
          Choose a location to see the weather forecast
        </p>
        <input
          type="text"
          placeholder="Search location"
          value={city}
          onChange={handleChange}
        />
        {city.length > 2 && <CityHint hintData={hintData} />}
      </div>
    </div>
  );
}

export default HomePage;
