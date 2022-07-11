
import React from "react";
import { useEffect } from "react";
import axios from "axios";

const Newscatcher = ({city}) => {
 useEffect(() => {
  const newsAppSearch = {
      method: "get",
      url: "https://newsdata.io/api/1/news?",
        params: {
          apikey: "pub_901377fbe8485806be97f3ba0c01d38127be",
          q: city,
          language: "en"
        }
    }
    axios(newsAppSearch)
      .then((response) => {
        const news = response.data.results
        console.log(news)
      })
      .catch(function (error) {
        console.log(error);
      });
},[city]);
}

export default Newscatcher;