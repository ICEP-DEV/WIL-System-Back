const conn = require("../config/db");
const multer = require('multer');
module.exports = {


 /////////////////CREATE USER FUNCTION FOR STUDENT,ADMIN,REGISTRAR////////////////

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



 //////////////////////////////LOGIN FOR ADMIN/////////////////////////////////////////////////
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
 //////////////////////////////LOGIN FOR STUDENT/////////////////////////////////////////////////

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

  //////////////////////////////LOGIN FOR REGISTRAR/////////////////////////////////////////////////

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

/////////////////GETTING STUDENT INFORMATION TO POPULATE THE RECOMMENDATION LETTER//////////////


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
        console.log(results);
        return callBack(null, results);
      }
    );
  },

  ////////////////////////STUDENT TO BE ABLE TO PICK THEIR LECTURES//////////////

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

  ///////////TO GET QUESTIONS FOR EVALUATION AND POPULATE THE FRONT END////////////

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
 

  ////////////////////////////////////STUDENT REPORT///////////////////////////////////////////

  submitReport: (data, callBack) => {
    console.log(data);
    conn.query(
       //INSERT INTO `report`(`report_id`, `student_no`, `wilCoord_id`, `report_doc`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]')
      `insert into report(report_id,student_no, wilCoord_id, report_doc) 
                values(?,?,?,?)`,
      [
        data.report_id,
        data.student_no,
        data.wilCoord_id,
        data.report_doc,
      
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        };
        return callBack(null, results);
      }
    );
  },

  //////////////////////MONTHLY LOGBOOK REPORT///////////////////////////
  monthlyLog : (data, callBack) =>{

    conn.query(
     // INSERT INTO `logbook`(`logbok_id`, `student_no`, `mentor_id`, `date`, `log_description`, `log_status`, `submitted_at`) 
    // VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]','[value-7]')
    `INSERT INTO logbook(logbook_id, student_no, mentor_id, date, log_description,)  
     VALUES (?,?,?,?,?)`,
     [
      data.logbook_id,
      data.student_no,
      data.mentor_id,
      data.date,
      data.log_description,
    

     ],
     (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
     }

    );
  },

  //////////////////////UPDATEMONTHLY LOGBOOK REPORT///////////////////////////

  updateMonthlyLog: (data, callBack) => {
    conn.query(
      `UPDATE logbook 
      SET date =?, log_description = ?, log_status =?
      WHERE logbook_id = ? `,
      [
        data.date,
        data.log_description,
        data.log_status,
        data.logbook_id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        } else if (results.affectedRows === 0) {
          callBack(new Error(`No logbook record found with ID ${data.logbook_id}`));
        } else {
          callBack(null, results[0]);
        }
      }
    );
  },
  

  ///////////////////////////////////////WIL FORM//////////////////////////////////////////

  willForm : (data, callBack) =>{
  conn.query(
    `INSERT INTO wilform(wilForm_Id, student_no, approvedEmployer, contactPerson, telNumber, emp_email, physicalAddress, postalAddress, postalCode, city, studyPeriod)  
     VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
     [
      data.wilForm_Id,
      data.student_no,
      data.approvedEmployer,
      data.contactPerson,
      data.telNumber,
      data.emp_email,
      data.physicalAddress,
      data.postalAddress,
      data.postalCode,
      data.city,
      data.studyPeriod,

     ],
     (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
     }

    );
  },

 ///////////////////////////////////////////
uploadPlacementLetter: (data, callBack) => {
  
 console.log('data',data);
  conn.query(
    `INSERT INTO placementLetter(fileName,path) VALUES (?,?)`,
  [
  data.filName,
  data.path
  ],

  (error, results, fields) => {
    if (error) {
      callBack(error);
    }
    return callBack(null, results);
   }
   
  )
},






  /////////////////////////////////////////////ADMISSION FORM//////////////////////////////////////

  admForm: (data, callBack) =>{

    conn.query(
    
      `INSERT INTO admissionform (adm_Id, student_no, firstChoice, secondChoice, 
        enrollType, finacialAid, campus) VALUES (?,?,?,?,?,?,?)`,
     [
      data.adm_Id,
      data.student_no,
      data.firstChoice,
      data.secondChoice,
      data.enrollType,
      data.finacialAid,
      data.campus,

     ],
     (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
     }

    );
  },

}
  //////////////////////////////////SYSTEM DOCUMENTATION/////////////////////////////


  

//////////////////////////////////////EMPLOYMENT LETTER//////////////////////////////////////////////

  


