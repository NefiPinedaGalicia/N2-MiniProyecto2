import React from "react";
import WindSpeed from "./hightlight/windspeed";
import Humidity from "./hightlight/humidity";
import Visibility from "./hightlight/visibility";
import AirPressure from "./hightlight/airpressure";

export default function HightlightsContainer({ weatherData }) {
  return (
    <div className="p-2 w-full h-full">
      <h2 className="text-2xl text-white font-bold mb-6 text-center md:text-left">
        Today's Hightlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <WindSpeed speed={weatherData?.wind.speed} deg={weatherData?.wind.deg} />
        <Humidity percentage={weatherData?.main.humidity} />
        <Visibility distance={weatherData?.visibility} />
        <AirPressure pressure={weatherData?.main.pressure} />
      </div>
    </div>
  );
}
