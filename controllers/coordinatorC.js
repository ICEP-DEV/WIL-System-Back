const {
  getStudEvaluation,
  getStudEvaluationById,
  getStudentReport,
  getStudentReportId,
} = require("../service/coodinatorS");

module.exports = {

/////////////////////////////////////////////////////////////
StudEvaluation:(req, res) => {
  getStudEvaluation((err, results) => {
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

/////////////////////////////////////////////////////////////
StudEvaluationById:(req, res) => {
  const student_no = req.params.student_no
  console.log(student_no);
  getStudEvaluationById(student_no,(err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if(!results){
      return res.json({
        success: 0,
        message :"Record not Found"
      });
    }
    return res.json({
      success: 1,
      data: results
    });
  });
},









  /////////////////////////////////////////////////////////////
  StudentReport: (req, res) => {
    getStudentReport((err, results) => {
     
      if (err) {
        console.log(err);
        return;
      }
      console.log("In the controller",results)
      return res.json({
        success: 2,
        data: results,
      });
    });
  },

  /////////////////////////////////////////////////////////////
  StudentReportId: (req, res) => {
    const student_no = req.params.student_no;
    console.log(student_no);
    getStudentReportId(student_no, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found",
        });
      }
      return res.json({
        success: 3,
        data: results,
      });
    });
  },
};
