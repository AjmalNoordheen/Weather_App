import React, { useEffect, useState } from 'react';
import Input from './Components/Input';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecaste from './Components/Forecaste';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getWeatherByCity } from './Constants/Services';

function App() {
  const [city, setCity] = useState('kannur') /* For showing the details of kannur on initial Rendering*/
  const [data, setData] = useState({});
  const [latlon, setLatLon] = useState();


  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherData = await getWeatherByCity(city); /* calling function for getting weather */
        setLatLon( weatherData.latLon );
        setData(weatherData);
      } catch (error) {
        console.error(error);
        toast.error('Error fetching weather data for the location');
      }
    };
    fetchWeatherData();
  }, [city]);

  
  return (
    <div className='w-screen flex justify-center bg-gradient-to-tr from-blue-400 to-blue-700 items-center h-full md:py-3 overflow-hidden'>
      <div className='w-full md:w-11/12 lg:w-10/12 xl:w-7/12 py-3 px-2 border bg-white bg-opacity-10  rounded-lg overflow-hidden min-h-screen h-[95%]'>
        
        <Input city={city} setLatLon={setLatLon} setCity={setCity} />
        <TimeAndLocation name={data.name} />
        <TemperatureAndDetails allData={data} />                         {/* Components listed */}
        <Forecaste forecaste={latlon} title={'Hourly forecast'} />
        <Forecaste forecaste={latlon} title={'Daily forecast'} />

      </div>
      <ToastContainer position='top-right' />
    </div>
  );
}

export default App;
