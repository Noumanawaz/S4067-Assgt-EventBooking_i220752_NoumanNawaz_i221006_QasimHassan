// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Event Booking</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create-event">Create Event</Link></li>
          <li><Link to="/confirmation">My Bookings</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
