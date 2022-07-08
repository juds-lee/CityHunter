import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Search = ({city, setLat, setLon, lat, lon}) => {
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
      let latitude = result.lat
      let longitude = result.lon
      setLat(latitude);
      setLon(longitude);
      console.log("lat and lon:", latitude, longitude)
      
    //   weatherAppInfo(latitude, longitude)
    };
    // get the weather info with the given lat and lon
//    const weatherAppInfo = (latitude, longitude) => {
//     const callWeatherApp = {
//       method: "get",
//         url: "https://api.openweathermap.org/data/2.5/weather",
//           params: {
//             appid: "3d91ba5b3c11d13158a2726aab902a0b",
//             lat: latitude,
//             lon: longitude
//         }
//     }
//     axios(callWeatherApp)
//         .then((response) => {
//           const results = response.data.main;
//           const feelsLike = results.feels_like - 273.15;
//           const temp = results.temp - 273.15;
//           console.log("feelsLike:", feelsLike, "temp:", temp)
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//       }
    // const ticketMasterSearch = {
    //   method: "get",
    //   url: "https://app.ticketmaster.com/discovery/v2/events.json?",
    //     params: {
    //       apikey: "oxnLOLQ2Ha99JTQNBdGEfxCZqX8NTP8l",
    //       city: city,
    //       size: "20",
    //       sort: "date,asc"
    //     }
    // }
    // axios(ticketMasterSearch)
    //   .then((response) => {
    //      const results = response.data._embedded.events
    //      console.log(results)
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // const newsAppSearch = {
    //   method: "get",
    //   url: "https://newsdata.io/api/1/news?",
    //     params: {
    //       apikey: "pub_901377fbe8485806be97f3ba0c01d38127be",
    //       q: city,
    //       language: "en"
    //     }
    // }
    // axios(newsAppSearch)
    //   .then((response) => {
    //     const news = response.data.results
    //     console.log(news)
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
},[city]);
}

export default Search;