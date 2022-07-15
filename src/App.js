import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Newscatcher from './Components/Newscatcher';
import Ticketmaster from './Components/Ticketmaster';
import WeatherDisplay from './Components/WeatherDisplay';

function App() {
  const [city, setCity] = useState(""); 
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [ degrees, setDegrees] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const handleCitySearch = (e) => {
    e.preventDefault(); 
     setCity(e.target[0].value);
  };

  useEffect(() => {
    // get the latitude and longitute of the city user types in
    const cityLatLon = {
      method: "get",
      url: `https://api.openweathermap.org/geo/1.0/direct`,
      params: {
        appid: "3d91ba5b3c11d13158a2726aab902a0b",
        q: city,
      },
    };
   axios(cityLatLon)
      .then((response) => {
        const results = response.data[0];
        cityCoordinates(results)
      })
      .catch(function (error) {
        console.log(error);
      });

    const cityCoordinates = (result) => {
      let lat = result.lat
      let lon = result.lon
      setLat(lat);
      setLon(lon);
      console.log("lat and lon:", lat, lon)
      weatherAppInfo(lat, lon)
    };
  //get the weather info with the given lat and lon
   const weatherAppInfo = (latitude, longitude) => {
    const callWeatherApp = {
      method: "get",
        url: "https://api.openweathermap.org/data/2.5/weather",
          params: {
            appid: "3d91ba5b3c11d13158a2726aab902a0b",
            lat: latitude,
            lon: longitude
        }
    }
    axios(callWeatherApp)
        .then((response) => {
          const results = response.data.main;
          const feelsLike = results.feels_like - 273.15;
          const feelsLikeRound = Math.round(feelsLike);
          setFeelsLike(feelsLikeRound);
          const temp = results.temp - 273.15;
          const tempRound = Math.round(temp);
          setDegrees(tempRound);
          console.log("feelsLike:", feelsLike, "temp:", temp)
        })
        .catch((error) => {
          console.log(error);
        });
      }
  }, [city]);
  
  return (
    <div className="App">
     <h1>City Hunter</h1>
     <h2>Travelling to a new city? Let me help</h2>
     <form className="enterCity" onSubmit={handleCitySearch}>
        <label htmlFor='query'></label>
        <input
          type='text'
          id='query'
          className='query'
          placeholder='Search for a City!'
        />
        <button>Search</button>
      </form>
  <Ticketmaster 
    lat={lat}
    lon={lon}
  />
  <WeatherDisplay
   city={city}
   degrees={degrees}
   feelsLike={feelsLike}
   />

  <Newscatcher 
    city={city} 
    setLat={setLat} 
    setLon={setLon}
    lat={lat}
    lon={lon}
  />


</div>
);
}

export default App;