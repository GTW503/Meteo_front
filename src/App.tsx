import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import ResetPasswordPage from './components/ResetPasswordPage/ResetPasswordPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import WeatherWidget from './components/WeatherWidget/WeatherWidget'; // Importez le widget météo si nécessaire

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/weather" element={<WeatherWidget />} /> {/* Assurez-vous que cette route existe si vous souhaitez l'utiliser */}
      </Routes>
    </Router>
  );
};

export default App;
