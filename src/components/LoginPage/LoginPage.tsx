import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Connexion en cours...");
    navigate('/weather');
  };

  const handleForgotPassword = () => {
    navigate('/reset-password');
  };

  const handleCreateAccount = () => {
    navigate('/sign-up');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Connexion</h1>
        <input type="text" placeholder="Nom d'utilisateur ou Email" />
        <input type="password" placeholder="Mot de passe" />
        <div className="options">
          <label className="remember-me">
            <input type="checkbox" />
            Se souvenir de moi
          </label>
          <button className="forgot-password" onClick={handleForgotPassword}>
            Mot de passe oublié ?
          </button>
        </div>
        <button className="login-button" onClick={handleLogin}>Connexion</button>
        <p>
          Pas encore de compte ?{' '}
          <button className="create-account" onClick={handleCreateAccount}>
            Créer un compte
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
