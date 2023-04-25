const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
<<<<<<< HEAD
    pasword: "",
    database: "invite_mentor"
})
=======
    password: "",
    database: "wil_form"
});
>>>>>>> 74fa7e2da07d3c91f377d34f889be9cb4f3b97bd


module.exports = conn;