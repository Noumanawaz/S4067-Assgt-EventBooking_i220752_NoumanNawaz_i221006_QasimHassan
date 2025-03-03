const express = require('express');
const { bookTickets } = require('../controllers/bookingController');

const router = express.Router();

router.post('/', bookTickets);

module.exports = router;