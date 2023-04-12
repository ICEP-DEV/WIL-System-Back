require('dotenv').config()
const express = require('express')
const conn = require('../config/db')
const router = express.Router()
const {checkToken} = require("../auth/token_validation")
const {createUser,login,getStudentInfoById,internEvaluation,answers,getSubmittedStud, StudEvaluationbyId} = require("../controllers/studentC")




router.post("/", createUser);
router.post("/login", login);
router.get("/:student_no",checkToken, getStudentInfoById);
router.get("/intern", internEvaluation)
router.post("/answer", answers);
router.get("/intern/list", getSubmittedStud);
router.get("/intern/evaluation/:student_no",checkToken, StudEvaluationbyId);




module.exports = router;