import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Search from './Components/Search';

function App() {
  const [city, setCity] = useState("");
  const handleCitySearch = (e) => {
    e.preventDefault(); 
     setCity(e.target[0].value);
  };

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
  <div 
    w-type="event-discovery" 
    w-tmapikey="oxnLOLQ2Ha99JTQNBdGEfxCZqX8NTP8l" 
    w-googleapikey="YOUR_GOOGLE_API_KEY" 
    w-keyword="" 
    w-theme="simple" 
    w-colorscheme="light" 
    w-width="300" 
    w-height="600" 
    w-size="10" w-border="0" 
    w-borderradius="4" 
    w-radius="25" 
    w-period="week" 
    w-layout="vertical" 
    w-attractionid="" 
    w-promoterid="" 
    w-venueid="" 
    w-affiliateid="" 
    w-segmentid="" 
    w-proportion="xxl" 
    w-titlelink="off" 
    w-sorting="groupByName" 
    w-id="id_3g61ns" 
    w-source="" 
    w-branding="Ticketmaster" 
    w-latlong="34.0390107,-118.2672801" 
    w-enableinfinityscroll="true">
  </div>
  <Search city={city}/>
</div>
);
}

export default App;