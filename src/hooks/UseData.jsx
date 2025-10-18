import { useState, useEffect } from "react";
import axios from "axios";

export default function useData(coords) {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (coords.lat && coords.lon) {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`;
      axios.get(url)
        .then(response => {
          setWeatherData(response.data.list[0]);

          const dailyData = {};
          response.data.list.forEach(reading => {
            const date = reading.dt_txt.split(' ')[0];
            if (!dailyData[date]) {
              dailyData[date] = {
                temps: [],
                weather: []
              };
            }
            dailyData[date].temps.push(reading.main.temp);
            dailyData[date].weather.push(reading.weather[0]);
          });

          const today = new Date().toISOString().slice(0, 10);
          const forecastDays = Object.keys(dailyData).filter(date => date > today).slice(0, 5);

          const processedForecast = forecastDays.map(date => {
            const day = dailyData[date];
            const temp_min = Math.min(...day.temps);
            const temp_max = Math.max(...day.temps);
            const noonWeather = day.weather.find(w => dailyData[date].dt_txt?.includes("12:00:00")) || day.weather[Math.floor(day.weather.length / 2)];

            return {
              dt_txt: `${date} 12:00:00`,
              main: {
                temp_min,
                temp_max
              },
              weather: [noonWeather]
            };
          });

          setForecastData(processedForecast);
        })
        .catch(error => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [coords]);

  return { weatherData, forecastData };
}
