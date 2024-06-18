import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/MyNavbar';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "user" && password === "pass") { 
      navigate('/home'); // Redirige vers la page d'accueil après connexion
    } else {
      alert('Identifiants incorrects');
    }
  };

  const style = {
    loginContainer: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#f0f8ff'
    },
    formContainer: {
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      padding: '2rem',
      backgroundColor: 'white',
      width: '100%',
      maxWidth: '400px'
    },
    formTitle: {
      marginBottom: '1rem',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    inputField: {
      marginBottom: '1rem'
    },
    loginButton: {
      width: '100%',
      padding: '10px',
      fontSize: '16px'
    },
    signUpLink: {
      display: 'block',
      marginTop: '1rem',
      textAlign: 'center'
    }
  };

  return (
    <>
      <Navbar /> 
      <div style={style.loginContainer}>
        <div style={style.formContainer}>
          <h2 style={style.formTitle}>Connexion</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">E-mail</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={style.inputField}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={style.inputField}
              />
            </div>
            <button type="submit" className="btn btn-primary" style={style.loginButton}>Se Connecter</button>
          </form>
          <Link to="/formulaire" style={style.signUpLink}>Vous n'avez pas de compte ? Inscrivez-vous ici</Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
