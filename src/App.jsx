import React, { useState, useEffect } from "react";
import axios from "axios";
import Aside from "./components/aside.jsx";
import ButtonsGrades from "./components/buttonsgrades.jsx";
import DaysContainer from "./components/dayscontainer.jsx";
import HightLightsContainer from "./components/hightlightscontainer.jsx";
import LocationSearch from "./components/locationsearch.jsx";

export default function App() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [location, setLocation] = useState("Salt Lake City, US");
  const [coords, setCoords] = useState({ lat: 40.7608, lon: -111.8911 });
  const [unit, setUnit] = useState("C");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation.name);
    setCoords({ lat: selectedLocation.lat, lon: selectedLocation.lon });
    setIsSearchVisible(false);
  };

  const handleGetLocation = () => {
    axios.get('http://ip-api.com/json/')
      .then(response => {
        setLocation(`${response.data.city}, ${response.data.country}`);
        setCoords({ lat: response.data.lat, lon: response.data.lon });
      })
      .catch(error => {
        console.error("Error fetching location:", error);
      });
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

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

  return (
    <>
      <div className="w-full flex flex-col md:flex-row md:h-screen">
        <div className="w-full h-200 bg-[#1e213a] md:w-3/10 md:h-full">
          {isSearchVisible ? (
            <LocationSearch
              handleSearch={handleSearch}
              handleLocationSelect={handleLocationSelect}
            />
          ) : (
            <Aside handleSearch={handleSearch} location={location} handleGetLocation={handleGetLocation} unit={unit} weatherData={weatherData} />
          )}
        </div>
        <div className="w-full h-300 flex flex-col bg-[#100e1d] md:w-7/10 md:h-full md:px-30 md:py-8">
          <div className="w-full h-1/12 flex items-center">
            <ButtonsGrades unit={unit} handleUnitChange={handleUnitChange} />
          </div>
          <div className="w-full h-4/12 flex items-center justify-center md:h-3/12">
            <DaysContainer forecastData={forecastData} unit={unit} />
          </div>
          <div className="w-full h-7/12 md:h-8/12">
            <HightLightsContainer weatherData={weatherData} />
          </div>
        </div>
      </div>
    </>
  );
}
