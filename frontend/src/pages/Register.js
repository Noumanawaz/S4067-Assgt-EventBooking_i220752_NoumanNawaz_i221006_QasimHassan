// src/pages/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle form submission (No API call yet)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userData.name || !userData.email || !userData.password) {
      setError("All fields are required!");
      return;
    }

    // Simulating successful registration
    alert("Registration Successful!");
    navigate("/login"); // Redirect to login after registration
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="register-form">
        <input type="text" name="name" placeholder="Full Name" value={userData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Register;
