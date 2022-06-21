import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const apiKey =  "3d91ba5b3c11d13158a2726aab902a0b";

  const [city, setCity] = useState("");
  const [cityCordinates, setCityCordinates] = useState("");
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
        apikey: "3d91ba5b3c11d13158a2726aab902a0b",
        q: city,
      },
    };
   axios(cityLatLon)
      .then((response) => {
        const cityLat = response.data[0].lat;
        const cityLon =  response.data[0].lon;
        console.log(cityLat, cityLon)
      })
      .catch(function (error) {
        console.log(error);
      });
 });
 
 
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
