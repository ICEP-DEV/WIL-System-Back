const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "sql8.freemysqlhosting.net",
    user: "sql8630665",
    password: "kb8f7pnFiq",
    database: "sql8630665"
});

module.exports = conn;
