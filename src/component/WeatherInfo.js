import React from 'react'


const WeatherInfo = ({ tempInfo }) => {
        const {
        temp,
        humidity,
        pressure,
        name,
        speed,
        country,
        sunset
        } = tempInfo;

        let sec = sunset;
        let date = new Date(sec * 1000);
        let SunsetTime = `${date.getHours()} : ${date.getMinutes()}`;

        

   return (
        <>
          <article className="Info">
        <div className="Info-container">
          <div className="icon">
            <i className="wi wi-day-cloudy"></i>
          </div>
          <div className="weather-info">
            <div className="temperature">
              <span>{temp}°C</span>
            </div>
            <div className="discription">
              <div className="weather-condition">SUNNY,</div>
              <div className="place">{name},{country}</div>
            </div>
            <div className="date">{new Date().toLocaleString()}</div>
          </div>
          <div className="extra-Info">
            <div className="minmaxInfo">
              <div className="two-side-section">
                <p>
                  <i className={"wi wi-sunset"}></i>
                </p>
                <p className="leftside-Info">
                  {SunsetTime} PM<br />
                  Sunset
                </p>
              </div>
            </div>
            <div className="minmaxInfo">
              <div className="two-side-section">
                <p>
                  <i className={"wi wi-humidity"}></i>
                </p>
                <p className="leftside-Info">
                {humidity}<br />
                  Humidity
                </p>
              </div>
            </div>
            <div className="minmaxInfo">
              <div className="two-side-section">
                <p>
                  <i className={"wi wi-rain"}></i>
                </p>
                <p className="leftside-Info">
                  {pressure}<br />
                  Pressure
                </p>
              </div>
            </div>
            <div className="minmaxInfo">
              <div className="two-side-section">
                <p>
                  <i className={"wi wi-strong-wind"}></i>
                </p>
                <p className="leftside-Info">
                  {speed}<br />
                  Speed
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>  
        </>
    )
}

export default WeatherInfo
