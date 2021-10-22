import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { fetchWeather } from './api/fetchWeather';
import './App.css'
import { Card } from 'semantic-ui-react'


function App() {
  const[location, setLocation] = useState(false);
  const[weather, setWeather] = useState(false);

  const [query, setQuery] = useState('');
    // const [weather, setWeather] = useState({});

  const search = async (e) => {
    if(e.key === 'Enter') {
        const data = await fetchWeather(query);

        setWeather(data);
        setQuery('');
    }
}

  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data)
  }



  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })    
  }, [])

  if(location === false) {
    return (
    <Fragment>
      Você precisa habilitar a localização no Browser
    </Fragment>
    )
    } else if (weather === false) {
      return (
        <Fragment>
          Carregando o clima...
        </Fragment>
      )    
  } else {
      return (
        <Card >
          <Card.Content>
            <Card.Header className="header">
              <h3>Clima nas suas Coordenadas ({weather['weather'][0]['description']})</h3>  
            </Card.Header>
          <hr />
          <ul className="main">
          <li className="temp">Temperatura atual: {weather['main']['temp']}º</li>
          <li className="temp">Temperatura maxima: {weather['main']['temp_max']}º</li>
          <li className="temp">Temperatura minima: {weather['main']['temp_min']}º</li>
          <li className="temp">pressão: {weather['main']['pressure']}ºhpa</li>
          <li className="temp">Umidade: {weather['main']['humidity']}%</li>
          </ul>
          </Card.Content>
          <div className="main-container">
            <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>+
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>

        </Card>

        
      );

    }
    
  }  


export default App;
