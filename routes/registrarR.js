require("dotenv").config();
const express = require("express");
const router = express.Router();

const {

getStudInformation,
StudInfoById,
getPlacementLetterById,
studentById,
formById,
appReject,
appApprove
} = require("../controllers/registrarC");

router.get("/getWilInfoR", getStudInformation);
router.get("/willInfoByIdR/:student_no",StudInfoById);
router.get("/placementLetterR/:student_no/:fileName", getPlacementLetterById);
router.get("/studentsR/:student_no",studentById);
router.get("/admissionFormR/:student_no",formById);
router.post("/appRejectR",appReject);
router.post("/appApproveR",appApprove);


module.exports = router;