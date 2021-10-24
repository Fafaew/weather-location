import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { fetchWeather } from "./api/fetchWeather";
import "./App.css";

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const [query, setQuery] = useState("");
  
  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
    }
  };

  let getWeather = async (lat, long) => {
    let res = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
          lang: "pt",
          units: "metric",
        },
      }
    );
    setWeather(res.data);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (location === false) {
    return <Fragment> You need turn on the location in your browser</Fragment>;
  } else if (weather === false) {
    return <Fragment>Loading Weather...</Fragment>;
  } else {
    return (
      <Fragment>
        <div className="main-container">
          <input
            type="text"
            className="search"
            placeholder="Search Another City..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
          {weather.main && (
            <div className="city">
              <h2 className="city-name">
                <span>Weather in {weather.name}</span>
                <sup>{weather.sys.country}</sup>
              </h2>
              <div className="city-temp">
                {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>+
              </div>
              <div className="info">
                <img
                  className="city-icon"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
                <p>{weather.weather[0].description}</p>
              </div>
            </div>
          )}
        </div>
        </Fragment>
    );
  }
}

export default App;
