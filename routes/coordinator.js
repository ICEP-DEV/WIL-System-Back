require("dotenv").config();
const express = require("express");
const router = express.Router();
//const { checkToken } = require("../auth/token_validation");
const {
StudEvaluation,
StudEvaluationById,    
StudentReportId, 
StudentReport,

} = require("../controllers/coordinatorC");

router.get("/evaluation", StudEvaluation);
router.get("/evaluationID/:student_no",StudEvaluationById);
router.get("/reportID/:student_no", StudentReportId);
router.get("/report",StudentReport );



module.exports = router;
