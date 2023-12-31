import React, { useEffect, useState } from "react";
import { UilTemperature, UilWind, UilTear,UilSun } from "@iconscout/react-unicons";
import axios from "axios";


function TemperatureAndDetails({allData,city}) {

if (!allData || !allData.weather || allData.weather.length === 0) {
  return null; // Return null or any default content when allData is not available
}

let sunDetails = [
  {type:'Rise',time:new Date(allData.sys.sunrise*1000).toLocaleTimeString('en',{ hour12: true, hour: '2-digit', minute: '2-digit' })},
  {type:'Set',time:new Date(allData.sys.sunset*1000).toLocaleTimeString('en',{ hour12: true, hour: '2-digit', minute: '2-digit' })},
  {type:'High',time:(allData.main.temp_max- 273.15).toFixed(0)+'°'},
  {type:'Low',time:(allData.main.temp_min- 273.15).toFixed(0)+'°'}
  ]
const {main} = allData.weather[0];

  return (
    <>
      <div className="flex items-center justify-center pb-3 text-xl text-cyan-300">
        <h1>{main?main:''}</h1>
      </div>
      <div className="flex flex-row items-start  w-full  justify-around text-white py-5">
        <div className="flex flex-col mb-1  relative items-center ">
        <img src={`https://openweathermap.org/img/wn/${allData.weather[0].icon}@2x.png`}
         className='' alt='' />
         <small className="font-light text-sm bottom-0 md:absolute">{allData.weather[0].description}</small>
        </div>
        <p className="text-5xl my-auto">{(allData?.main?.temp - 273.15).toFixed(0)}°</p>

        <div className="flex flex-col   items-start justify-between space-y-   gap-4 p-1">
          <div className="flex  font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell :<span className="font-medium ml-1">{(allData?.main?.feels_like - 273.15).toFixed(0)}°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity :<span className="font-medium ml-1">{allData?.main?.humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-     justify-center">
            <UilWind size={18} className="mr-1" />
            Wind  :<span className="font-medium ml-1">{allData?.wind?.speed} km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-3 text-white text-sm py-3">
        {sunDetails.map((item)=><>
        <UilSun/>
        <p className="font-light">
          {item.type}: <span className="font-medium ml-1">{item.time}</span>
        </p>
        <p>|</p> 
        </>)}
        
      </div>
    </>
  );
}



export default TemperatureAndDetails;
