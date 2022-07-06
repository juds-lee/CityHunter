import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [city, setCity] = useState("");
  const [workableObject, setWorkableObject] = useState([]);
  const handleCitySearch = (e) => {
    e.preventDefault(); 
     setCity(e.target[0].value);
  };
  
 useEffect(() => {
  // // get the latitude and longitute of the city user types in
  //   const cityLatLon = {
  //     method: "get",
  //     url: `https://api.openweathermap.org/geo/1.0/direct`,
  //     params: {
  //       appid: "3d91ba5b3c11d13158a2726aab902a0b",
  //       q: city,
  //     },
  //   };
  //  axios(cityLatLon)
  //     .then((response) => {
  //       const results = response.data[0];
  //       cityCoordinates(results)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  //   const cityCoordinates = (result) => {
  //     let latitude = result.lat
  //     let longitude = result.lon
  //     console.log(latitude, longitude)
  //     weatherAppInfo(latitude, longitude)
  //   };
  //   // get the weather info with the given lat and lon
  //  const weatherAppInfo = (latitude, longitude) => {
  //   const callWeatherApp = {
  //     method: "get",
  //       url: "https://api.openweathermap.org/data/2.5/weather",
  //         params: {
  //           appid: "3d91ba5b3c11d13158a2726aab902a0b",
  //           lat: latitude,
  //           lon: longitude
  //       }
  //   }
  //   axios(callWeatherApp)
  //       .then((response) => {
  //         const results = response.data.main;
  //         console.log(results)
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     }

    const ticketMasterSearch = {
      method: "get",
      url: "https://app.ticketmaster.com/discovery/v2/events.json?",
        params: {
          apikey: "oxnLOLQ2Ha99JTQNBdGEfxCZqX8NTP8l",
          city: city,
          size: "20"
        }
    }
    axios(ticketMasterSearch)
      .then((response) => {
         const results = response.data._embedded.events
         console.log(results)
      })
      .catch(function (error) {
        console.log(error);
      });
},[city]);
 

  return (
    <div className="App">
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
    </div>
  );
}

export default App;