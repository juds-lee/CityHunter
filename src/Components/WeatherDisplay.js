import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDisplay = ({city, feelsLike, degrees } ) => {  
  const [torontoDegrees, setTorontoDegrees] = useState("");
  const [torontoFeelsLike, setTorontoFeelsLike] = useState("");

  useEffect(() => {
    // get the latitude and longitute of the city user types in
    const torontoLatLon = {
      method: "get",
      url: `https://api.openweathermap.org/geo/1.0/direct`,
      params: {
        appid: "3d91ba5b3c11d13158a2726aab902a0b",
        q: "toronto",
      },
    };
   axios(torontoLatLon)
      .then((response) => {
        const results = response.data[0];
        torontoCoordinates(results)
      })
      .catch(function (error) {
        console.log(error);
      });

    const torontoCoordinates = (result) => {
      let lat = result.lat
      let lon = result.lon
    //   setTorontoLat(lat);
    //   setTorontoLon(lon);
    //   console.log("lat and lon:", lat, lon)
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
          setTorontoFeelsLike(feelsLikeRound);
          const temp = results.temp - 273.15;
          const tempRound = Math.round(temp);
          setTorontoDegrees(tempRound);
          console.log("feelsLike:", feelsLike, "temp:", temp)
        })
        .catch((error) => {
          console.log(error);
        });
      }
  }, []);
    if (!city) {
        return(
            <div>
                <h3>Weather Forecast</h3>
                <h3>Weather Forecast in Toronto</h3>
                <h4>{`Temperature: ${torontoDegrees}°C`}</h4>
                <h4>{`Feels Like: ${torontoFeelsLike}°C`}</h4>
        </div>
        )
    } else if (city && feelsLike && degrees){
        return(
        <div>
        <h3>{`Weather Forecast in ${city}`}</h3>
        <h4>{`Temperature: ${degrees}°C`}</h4>
        <h4>{`Feels Like: ${feelsLike}°C`}</h4>
        </div>
        )
    }
}

export default WeatherDisplay;
