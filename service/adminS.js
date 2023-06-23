const conn = require("../config/db");
module.exports = {
    getStudInfo: (callBack) => {
        conn.query(
     
        `SELECT A.initials, A.surname, A.student_no, B.approvedEmployer, B.contactPerson, B.telNumber,
        B.emp_email, B.city, B.postalAddress, B.studyPeriod  FROM student A, wilform B WHERE A.student_no = B.student_no`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },


getStudInfoById: (student_no, callBack) => {
    // console.log(student_no);
    conn.query(
  
    `SELECT A.initials, A.surname, A.student_no, B.approvedEmployer, B.contactPerson, B.telNumber,
    B.emp_email, B.city, B.postalAddress, B.studyPeriod
     FROM student A, wilform B
     WHERE A.student_no = ?
     AND A.student_no = B.student_no`,
      [student_no],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },



}