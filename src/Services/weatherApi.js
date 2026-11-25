
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather data
export const getWeather = async (city) => {

  try {

    const response = await fetch(
      `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Weather data not found");
    }

    const data = await response.json();

    return data;

  } catch (error) {

    throw error;

  }
};
