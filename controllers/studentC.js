const {
  create,
  getUserByStudentNum,
  getStudentInfoById,
  internshipEvaluation,
  evaluationAnswers,
  getStudentSubmitted,
  getStudEvaluationbyId
} = require("../service/studentS");
const { genSaltSync, hashSync, compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.itsPin = hashSync(body.itsPin, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },

  login: (req, res) => {
    const body = req.body;
    getUserByStudentNum(body.student_no, (err, results) => {
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
          data: "Invalid student number or its pin",
        });
      }
    });
  },


  getStudentInfoById: (req, res) => {
    const student_no = req.params.student_no
  
    getStudentInfoById(student_no,(err, results) => {
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


  getSubmittedStud:(req, res) => {
    getStudentSubmitted((err, results) => {
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


  StudEvaluationbyId:(req, res) => {
    const student_no = req.params.student_no
    console.log(student_no);
    getStudEvaluationbyId(student_no,(err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if(!results){
        return res.json({
          success: 0,
          message :"dfgh"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },

  // getUserByUserId: (req, res) => {
  //   const id = req.params.id;
  //   getUserByUserId(id, (err, results) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     if (!results) {
  //       return res.json({
  //         success: 0,
  //         message: "Record not Found"
  //       });
  //     }
  //     results.password = undefined;
  //     return res.json({
  //       success: 1,
  //       data: results
  //     });
  //   });
  // },

};
