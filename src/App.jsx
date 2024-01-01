import React, { useEffect, useState } from 'react';
import './App.css';
import Input from './Components/Input';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecaste from './Components/Forecaste';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API_KEY, Base_Api, api } from './Constants/Services';

function App() {
  const [city, setCity] = useState('kannur');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [latlon, setLatLon] = useState({});

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(`${Base_Api}?format=json&q=${city}`);
        setLatLon({ lat: response.data[0].lat, lon: response.data[0].lon });
        setName(response.data[0].name);

        if (response.data[0].lat) {
          setTimeout(() => {
            axios
              .get(`${api}/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${API_KEY}`)
              .then((result) => {
                setData({
                  weather: result.data.weather[0],
                  main: result.data.main,
                  wind: result.data.wind,
                  sys: result.data.sys,
                });
                console.log(result.data);
              });
          }, 1000);
        }
      } catch (error) {
        console.log(error);
        toast.error('Error fetching weather data for the location');
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [city]);

  return (
    <div className='w-screen flex justify-center bg-gradient-to-tr from-blue-400 to-blue-700 items-center h-full md:py-3 overflow-hidden'>
      <div className='w-full md:w-11/12 lg:w-10/12 xl:w-7/12 py-3 px-2 border bg-white bg-opacity-10  rounded-lg overflow-hidden min-h-screen h-[95%]'>
        <Input city={city} setLatLon={setLatLon} setCity={setCity} />
        <TimeAndLocation name={name} />
        <TemperatureAndDetails allData={data} />
          <Forecaste forecaste={latlon} title={'Hourly forecast'} />
          <Forecaste forecaste={latlon} title={'Daily forecast'} />
      </div>
      <ToastContainer position='top-right' />
    </div>
  );
}

export default App;
