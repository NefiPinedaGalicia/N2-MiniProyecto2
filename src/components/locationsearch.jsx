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
        <button onClick={handleSearch}>
          <img src="/close.svg" alt="Close" />
        </button>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="bg-transparent border border-white text-white p-2 flex-grow"
          placeholder="Search location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-[#3c47e9] text-white px-4 py-2"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-5">
        {cities.map((city) => (
          <button
            key={city.id}
            className="text-white text-left p-2 border border-transparent hover:border-white"
            onClick={() => handleLocationSelect(city)}
          >
            {city.name}
          </button>
        ))}
      </div>
    </div>
  );
}
