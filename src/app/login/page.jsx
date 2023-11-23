'use client'


/* 
62qgftf12aegrocjpjbnv5gus8

us-east-1_gBZIYM2wT */

import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { useState } from 'react';
import userPool from '../UserPool';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authenticationData = {
      Username: username,
      Password: password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

  
    const userData = {
      Username: username,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (session) => {
        console.log('Login success:', session);
        // Qui puoi navigare a un'altra pagina o gestire il login con successo
      },
      onFailure: (err) => {
        console.error('Login error:', err);

        if (err.code === 'UserNotConfirmedException') {
          setError('Utente non confermato. Controlla la tua email per confermare il tuo account. <a href="/signup/verify_account">Verifica Account</a>.');
        } else if (err.code === 'NotAuthorizedException') {
          setError('Nome utente o password errati.');
        } else {
          console.log('Errore sconosciuto:', err.message || err);
        }
      },
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        {error && <div>{error}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
