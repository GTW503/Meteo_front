import React from 'react';
import './SignUpPage.css';

const SignUpPage: React.FC = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1>Créer un Compte</h1>
        <form>
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Prénoms" />
          <input type="email" placeholder="Adresse Email" />
          <input type="password" placeholder="Mot de Passe" />
          <input type="password" placeholder="Confirmer le Mot de Passe" />
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
