const pool = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    console.log("Register request received:", { name, email });
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await pool.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, hashedPassword]
      );
  
      res.status(201).json({ message: "User registered", user: result.rows[0] });
    } catch (err) {
      console.error("Error registering user:", err.message);
      res.status(400).json({ error: err.message });
    }
  };
  

// ✅ Modified getUserProfile without Middleware
const getUserProfile = async (req, res) => {
  try {
    // Extract userId from query parameter (or request body)
    const { userId } = req.query; // OR req.body.userId if sent via request body

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const result = await pool.query("SELECT id, name, email FROM users WHERE id = $1", [userId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerUser, getUserProfile };
