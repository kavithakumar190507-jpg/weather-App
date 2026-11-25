
import React from "react";

function WeatherCard({ weather }) {

  const icon = weather.weather[0].icon;

  return (
    <div className="weather-card">

      <h2>
        {weather.name}, {weather.sys.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather icon"
      />

      <h1>
        {Math.round(weather.main.temp)}°C
      </h1>

      <h3>
        {weather.weather[0].description}
      </h3>

      <p>
        Feels Like: {Math.round(weather.main.feels_like)}°C
      </p>

    </div>
  );
}

export default WeatherCard;
