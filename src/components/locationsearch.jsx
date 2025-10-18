import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LocationSearch({ handleSearch, handleLocationSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([]);
  const [allCities, setAllCities] = useState([]);

  useEffect(() => {
    axios.get("/cities.json").then((response) => {
      setAllCities(response.data);
    });
  }, []);

  const handleSearchClick = () => {
    const filteredCities = allCities.filter((city) =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCities(filteredCities);
  };

  return (
    <div className="w-full h-full flex flex-col p-5 gap-5 bg-[#1e213a]">
      <div className="flex justify-end">
        <button onClick={handleSearch} className="w-8 h-8">
          <img src="/close.svg" alt="Close" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative flex-grow">
          <input
            type="text"
            className="bg-transparent border border-white text-white p-2 pl-10 w-full rounded-md"
            placeholder="Search location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src="/search.svg" alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
        </div>
        <button
          className="bg-[#6e717a] text-white px-4 py-2 rounded-md"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-5">
        {cities.map((city) => (
          <button
            key={city.id}
            className="text-white text-left p-3 border border-transparent hover:border-gray-400 rounded-md transition-colors duration-200"
            onClick={() => handleLocationSelect(city)}
          >
            {city.name}, {city.country}
          </button>
        ))}
      </div>
    </div>
  );
}
