import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/NC.png";

export const Header = () => {
    const [Data,setData] = useState('')
    useEffect(()=>{
        const weatherData = ()=>{
            axios.get('https://api.openweathermap.org/data/2.5/weather?lat=48.137154&lon=11.576124&appid=7224b1142289b23c78751f500dace4e9').then((data)=>{
                setData(data.data)
            })
        }
        
    },[])
    const dateStr = Date.now()
    const today = new Date(dateStr).toDateString()  

    return (
      <header>
          <div className='date-time'>
              <span>{today}</span>
          </div>
          <div className='logo'>
              <img src={logo} alt="nc-news logo"/>
          </div>
          <div className='weather-stock'>
            <span>{Data.name}</span>
              <span>{"Cloudy "}</span>
              <span>{"Scattred"}</span>
              <p>Temperature: {"250"}</p>
              <p>Min: {"246.5"}</p>
              <p>Max: {"256.5"}</p>
          </div>

      </header>
    )
    
}
