
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Newscatcher = ({city}) => {

  const [newsArray, setNewsArray] = useState([]);
  const [imgUrl, setImgURL] = useState("");

 useEffect(() => {
  const newsTorontoAppSearch = {
      method: "get",
      url: "https://newsdata.io/api/1/news?",
        params: {
          apikey: "pub_901377fbe8485806be97f3ba0c01d38127be",
          q: "toronto",
          language: "en"
        }
    }
    axios(newsTorontoAppSearch)
      .then((response) => {
        const news = response.data.results
        console.log(news)
        setNewsArray(news)
      })
      .catch(function (error) {
        console.log(error);
      });

  // const newsAppSearch = {
  //     method: "get",
  //     url: "https://newsdata.io/api/1/news?",
  //       params: {
  //         apikey: "pub_901377fbe8485806be97f3ba0c01d38127be",
  //         q: city,
  //         language: "en"
  //       }
  //   }
  //   axios(newsAppSearch)
  //     .then((response) => {
  //       const news = response.data.results
  //       console.log(news)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

},[city]);
return (
    <>
      <div className="currentNewsContainer">

        {newsArray.map((i) => (
        <div>
         <div className="newsTitle" key={i.i}>{i.title}</div> 
         <div className="newsAuthor">{i.creator}</div>
        
          <img src={i.image_url}
              alt={i.description}/>
        
       
        </div>
        ))}
      </div>
    </>
  );
};

export default Newscatcher;