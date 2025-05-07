import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import React from "react";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const showPasswordFun = (e) => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate("/home");
      Cookies.set("username", username, { expires: 7 }); // Set a cookie with the username
      // Redirect to the home page or perform any other action
    } else {
      setError("Invalid username or password");
      // Optionally, you can clear the input fields
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={handleUsernameChange}
            type="text"
            id="username"
            name="username"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handlePasswordChange}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            className="form-input"
            required
          />
        </div>

        <div className="checkbox-group">
          <input
            onChange={showPasswordFun}
            id="showPass"
            type="checkbox"
            className="form-checkbox"
          />
          <label htmlFor="showPass">Show Password</label>
        </div>

        <div className="signup-text">
          <Link to="/signup" className="signup-link">
            Don’t have an account? Sign up
          </Link>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
