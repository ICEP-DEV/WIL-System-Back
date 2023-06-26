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
  uploadPlacementLetters,
  admForms,
  uploadSystemDoc
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
//////////////////////////////////////////////////
const systemStorage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, './systemDoc');
  },
  filename: function (req, file, cb) {
     cb(null, file.originalname);
  }
});
const systemUpload = multer({ storage: systemStorage });



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
router.post("/admform",admForms)
router.post("/uploadSysDoc",systemUpload.single('document'), uploadSystemDoc)

router.get('/student', (req,res,next)=>{
    let sql = `Select A.student_no,A.initials, A.surname, B.dep_id,dep_name,c.roles 
    FROM student A,stud_dep B,responsibility C, department D 
    WHERE B.dep_id = D.dep_id AND B.dep_id =D.dep_id And  A.student_no = B.student_no";`
    conn.query(sql, (err,result)=>{
        if(err) throw err;
        res.status(200).json({result});
});
});


module.exports = router;
