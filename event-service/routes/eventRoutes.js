// filepath: /Users/mc/Desktop/Devops Assignment/event-service/routes/eventRoutes.js
const express = require("express");
const { getEvents, getEventById, createEvent, checkEventAvailability } = require("../controllers/eventController");

const router = express.Router();

// Get all events
router.get("/", getEvents);

// Get single event by ID
router.get("/:id", getEventById);

// Create a new event
router.post("/", createEvent);

// Check event availability
router.get("/:id/availability", checkEventAvailability);

module.exports = router;