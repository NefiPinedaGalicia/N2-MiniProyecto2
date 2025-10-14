import React from "react";
import WindSpeed from "./hightlight/windspeed";
import Humidity from "./hightlight/humidity";
import Visibility from "./hightlight/visibility";
import AirPressure from "./hightlight/airpressure";

export default function HightlightsContainer() {
  return (
    <div className="p-2 w-full h-full">
      <h2 className="text-2xl text-white font-bold mb-6 text-center md:text-left">
        Today's Hightlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <WindSpeed speed="5.39" />
        <Humidity percentage="51" />
        <Visibility distance="16093.40" />
        <AirPressure pressure="1008" />
      </div>
    </div>
  );
}
