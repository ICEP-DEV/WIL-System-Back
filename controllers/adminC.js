const {
    getStudInfo,
    getStudInfoById,
    getPlacementLetter,
    getStudentById,
    getformById,
    getAppReject
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
    // console.log(student_no);
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
/////////////////////////////////////////////////////////////////
getPlacementLetterById: (req, res) => {
  const student_no = req.params.student_no;
  const fileName = req.params.fileName;
  
  getPlacementLetter(student_no, fileName, (err, filePath) => {
    if (err) {
      console.log(err);
      return;
    }

    if (filePath) {
      res.download(filePath);
    } else {
      return res.json({
        success: 0,
        message: "Placement letter not found for the specified student and filename."
      });
    }
  });
  
},
///////////////////////////////////////////////////////////////////////////////////
studentById: (req, res) => {
  const student_no = req.params.student_no
  console.log('studentById',student_no);
  getStudentById(student_no,(err, results) => {
    console.log(results);
    if (err) {
      console.log(err);
      return;
    }
    if(!results){
      return res.json({
        success: 0,
        messrsage :"Record not Found"
      });
    }
    return res.json({
      success: 1,
      data: results
    });
  });
},
//////////////////////////////////////////////////////////////////////////////////////
formById: (req, res) => {
  const student_no = req.params.student_no
  // console.log('studentById',student_no);
  getformById(student_no,(err, results) => {
    console.log(results);
    if (err) {
      console.log(err);
      return;
    }
    if(!results){
      return res.json({
        success: 0,
        messrsage :"Record not Found"
      });
    }
    return res.json({
      success: 1,
      data: results
    });
  });
},


appReject: (req, res) => {
  const body = req.body;
  getAppReject(body, (err, rsults) => {
    if (err) {
      console.log(err);
      return res.json({
        success: 0,
        message: err.message,
      });
    }
    return res.json({
      success: 1,
      message: "Update successfully!",
    });
  });
},
  }