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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  getPlacementLetter: (student_no, fileName, callBack) => {
    conn.query(
      `SELECT path FROM placementLetter WHERE student_no = ? AND fileName = ?`,
      [student_no, fileName],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        } else {
          if (results.length > 0) {
            const filePath = results[0].path;
            callBack(null, filePath);
          } else {
            callBack(null, null); // No matching record found
          }
        }
      }
    );
  },
  ////////////////////////////////////////////////////
getStudentById: (student_no, callBack)=>{
 
conn.query(
  `SELECT student_no,fileName,path FROM placementLetter WHERE student_no = ? `,
  [student_no],
  (error, results) => {
    if (error) {
      callBack(error);
    }
    console.log(results);
    return callBack(null, results);
  }
)
},
////////////////////////////////
getformById: (student_no, callback)=>{
conn.query(
  `SELECT * FROM admissionform WHERE student_no = ?`,
[student_no],
(error, results) => {
  if(error){
    callback(error);
  }
  console.log(results);
  return callback(null, results)
}

)
},
  ////////////////////////////////////////////////////
getAppReject: (data, callBack)=>{
  conn.query(
    // INSERT INTO `application`(`app_id`, `student_no`, `comment`) VALUES ('[value-1]','[value-2]','[value-3]')
    `INSERT INTO application(app_id,student_no,comment) VALUES (?,?,?)`,
    [
    data.app_id,
    data.student_no,
    data.comment
    ],
  
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
     }
  )
},

}