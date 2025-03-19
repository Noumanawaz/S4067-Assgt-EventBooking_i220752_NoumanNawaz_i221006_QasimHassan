// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  // Static event data (Backend is not running yet)
  const events = [
    { 
      id: 1, 
      name: "Tech Conference 2025", 
      date: "2025-05-10", 
      location: "San Francisco, CA",
      tickets: 50,
      description: "A leading tech event featuring industry experts and innovations."
    },
    { 
      id: 2, 
      name: "Music Festival", 
      date: "2025-06-15", 
      location: "New York City, NY",
      tickets: 30,
      description: "A live music festival with top artists from around the world."
    },
    { 
      id: 3, 
      name: "Startup Pitch Night", 
      date: "2025-07-20", 
      location: "Los Angeles, CA",
      tickets: 20,
      description: "Entrepreneurs pitch their ideas to investors and industry leaders."
    },
  ];

  return (
    <div className="home-container">
      <h1>Upcoming Events</h1>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h2>{event.name}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Available Tickets:</strong> {event.tickets}</p>
            <p className="event-description">{event.description}</p>
            <button 
              className="book-btn"
              onClick={() => navigate(`/book/${event.id}`)}
            >
              Reserve Your Spot
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
