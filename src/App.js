import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Card } from 'semantic-ui-react'


function App() {
  const[location, setLocation] = useState(false);
  const[weather, setWeather] = useState(false);

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
        <Card>
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

        </Card>
      );

    }
  }  


export default App;
