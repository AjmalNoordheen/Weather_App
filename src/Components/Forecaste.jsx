import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_KEY, FORECAST_BASE_URL } from '../Constants/Services';
import LoaderSkelton from "./LoaderSkelton";

function Forecaste({ title, forecaste }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (forecaste?.lat && forecaste?.lon) {
          const response = await axios.get(`${FORECAST_BASE_URL}?lat=${forecaste.lat}&lon=${forecaste.lon}&appid=${API_KEY}`);
          if (title === 'Daily forecast') {
            setData(response.data.list.filter((item, index) => index % 8 === 0));
          } else {
            setData(response.data.list.filter((item, index) => index < 6 && index > 0));
          }
        }
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchData();
  }, [forecaste, title]);

  if (!data.length) {
    return (
      <LoaderSkelton num={5} type={'forecast'}/>
    );
  }

  return (
  <div className='w-full flex flex-col items-center my-10 space-y-5'> 
    <div className='p-3 w-11/12'>
      <div className='flex items-center justify-start'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2' />
      <div className='flex items-center justify-between text-white'>
        {data && data.map((item) => (
          <div key={item.dt_txt} className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
              {title === "Daily forecast"
                ? new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })
                : new Date(item.dt_txt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
            </p>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className='w-11/12 my-1' alt='' />
            <p className='font-medium'>{(item.main.temp - 273.15).toFixed(0)}°</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Forecaste;
