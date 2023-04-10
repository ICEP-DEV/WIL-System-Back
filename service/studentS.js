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


  getAllLectures: callBack => {
    conn.query(

     ` SELECT * 
      FROM wil_coordinator A, department B
      WHERE A.dept_id = B.dept_id`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },




  internshipEvaluation: callBack => {
    conn.query(

      "SELECT * FROM evaluation",
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  evaluationAnswers: (data, callBack) => {
    console.log(data);
    conn.query(
      //INSERT INTO `evaluation_criteria`( `student_no`, `wilCoord_id`, `evaluation_id`, `intern_criteria`) VALUES (218049799,2235,'Always');
      `insert into evaluation_criteria(student_no, wilCoord_id, evaluation_id, intern_criteria) 
                values(?,?,?,?)`,
      [
        data.student_no,
        data.wilCoord_id,
        data.evaluation_id,
        data.intern_criteria
    
       
       
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
//To be used and moved to wil coordinator service 
  getStudentSubmitted: callBack => {
    conn.query(

     ` SELECT * 
     FROM student A, department B, wil_coordinator C, stud_dep D 
     WHERE A.student_no = D.student_no
     AND B.dept_id = C.dept_id
     AND B.dept_id = D.dept_id;`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getStudEvaluationbyId:  (student_no, callBack) => {
   // console.log(student_no);
    conn.query(

     ` SELECT * 
     FROM student A, evaluation B, evaluation_criteria C
     WHERE A.student_no = ?
     AND A.student_no = C.student_no
     AND B.evaluation_id = C.evaluation_id`,
      [student_no],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  // getUserByUserId: (id, callBack) => {
  //   pool.query(
  //     `select id,firstName,lastName,gender,email,number from registration where id = ?`,
  //     [id],
  //     (error, results, fields) => {
  //       if (error) {
  //         callBack(error);
  //       }
  //       return callBack(null, results[0]);
  //     }
  //   );
  // },

};