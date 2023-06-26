require("dotenv").config();
const express = require("express");
const router = express.Router();
const {registerMentor} = require("../controllers/mentorC")

router.post("/register", registerMentor)

module.exports = router;