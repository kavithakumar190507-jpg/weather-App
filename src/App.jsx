
import { useState } from "react";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";

import { getWeather } from "./services/weatherApi";

import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city.trim());

      setWeather(data);

    } catch (err) {
      setError(err.message);
      setWeather(null);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">

      <h1>Weather App</h1>

      <p className="subtitle">
        Check the weather anywhere in the world
      </p>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />

      {loading && <p>Loading weather...</p>}

      {error && <p className="error">{error}</p>}

      {weather && (
        <>
          <WeatherCard weather={weather} />
          <WeatherDetails weather={weather} />
        </>
      )}

    </div>
  );
}

export default App;
