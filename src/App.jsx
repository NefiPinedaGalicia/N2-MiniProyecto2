import React, { useState } from "react";
import axios from "axios";
import Aside from "./components/aside.jsx";
import ButtonsGrades from "./components/buttonsgrades.jsx";
import DaysContainer from "./components/dayscontainer.jsx";
import HightLightsContainer from "./components/hightlightscontainer.jsx";
import LocationSearch from "./components/locationsearch.jsx";
import useData from "./hooks/UseData.jsx";

export default function App() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [location, setLocation] = useState("Salt Lake City, US");
  const [coords, setCoords] = useState({ lat: 40.7608, lon: -111.8911 });
  const [unit, setUnit] = useState("C");
  const { weatherData, forecastData } = useData(coords);

  const handleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleLocationSelect = (selectedLocation) => {
    setLocation(selectedLocation.name);
    setCoords({ lat: selectedLocation.lat, lon: selectedLocation.lon });
    setIsSearchVisible(false);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lon: longitude });
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_API_KEY}`
            )
            .then((response) => {
              setLocation(`${response.data.name}, ${response.data.sys.country}`);
            })
            .catch((error) => {
              console.error("Error fetching location name:", error);
            });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

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
