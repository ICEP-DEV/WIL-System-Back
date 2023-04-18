const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    pasword: "",
    database: "systemdoc"
})

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'systemdoc',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });


module.exports = conn;