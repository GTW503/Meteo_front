import React from 'react';
import './ForecastModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faSun, faCloudRain, faSnowflake, faCloud } from '@fortawesome/free-solid-svg-icons';

const ForecastModal = ({ onClose }) => {
  const weeklyForecast = [
    { day: "Today", temp: "29°", icon: faSun },
    { day: "Tuesday", temp: "28°", icon: faCloudSun },
    { day: "Wednesday", temp: "30°", icon: faCloudRain },
    { day: "Thursday", temp: "29°", icon: faSnowflake },
    { day: "Friday", temp: "26°", icon: faCloud },
    { day: "Saturday", temp: "25°", icon: faCloudSun },
    { day: "Sunday", temp: "24°", icon: faCloudRain },
  ];

  return (
    <div className="forecast-modal">
      <div className="modal-header">
        <button onClick={onClose}>Back</button>
        <h2>7-DAY FORECAST</h2>
      </div>
      <div className="modal-body">
        {weeklyForecast.map((forecast, index) => (
          <div key={index} className="forecast-item">
            <FontAwesomeIcon icon={forecast.icon} />
            <span>{forecast.day}</span>
            <span>{forecast.temp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastModal;
