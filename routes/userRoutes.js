const express = require("express");
const { registerUser, getUserProfile } = require("../Controller/userController");


const router = express.Router();

router.post("/register", registerUser);
router.get("/profile",  getUserProfile);

module.exports = router;
