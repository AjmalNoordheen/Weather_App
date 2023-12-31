import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { API_KEY, FORECAST_BASE_URL } from '../Constants/Services';

function Forecaste({ title, forecaste }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Check if forecaste.lat and forecaste.lon exist before making the API call
    if (forecaste?.lat && forecaste?.lon) {
      axios
        .get(`${FORECAST_BASE_URL}?lat=${forecaste.lat}&lon=${forecaste.lon}&appid=${API_KEY}`)
        .then((res) => {
            if(title === 'Daily forecast'){
                setData(res.data.list.filter((item, index) => index % 8 === 0));
            }else{
                setData(res.data.list.filter((item, index) => index < 6 && index > 0));
            }
        })
        .catch((error) => {
          console.error('Error fetching forecast data:', error);
        });
    }
  }, [forecaste]);

  return (
    <div className='p-3 w-11/12'>
      <div className='flex items-center justify-start'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2' />
      <div className='flex items-center justify-between text-white'>
        {data
          ? data.map((item) => (
              <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>{title==="Daily forecast" ?new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })
                :new Date(item.dt_txt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                {console.log(item)}
                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className='w-11/12 my-1' alt='' />
                <p className='font-medium'>{(item.main.temp- 273.15).toFixed(0)}°</p>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
}

export default Forecaste;
