import "../styles/weather.css"

function WeatherDisplay({ data, loading }) {
  if (loading) {
    return (
        <div className="spinner"></div>
    );
  }


  if (!data) {
    return <div className="placeholder">Type a city to get weather</div>;
  }

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{data.name}</h2>

      <div className="weather-main">
        <img src={iconUrl} alt="Weather icon" className="weather-icon" />
        <div className="temp">{data.main.temp}°C</div>
      </div>

      <div className="details">
        <p>Humidity: {data.main.humidity}%</p>
        <p>Feels like: {data.main.feels_like}°C</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
