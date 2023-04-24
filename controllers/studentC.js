const {
  create,
  getUserByAdmin,
  getUserByStudent,
  getUserByRegistrar,
  //getUserByStudentNum,
  getStudentInfoById,
  internshipEvaluation,
  evaluationAnswers,
  getStudentSubmitted,
  getStudEvaluationbyId,
  submitReport,
  monthlyLog,
  updateMonthlyLog
  
} = require("../service/studentS");
const { genSaltSync, hashSync, compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

module.exports = {



  createUser: (req, res) => {
    const body = req.body;
    const userType = body.userType
    console.log(userType); 
    const salt = genSaltSync(10);
    body.itsPin = hashSync(body.itsPin, salt);

    if (userType === 'student') {
      create(body, userType,(err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.status(200).json({
          success: 1,
          data: results,
        });
      });
    } else if (userType === 'admin') {
      create(body, userType,(err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.status(200).json({
          success: 1,
          data: results,
        });
      });
    } else if (userType === 'registrar') {
      create(body, userType,(err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
        return res.status(200).json({
          success: 1,
          data: results,
        });
      });
    } else {
      return res.status(400).json({
        success: 0,
        message: "Invalid user type",
      });
    }
  },


/////////////////////////////////////////////////////////////

  login: (req, res) => {
   // const { user_type, username, password } = req.body;
   const body = req.body;
   const userType = body.userType
   console.log(userType);
    if (userType == "admin") {
      getUserByAdmin(body.admin_no, userType,(err, results) => {
        if (err) {
          console.log(err);
        }
        if (!results) {
          return res.json({
            success: 0,
            data: "Invalid admin number or password",
          });
        }
        const result = compareSync(body.itsPin, results.itsPin);
        if (result) {
          results.itsPin = undefined;
          const jsontoken = sign({ result: results, userType: userType }, process.env.JWT_KEY, {
            expiresIn: "1h",
          });
          
          return res.json({
            success: 1,
            message: "login successfully",
            token: jsontoken,
            data: results
          });
        } else {
          return res.json({
            success: 0,
            data: "Invalid student number or password",
          });
        }
      });
    } else if (userType === "student") {
      getUserByStudent(body.student_no, userType,(err, results) => {
        if (err) {
          console.log(err);
        }
        if (!results) {
          return res.json({
            success: 0,
            data: "Invalid student number or password",
          });
        }
        const result = compareSync(body.itsPin, results.itsPin);
        if (result) {
          results.itsPin = undefined;
          const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
            expiresIn: "1h",
          });
          return res.json({
            success: 1,
            message: "login successfully",
            token: jsontoken,
            data: results
          });
        } else {
          return res.json({
            success: 0,
            data: "Invalid admin number or password",
          });
        }
      });
    } else if (userType === "registrar") {
      getUserByRegistrar(body.registrar_no, userType,(err, results) => {
        if (err) {
          console.log(err);
        }
        if (!results) {
          return res.json({
            success: 0,
            data: "Invalid registrar number or password",
          });
        }
        const result = compareSync(body.itsPin, results.itsPin);
        if (result) {
          results.itsPin = undefined;
          const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
            expiresIn: "1h",
          });
          return res.json({
            success: 1,
            message: "login successfully",
            token: jsontoken,
            data: results
          });
        } else {
          return res.json({
            success: 0,
            data: "Invalid registrar number or password",
          });
        }
      });
    } else {
      return res.json({
        success: 0,
        data: "Invalid user type",
      });
    }
  },
  
/////////////////////////////////////////////////////////////

StudentInfoById: (req, res) => {
    const student_no = req.params.student_no
  
    getStudentInfoById(student_no,(err, results) => {
      if (err) {
        console.log(err);
        return;
      }
   
      return res.json({
        success: 8,
        data: results
      });
    });
  },
////////////////////QUESTIONS AND ANSWERS/////////////////////////////////////////
  answers: (req, res) => {
    const data = req.body;
    console.log(data);
    evaluationAnswers(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },

/////////////////////THE QUESTIONS FOR THE EVALUATION////////////////////////////////////////
  internEvaluation: (req, res) => {
    internshipEvaluation((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        
        success: 1,
        data: results
        
      });
    });
  },


///////////////////////SUBMIT REPORT//////////////////////////////////////
studReport: (req, res) => {
  const data = req.body;
  //console.log(data);
  submitReport(data, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      data: results
    });
  });
},

 //////////////////////MONTHLY LOGBOOK REPORT///////////////////////////
monthlyLogbook: (req,res) => {
  const data = req.body;
  monthlyLog(data, (err, results) =>{
    if(err){
      console.log(err);
      return;
    }
    return res.json({
      success: 1,
      data: results
    });
  })
},

//////////////////////UPDATEMONTHLY LOGBOOK REPORT///////////////////////////

monthlyLogUpdate: (req,res) => {
const body = req.body
  updateMonthlyLog(body, (err,rsults)=>{
    if(err){
      console.log(err);
      return res.json({
        success: 0,
        message: err.message
      });
    }
    return res.json({
      success :1,
      message: "Update successfully!"
    });
  })
  },


  




};



