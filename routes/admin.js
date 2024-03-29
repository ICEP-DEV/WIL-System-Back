require("dotenv").config();
const express = require("express");
const router = express.Router();
//const { checkToken } = require("../auth/token_validation");
const {

getStudInformation,
StudInfoById,
getPlacementLetterById,
studentById,
formById,
appReject,
appApprove
} = require("../controllers/adminC");

router.get("/getWilInfo", getStudInformation);
router.get("/willInfoById/:student_no",StudInfoById);
router.get("/placementLetter/:student_no/:fileName", getPlacementLetterById);
router.get("/students/:student_no",studentById);
router.get("/admissionForm/:student_no",formById);
router.post("/appReject",appReject);
router.post("/appApprove",appApprove);

module.exports = router;