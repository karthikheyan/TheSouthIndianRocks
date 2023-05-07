import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <form>
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
