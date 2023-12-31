import { useEffect, useState } from 'react';
import './App.css';
import Input from './Components/Input';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import { API_BASE_URL, API_KEY, FORECAST_BASE_URL, ICON_URL, api } from './Constants/Services';
import axios from 'axios';
import Forecaste from './Components/Forecaste';

function App() {
  const [city, setCity] = useState('kerala');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [latlon,setLatLon] = useState({})
// useEffect(()=>{
//   axios.get(ICON_URL).then((res)=>{
//     console.log(res.data)
//   })
// })
  useEffect(() => {
    
    if (!city) return;
    const getWeather = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}?q=${city}&appid=${API_KEY}`);
        setWeatherData(response.data);
        setError(null);
        setLatLon({lat:response.data.coord?.lat,lon:response.data.coord?.lon})
        if (response.data.coord?.lat) {
            setTimeout(() => {
              axios.get(`${api}/weather?lat=${response.data.coord?.lat}&lon=${response.data.coord?.lon}&appid=${API_KEY}`)
              .then((result) => {setData(result.data)})
            }, 1000);
          }
      } catch (error) {
        setWeatherData(null);
        setError('Error fetching weather data.');
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [city]);

  return (
    <div className='w-screen flex justify-center  bg-gradient-to-bl from-blue-200 to-cyan-100  items-center h-full md:py-3 overflow-hidden'>
    <div className='w-full md:w-11/12 lg:w-10/12 backdrop-blur-3xl xl:w-9/12 py-3 px-2 bg-gradient-to-r from-cyan-500 to-blue-700 h-[95%]
    shadow-md shadow-gray-400'>
      <Input city={city} setCity={setCity}/>
      <TimeAndLocation allData = {data} />
      <TemperatureAndDetails  allData = {data} />
     <div className='w-full flex flex-col items-center my-10 space-y-5'>
     <Forecaste forecaste={latlon} title={'Hourly forecast'} />
      <Forecaste forecaste={latlon} title={'Daily forecast'} />
     </div>
    </div>
    </div>
    
  );
}

export default App;
