'use client'

import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { app } from '../FirebaseConfig';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const auth = getAuth(app);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setError(null);

    if (!username || !password) {
      setError('Compile all the fields');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, username, password);
      const user = auth.currentUser;
      console.log('User logged in:', user);
      localStorage.setItem('user', JSON.stringify(user));
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      setError(`Error during login: ${error.message}`);
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);

    try {
      const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;
      console.log('User logged in with Google:', user);
      localStorage.setItem('user', JSON.stringify(user));
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      setError(`Error during Google login: ${error.message}`);
      console.log(error);
    }
  };

  return (
    <div id='login'>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}>
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
        <div className='google-btn' onClick={handleGoogleLogin}><FcGoogle /> Login with Google</div>
        <a href='/signup'>Don&rsquo;t have an account? Sign up.</a>
      </form>

      
      
    </div>
  );
};

export default Login;
