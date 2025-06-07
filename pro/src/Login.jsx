import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Example check: hardcoded login
    if (username === 'admin' && password === '1234') {
      alert('Login successful!');
      navigate('/main');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="box">
      <div className="container">
        <p id="t-1">Welcome</p>
        <p id="t-2">Login</p>
        <form className="inp" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button type="submit" className="button">Login</button>
        </form>
        <p id="reg">
          New User? <Link className="reg" to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
