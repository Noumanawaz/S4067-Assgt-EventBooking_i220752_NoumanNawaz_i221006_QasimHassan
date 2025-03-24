// src/pages/Booking.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/booking.css";

const Booking = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [tickets, setTickets] = useState(1);

  // Static event data (replace this with API call later)
  const events = [
    { id: 1, name: "Tech Conference 2025", date: "2025-05-10", tickets: 50 },
    { id: 2, name: "Music Festival", date: "2025-06-15", tickets: 30 },
    { id: 3, name: "Startup Pitch Night", date: "2025-07-20", tickets: 20 },
  ];

  // Find the selected event
  const event = events.find((e) => e.id === parseInt(eventId));

  if (!event) {
    return <h2>Event not found</h2>;
  }

  // Handle Booking (static for now, no backend call)
  const handleBooking = () => {
    alert(`Booking confirmed for ${tickets} tickets to ${event.name}!`);
    navigate("/confirmation"); // Redirect to confirmation page
  };

  return (
    <div className="booking-page">
      <h1>Book Tickets for {event.name}</h1>
      <p className="booking-date">Date: {event.date}</p>
      <p className="booking-tickets">Available Tickets: {event.tickets}</p>

      <label className="booking-label">Number of Tickets:</label>
      <input
        type="number"
        min="1"
        max={event.tickets}
        value={tickets}
        onChange={(e) => setTickets(e.target.value)}
        className="booking-ticket-input"
      />

      <button className="booking-confirm-btn" onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;