require("dotenv").config();
const express = require("express");
const router = express.Router();
//const { checkToken } = require("../auth/token_validation");
const {

getStudInformation,
StudInfoById
} = require("../controllers/adminC");

router.get("/getWilInfo", getStudInformation);
router.get("/willInfoById/:student_no",StudInfoById)
module.exports = router;