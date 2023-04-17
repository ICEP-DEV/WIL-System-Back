const conn = require("../config/db");
module.exports = {


 

  create: (data, userType, callBack) => {
    if (userType === "student") {
      conn.query(
        `INSERT INTO student(student_no, initials, surname, gender, email, itsPin) 
           VALUES (?, ?, ?, ?, ?, ?)`,
        [
          data.student_no,
          data.initials,
          data.surname,
          data.gender,
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
    } else if (userType === "admin") {
      conn.query(
        `INSERT INTO admin(admin_no,a_initials,a_surname,a_email,itsPin) 
           VALUES (?,?,?,?,?)`,
        [data.admin_no, 
         data.a_initials, 
         data.a_surname, 
         data.a_email,
         data.itsPin
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    } else if (userType === "registrar") {
      conn.query(
        `INSERT INTO registrar(registrar_no,r_initials,r_surname,r_email,itsPin) 
           VALUES (?,?,?,?,?)`,
        [data.registrar_no, 
         data.r_initials, 
         data.r_surname, 
         data.r_email,
         data.itsPin
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    } 
    else {
      return callBack("Invalid user type");
    }
  },



///////////////////////////////////////////////////////////////////////////////
  getUserByAdmin: (admin_no, userType, callBack) => {
  
    if(userType === 'admin'){
    conn.query(
      `select * from admin where admin_no = ?`,
      [admin_no],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
    }
  },
///////////////////////////////////////////////////////////////////////////////

  getUserByStudent: (student_no , userType,callBack) => {
    if(userType === 'student'){
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
  }
},
///////////////////////////////////////////////////////////////////////////////

getUserByStudent: (student_no , userType,callBack) => {
  if(userType === 'student'){
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
}
},

///////////////////////////////////////////////////////////////////////////////

getUserByRegistrar: (registrar_no , userType,callBack) => {
  if(userType === 'registrar'){
  conn.query(
    `select * from registrar where registrar_no = ?`,
    [registrar_no],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results[0]);
    }
  );
}
},

///////////////////////////////////////////////////////////////////////////////


  getStudentInfoById: (student_no, callBack) => {
    conn.query(
      `Select A.student_no,A.initials, A.surname, B.dept_id,dep_name,c.roles  
      FROM student A,stud_dep B,responsibility C, department D 
      WHERE A.student_no = ?
      AND B.dept_id = D.dept_id 
      AND C.dept_id = D.dept_id 
      And  A.student_no = B.student_no`,
      [student_no],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  ///////////////////////////////////////////////////////////////////////////////

  getAllLectures: (callBack) => {
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

  ///////////////////////////////////////////////////////////////////////////////

  internshipEvaluation: (callBack) => {
    conn.query("SELECT * FROM evaluation", [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
///////////////////////////////////////////////////////////////////////////////
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
        data.intern_criteria,
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
  getStudentSubmitted: (callBack) => {
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

  getStudEvaluationbyId: (student_no, callBack) => {
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
