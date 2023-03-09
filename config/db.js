const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    pasword: "",
    database: "wil_system"
})


module.exports = conn;