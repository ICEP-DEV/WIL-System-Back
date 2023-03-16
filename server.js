const express = require('express');
const conn = require('./config/db')
const studentRoute = require('./routes/students')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extend: false}));




conn.connect((err)=>{
    if(err) throw err;
    console.log("Db is connected successfully: ", conn.threadId);

})



app.use('/api', studentRoute)



app.listen(8080, ()=> console.log("server is running on port: " +8080));