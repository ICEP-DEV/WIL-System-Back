const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    pasword: "",
    database: "invite_mentor"
})


module.exports = conn;