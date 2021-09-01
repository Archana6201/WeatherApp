import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("Muzaffarpur");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
   
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=c5526f4a32717cce3f63dc341a5487a0`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
   
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div className="main-container">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button type="button" onClick={getWeatherInfo}>
          Search
        </button>
      </div>
      <WeatherInfo tempInfo={tempInfo} />
    </div>
  );
};

export default Temp;
