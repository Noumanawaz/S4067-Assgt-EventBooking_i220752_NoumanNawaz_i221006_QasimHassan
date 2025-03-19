// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  // Static user for testing (since backend is not running)
  const fakeUser = { email: "user@example.com", password: "password123" };

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle form submission (without API)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.email || !userData.password) {
      setError("Both fields are required!");
      return;
    }

    // Fake login check (matches static user)
    if (userData.email === fakeUser.email && userData.password === fakeUser.password) {
      setError("");
      alert("Login Successful!"); // Temporary success message
      navigate("/profile"); // Redirect to Profile Page
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Not a user? <Link to="/register">Register now</Link>
      </p>
    </div>
  );
};

export default Login;
