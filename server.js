// filepath: /Users/mc/Desktop/Devops Assignment/user-service/src/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const { createUserTable } = require("./models/userModel");

dotenv.config();
const app = express();

// Allow all origins for CORS (for development purposes)
app.use(cors());

app.use(bodyParser.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  try {
    await createUserTable(); // Ensure DB table exists
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error("Error during server startup:", err.message);
    process.exit(1); // Exit the process with an error code

  }
});