require("dotenv").config();
const express = require("express");
const router = express.Router();
var multer = require('multer')
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
  uploadPlacementLetters
} = require("../controllers/studentC");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, './uploads');
  },
  filename: function (req, file, cb) {
     cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });


router.post("/", createUser);
router.post("/login", login);
router.get("/info/:student_no", StudentInfoById);
router.get("/intern", internEvaluation);
router.post("/answer", answers);
router.post("/studReport",studReport)
router.post("/logBook", monthlyLogbook)
router.put("/logBook",monthlyLogUpdate)
router.post("/forms",willForms)
router.post("/uploadFolder", upload.single('avatar'),uploadPlacementLetters)


module.exports = router;
