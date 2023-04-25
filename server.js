const express = require('express')
const conn = require('./config/db')
<<<<<<< HEAD
const studentRoute = require('./routes/registerNotification')
const app = express();app.use(express.json());
=======
const studentRoute = require('./routes/studNotification')
const app = express();
app.use(express.json());
>>>>>>> 74fa7e2da07d3c91f377d34f889be9cb4f3b97bd
app.use(express.urlencoded({extend: false}));


conn.connect((err)=>{
    if(err) throw err;
    console.log("Db is connected successfully: ", conn.threadId);
})

app.use('/api', studentRoute)

app.listen(8080, ()=> console.log("server is running on port: " +8080));