import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/MyNavbar';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "user" && password === "pass") { 
      navigate('/'); 
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
      padding: '20px', // Adds padding around the form
      backgroundColor: '#f0f8ff' // Very light blue background for the entire page
    },
    formContainer: {
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      padding: '2rem', // Increased padding for better spacing
      backgroundColor: 'white',
      width: '100%', // Full width to accommodate smaller screens
      maxWidth: '400px' // Maximum width of the form
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
        </div>
      </div>
    </>
  );
}

export default LoginPage;
