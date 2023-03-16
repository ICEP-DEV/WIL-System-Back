const conn = require('../config/db')
module.exports = {
create: (data, callBack) => {
    conn.query(
      `insert into student(student_no, initials, surname, email, itsPin) 
                values(?,?,?,?,?)`,
      [
        data.student_no,
        data.initials,
        data.surname,
        data.email,
        data.itsPin,
       
       
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  getUserByStudentNum: (student_no, callBack) => {
    conn.query(
      `select * from student where student_no = ?`,
      [student_no],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },


  getStudentInfo: callBack => {
    conn.query(
      `Select A.student_no,A.initials, A.surname, B.dep_id,dep_name,c.roles  
      FROM student A,stud_dep B,responsibility C, department D 
      WHERE B.dep_id = D.dep_id 
      AND C.dep_id = D.dep_id 
      And  A.student_no = B.student_no`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};