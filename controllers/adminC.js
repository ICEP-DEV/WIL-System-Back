const {
    getStudInfo,
    getStudInfoById
  } = require("../service/adminS");
  
  module.exports = {
getStudInformation:(req, res) => {
    getStudInfo((err, results) => {
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


  StudInfoById:(req, res) => {
    const student_no = req.params.student_no
    console.log(student_no);
    getStudInfoById(student_no,(err, results) => {
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


  }