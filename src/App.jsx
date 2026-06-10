import { useState } from "react";
import { useWeather } from "./hooks/useWeather";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";

import "./styles/app.css"; // background + centering

function App() {
  // when user types a city, this value changes
  const [city, setCity] = useState("");

  // "city" gets passed into the hook
  // the hook returns weather data, loading, error
  const { data, loading, error } = useWeather(city);

  // SearchBar will call this function when the user types a city
  function handleCityChange(newCity) {
    setCity(newCity);
  }

  // dynamic background class based on weather
  const weatherClass = data ? data.weather[0].main.toLowerCase() : "";

  return (
    <div className={`app-container ${weatherClass}`}>
      <SearchBar onCityChange={handleCityChange} />

      {/* Show error if it exists */}
      <ErrorMessage error={error} />

      {/* Show weather data */}
      <WeatherDisplay data={data} loading={loading} />
    </div>
  );
}

export default App;
