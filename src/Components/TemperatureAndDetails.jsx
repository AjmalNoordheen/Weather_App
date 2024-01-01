import React from "react";
import { UilTemperature, UilWind, UilTear } from "@iconscout/react-unicons";
import SunDetails from "./SunDetails";

function TemperatureAndDetails({ allData }) {

  const { weather, main, wind, sys } = allData;

  // Check if weather data is available
  if (weather) {
    return (
      <div className="bg-[#f0f0f0] p-[1rem]  rounded">
        <div className=" flex  flex-row items-center gap-y-3 md:items-start w-full ml-1 justify-around text-white py- sm:mt-3">
          <div className="h-10 w-3/12 bg-[#b0b0b0] ml-4 animate-pulse"/>
          <div className="h-10 w-3/12 bg-[#b0b0b0] ml-4 animate-pulse"/>
          <div className="h-10 w-3/12 bg-[#b0b0b0] ml-4 animate-pulse"/>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Displaying weather type */}
      <div className="flex items-center justify-center mr-1 text-xl text-cyan-300">
        <h1>{weather.main || ""}</h1>
      </div>

      <div className="flex flex-row items-center gap-y-3 md:items-start w-full ml-1 justify-around text-white py-7 sm:mt-3">
        {/* Weather icon */}
        <div className="flex flex-col mb-1 relative items-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            className=""
            alt=""
          />
          <small className="font-light text-sm bottom-0 absolute">
            {weather.description}
          </small>
        </div>

        {/* Current temperature */}
        <p className="text-5xl md:text-6xl my-auto">
          {(main?.temp - 273.15).toFixed(0)}°
        </p>

        {/* Temperature details (Real feel, Humidity, Wind) */}
        <div className="flex flex-col items-start justify-between space-y- gap-4 p-1">
          {/* Real feel temperature */}
          {main && (
            <div className="flex font-light text-sm items-center justify-center">
              <UilTemperature size={18} className="mr-1" />
              Real feel:
              <span className="font-medium ml-1">
                {(main.feels_like - 273.15).toFixed(0)}°
              </span>
            </div>
          )}

          {/* Humidity */}
          {main && (
            <div className="flex font-light text-sm items-center justify-center">
              <UilTear size={18} className="mr-1" />
              Humidity:
              <span className="font-medium ml-1">{main.humidity}%</span>
            </div>
          )}

          {/* Wind */}
          {wind && (
            <div className="flex font-light text-sm items-center justify-center">
              <UilWind size={18} className="mr-1" />
              Wind:
              <span className="font-medium ml-1">{wind.speed} km/h</span>
            </div>
          )}
        </div>
      </div>

      {/* Displaying sun details */}
      {sys && <SunDetails allData={allData} />}
    </>
  );
}

export default TemperatureAndDetails;
