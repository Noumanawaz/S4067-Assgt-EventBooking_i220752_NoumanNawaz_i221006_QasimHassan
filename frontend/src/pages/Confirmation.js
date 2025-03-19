// src/pages/Confirmation.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/confirmation.css";

const Confirmation = () => {
  const navigate = useNavigate();

  // Static booking confirmation details (Multiple bookings)
  const bookingDetails = [
    {
      booking_id: 12345,
      event_name: "Tech Conference 2025",
      date: "2025-05-10",
      tickets: 2,
      status: "CONFIRMED",
    },
    {
      booking_id: 12347,
      event_name: "Startup Pitch Night",
      date: "2025-07-20",
      tickets: 1,
      status: "CONFIRMED",
    }
  ];

  return (
    <div className="confirmation-container">
      <h1>Booking Confirmations 🎉</h1>
      {bookingDetails.map((booking) => (
        <div key={booking.booking_id} className="confirmation-card">
          <p><strong>Booking ID:</strong> {booking.booking_id}</p>
          <p><strong>Event:</strong> {booking.event_name}</p>
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Tickets:</strong> {booking.tickets}</p>
          <p className="status">{booking.status}</p>
        </div>
      ))}
      <button className="back-btn" onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Confirmation;
