import axios from "axios";
export const API_KEY = 'cb64db4980a174949cbcca1a21edfcb5';
export const FORECAST_BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
export const api = 'https://api.openweathermap.org/data/2.5'
export const Base_Api = 'https://nominatim.openstreetmap.org/search'


//======Function to fetch weather data by city name ========

export const getWeatherByCity = async (city) => {
    try {
      const response = await axios.get(`${Base_Api}?format=json&q=${city}`);    /* Api call for getting longitude and latitude */

      const latLon = { lat: response.data[0].lat, lon: response.data[0].lon };
      const cityName = response.data[0].name;

      if (latLon.lat) {
        const weatherResponse = await axios.get(
          `${api}/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}`  /* Api call for getting weather and Details  */
        );
  
        const weatherData = {
          weather: weatherResponse.data.weather[0],
          main: weatherResponse.data.main,
          wind: weatherResponse.data.wind,           /* returned data to main App.jsx Component  */
          sys: weatherResponse.data.sys,
          name: cityName,
          latLon:latLon
        };
  
        return weatherData;
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw new Error('Error fetching weather data for the location');
    }
  };


  //======Function to fetch Forecaste of city ========

 export const getForecaste = async(title,forecaste)=>{
    try {
        console.log(forecaste)
        const response = await axios.get(`${FORECAST_BASE_URL}?lat=${forecaste?.lat}&lon=${forecaste?.lon}&appid=${API_KEY}`);

          // Filter the forecast data based on the title
          const filteredData = title === 'Daily forecast'
            ? response.data.list.filter((item, index) => index % 8 === 0)
            : response.data.list.filter((item, index) => index < 6 && index > 0);

            return  filteredData

         
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw new Error('Error fetching weather data for the location');    }
  }
