import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from '../../assets/im1.jpeg';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <div className="logo-container">
        <img src={logo} alt="Weather Logo" />
        <h1>FEAB WEATHER APPLICATION</h1>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default HomePage;
