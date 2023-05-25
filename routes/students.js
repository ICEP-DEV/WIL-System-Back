require("dotenv").config();
const express = require("express");
const router = express.Router();
//const { checkToken } = require("../auth/token_validation");
const {
  createUser,
  login,
  StudentInfoById,
  internEvaluation,
  answers,
 
  studReport,
  monthlyLogbook,
  monthlyLogUpdate,
  willForms,
  admForms,
  uploadFile
} = require("../controllers/studentC");

router.post("/", createUser);
router.post("/login", login);
router.get("/info/:student_no", StudentInfoById);
router.get("/intern", internEvaluation);
router.post("/answer", answers);
router.post("/studReport",studReport)
router.post("/logBook", monthlyLogbook)
router.put("/logBook",monthlyLogUpdate)
router.post("/forms",willForms)
router.post("/admform",admForms)




module.exports = router;
