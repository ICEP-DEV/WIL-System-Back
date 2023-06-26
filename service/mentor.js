
const conn = require("../config/db");
module.exports = {





register: (data, callBack) => {
    conn.query(
      `insert into mentor(mentor_id, m_name, m_surname, email_address, password) 
                values(?,?,?,?,?)`,
      [
        data.mentor_id,
        data.m_name,
        data.m_surname,
        data.email_address,
        data.password,
        
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