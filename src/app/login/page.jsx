'use client'

import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { useState } from 'react';
import userPool from '../UserPool';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!username || !password){
      setError('Compile all the fields')
    }

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
        
      },
      onFailure: (err) => {
        console.error('Login error:', err);

        if (err.code === 'UserNotConfirmedException') {
          setError('User not confirmed. Check your email to confirm your account. <a href="/signup/verify_account">Verify Account</a>.');
          setPassword('')
        } else if (err.code === 'NotAuthorizedException') {
          setError('Incorrect username or password.');
          setPassword('')
        } else {
          console.log('Unknown error:', err.message || err);
        }
      },
    });
  };

  return (
    <div id='login'>
      <form onSubmit={handleSubmit}>
        <h2>Hello, welcome back to VREAL</h2>
        <p className='text-muted'>Enter your credentials to log in to VREAL</p>

        <div className="form-floating mb-3 w-100">
          <input
            type="text"
            className="form-control"
            id="floatingUsername"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="floatingUsername">Username</label>
        </div>

        <div className="form-floating mb-3 w-100">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        {error && <div className="error-login">{error}</div>}

        <button type="submit">Login</button>
        <a href='/signup'>Don't have an account? Sign up.</a>
      </form>
    </div>
  );
};

export default Login;