import React, {useState} from 'react';

import {FetchWeather} from './api/fetchWeather';
import './App.css';

const App =()=>{
    const [query,setQuery]= useState('');

    const[Weather,setWeather]=useState({});

    const search=async(e)=>{
        if(e.key==="Enter")
        {
            const data= await FetchWeather(query);

            console.log(data);
            setWeather(data);
            setQuery("");
        }
    }
    return(
        <div className="main-container">
            <input type="text" className="search" placeholder="search...." value={query} onChange={(e)=>setQuery(e.target.value)} onKeyPress={search}/>
       {Weather.main && (
<div className="city">
<h2 className="city-name">
    <span>{Weather.name}</span>
    <sup>{Weather.sys.country}</sup>
    <div className="city-temp">
    {Math.round(Weather.main.temp)}
    <sup>&deg;C</sup>
    </div>
    <div className="info">
        <p>{Weather.weather[0].description}</p>
    </div>
</h2>
</div>
       )};
        </div>
    );
}


export default App;