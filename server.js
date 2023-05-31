const express = require('express')
const cors = require('cors')
const conn = require('./config/db')
const app = express();app.use(express.json())


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extend: false}));
const studentRoute = require('./routes/admissionForm')


conn.connect((err)=>{
    if(err) throw err;
    console.log("Db is connected successfully: ", conn.threadId);
})

app.use('/api', studentRoute)

app.listen(8080, ()=> console.log("server is running on port: " +8080));