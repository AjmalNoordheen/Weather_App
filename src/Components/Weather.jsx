// // src/Weather.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
//   const FORECAST_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

//   useEffect(() => {
//     if (!city) return;

//     const getWeather = async () => {
//       try {
//         setLoading(true);

//         const response = await axios.get(`${API_BASE_URL}?q=${city}&appid=${API_KEY}`);
//         setWeatherData(response.data);
//         setError(null);
//       } catch (error) {
//         setWeatherData(null);
//         setError('Error fetching weather data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     getWeather();
//   }, [city]);

//   const getForecast = async () => {
//     try {
//       const response = await axios.get(`${FORECAST_BASE_URL}?q=${city}&appid=${API_KEY}`);
//       // Extracting 5-day forecast data (assuming the API provides data in 3-hour intervals)
//       const forecastData = response.data.list.filter((item, index) => index % 8 === 0);
//       setWeatherData((prevData) => ({ ...prevData, forecast: forecastData }));
//     } catch (error) {
//       setError('Error fetching forecast data.');
//     }
//   };

//   return (
//     <div>
//       {/* <h1>Weather App</h1>
//       <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
//       <button onClick={getWeather}>Get Weather</button>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}

//       {weatherData && (
//         <div>
//           <h2>{weatherData.name}</h2>
//           <p>{weatherData.weather[0].description}</p>
//           <p>Temperature: {weatherData.main.temp} °C</p>
//           <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
//           <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>

//           <button onClick={getForecast}>Get Forecast</button>

//           {weatherData.forecast && (
//             <div>
//               <h3>5-Day Forecast</h3>
//               <ul>
//                 {weatherData.forecast.map((item) => (
//                   <li key={item.dt}>{new Date(item.dt * 1000).toLocaleTimeString()}: {item.main.temp} °C</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default Weather;
