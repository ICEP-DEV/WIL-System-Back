const conn = require("../config/db");
module.exports = {

///////////////////////////////GET STUDENT EVALUATION///////////////////////////////////////////
getStudEvaluation: (callBack) => {
    conn.query(
    //   ` SELECT * 
    //  FROM student A, department B, wil_coordinator C, stud_dep D 
    //  WHERE A.student_no = D.student_no
    //  AND B.dept_id = C.dept_id
    //  AND B.dept_id = D.dept_id;`
    `SELECT C.student_no, A.initials, A.surname, A.email, C.wilCoord_id, D.w_initials, D.w_surname, D.wilCoord_email, C.evaluation_id, B.intern_questions, C.criteria_id, C.intern_criteria
     FROM student A, evaluation B, evaluation_criteria C, wil_coordinator D
     WHERE A.student_no = C.student_no
     AND B.evaluation_id = C.evaluation_id
     AND D.wilCoord_id = C.wilCoord_id;`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
///////////////////////////////GET STUDENT EVALUATION BY ID///////////////////////////////////////////
  getStudEvaluationById: (student_no, callBack) => {
    // console.log(student_no);
    conn.query(
    //   ` SELECT * 
    //  FROM student A, evaluation B, evaluation_criteria C
    //  WHERE A.student_no = ?
    //  AND A.student_no = C.student_no
    //  AND B.evaluation_id = C.evaluation_id`
    `SELECT C.student_no, A.initials, A.surname, A.email, C.wilCoord_id, D.w_initials, D.w_surname, D.wilCoord_email, C.evaluation_id, B.intern_questions, C.criteria_id, C.intern_criteria
     FROM student A, evaluation B, evaluation_criteria C, wil_coordinator D
     WHERE A.student_no = ?
     AND A.student_no = C.student_no
     AND B.evaluation_id = C.evaluation_id
     AND D.wilCoord_id = C.wilCoord_id;`,
      [student_no],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },




////////////////////////////////GET STUDENT REPORT///////////////////////////////////////////

getStudentReport: (callBack) => {
    conn.query(
      ` SELECT E.student_no, A.initials, A.surname, E.wilCoord_id, C.w_initials, C.w_surname,E.report_id, E.report_doc
      FROM student A, wil_coordinator C, report E
      WHERE A.student_no = E.student_no
      AND C.wilCoord_id = E.wilCoord_id;`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        console.log("In the service",results)
        return callBack(null, results);
      }
    );
  },
///////////////////////////////GET STUDENT REPORT BY ID/////////////////////////////////////
  getStudentReportId: (student_no, callBack) => {
    // console.log(student_no);
    conn.query(
      ` SELECT * 
      FROM student A, wil_coordinator C, report E
      WHERE  E.student_no = ?
      AND A.student_no = E.student_no
      AND C.wilCoord_id = E.wilCoord_id;`,
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
