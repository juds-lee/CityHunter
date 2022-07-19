import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Ticketmaster = ({city, lat, lon}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://ticketmaster-api-staging.github.io/products-and-docs/widgets/event-discovery/1.0.0/lib/main-widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
    document.body.removeChild(script);
    }
  }, []);

//  useEffect(() => {
//     const ticketMasterSearch = {
//       method: "get",
//       url: "https://app.ticketmaster.com/discovery/v2/events.json?",
//         params: {
//           apikey: "oxnLOLQ2Ha99JTQNBdGEfxCZqX8NTP8l",
//           city: "toronto",
//           size: "20",
//           sort: "date,asc"
//         }
//     }
//     axios(ticketMasterSearch)
//       .then((response) => {
//          const results = response.data._embedded.events
//          console.log("toronto", results)
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   },[]);


  // useEffect(() => {
  //  loadWidget();
  // },[city])

  //  const loadWidget = () => {
  //   const widget = document.createElement("div");
  //     widget.setAttribute("w-type", "event-discovery");
  //     widget.setAttribute("w-tmapikey", "oxnLOLQ2Ha99JTQNBdGEfxCZqX8NTP8l")
  //     widget.setAttribute("w-googleapikey", "YOUR_GOOGLE_API_KEY");
  //     widget.setAttribute("w-keyword", "");
  //     widget.setAttribute("w-theme","simple");
  //     widget.setAttribute("w-colorscheme", "light");
  //     widget.setAttribute("w-width", "350");
  //     widget.setAttribute("w-height", "600");
  //     widget.setAttribute("w-size", "10");
  //     widget.setAttribute("w-border", "0");
  //     widget.setAttribute("w-borderradius", "4");
  //     widget.setAttribute("w-radius", "25");
  //     widget.setAttribute("w-period", "week");
  //     widget.setAttribute("w-layout", "vertical");
  //     widget.setAttribute("w-attractionid", "");
  //     widget.setAttribute("w-promoterid", "");
  //     widget.setAttribute("w-venueid", "");
  //     widget.setAttribute("w-affiliateid", "");
  //     widget.setAttribute("w-segmentid", "");
  //     widget.setAttribute("w-proportion", "custom");
  //     widget.setAttribute("w-titlelink", "off");
  //     widget.setAttribute("w-sorting", "groupByName");
  //     widget.setAttribute("w-id", "id_wrzmw");
  //     widget.setAttribute("w-source", "");
  //     widget.setAttribute("w-branding", "Ticketmaster");
  //     widget.setAttribute("w-latlong", "34.0390107,-118.2672801");      
  //     widget.setAttribute("w-enableinfinityscroll", "true");
  //   }
return (
  //w-latlong={`${lat}, ${lon}`}
<div>
  <div w-type="event-discovery" w-tmapikey="oxnLOLQ2Ha99JTQNBdGEfxCZqX8NTP8l" w-googleapikey="YOUR_GOOGLE_API_KEY" w-keyword="" w-theme="simple" w-colorscheme="light" w-width="350" w-height="600" w-size="10" w-border="0" w-borderradius="4" w-radius="25" w-period="week" w-layout="vertical" w-attractionid="" w-promoterid="" w-venueid="" w-affiliateid="" w-segmentid="" w-proportion="custom" w-titlelink="off" w-sorting="groupByName" w-id="id_wrzmw" w-source="" w-branding="Ticketmaster" w-latlong="34.0390107,-118.2672801"></div>
</div>

)
}


export default Ticketmaster;