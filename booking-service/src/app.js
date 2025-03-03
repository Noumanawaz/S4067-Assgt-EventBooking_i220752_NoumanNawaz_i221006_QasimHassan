const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const bookingRoutes = require('./routes/bookingRoutes');
const { connectRabbitMQ } = require('./config/rabbitmq');
const pool = require('./config/database');

const app = express();
app.use(bodyParser.json());

app.use('/bookings', bookingRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, async () => {
    console.log(`Booking Service running on port ${PORT}`);
    await connectRabbitMQ();

    // Explicitly connect to the database and log the connection status
    try {
        await pool.connect();
        console.log('Connected to the database');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(-1);
    }
});