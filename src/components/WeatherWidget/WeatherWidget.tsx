import React from 'react';
import './WeatherWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faCloud, faCloudRain, faThermometerHalf, faSnowflake, faSmog, faTint, faWind, faEye } from '@fortawesome/free-solid-svg-icons';

const WeatherWidget = () => {
  const forecast = [
    { time: "Now", temp: "29°", icon: faSun },
    { time: "9:00", temp: "27°", icon: faCloud },
    { time: "10:00", temp: "25°", icon: faCloudRain },
    { time: "11:00", temp: "29°", icon: faSnowflake },
    { time: "12:00", temp: "29°", icon: faSmog },
    { time: "13:00", temp: "25°", icon: faCloudRain },
  ];

  return (
    <div className="weather-widget">
      <div className="weather-header">
        <div className="weather-main">
          <h1>29°</h1>
          <p>Cloudy</p>
        </div>
        <div className="weather-buttons">
          <button className="weather-button">Aujourd'hui</button>
          <button className="weather-button">Prévision sur 7 jours</button>
        </div>
      </div>
      <div className="weather-body">
        <div className="hourly-forecast">
          {forecast.map((slot, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={slot.icon} /> {slot.time}
            </div>
          ))}
        </div>
        <div className="hourly-temps">
          {forecast.map((slot, index) => (
            <div key={index}>{slot.temp}</div>
          ))}
        </div>
        <div className="sun-details">
          <div><FontAwesomeIcon icon={faSun} /> Sunrise: 6:22 AM</div>
          <div><FontAwesomeIcon icon={faMoon} /> Sunset: 8:14 PM</div>
        </div>
        <div className="additional-info">
          <div><FontAwesomeIcon icon={faTint} /> Humidity: 78%</div>
          <div><FontAwesomeIcon icon={faWind} /> Wind: 12km/h</div>
        </div>
        <div className="additional-info">
          <div><FontAwesomeIcon icon={faThermometerHalf} /> Feels like: 29°</div>
          <div><FontAwesomeIcon icon={faEye} /> Visibility: 11km</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
