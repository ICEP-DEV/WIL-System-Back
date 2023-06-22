const express = require('express')
const cors = require('cors')
const conn = require('./config/db')
const app = express();app.use(express.json())


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extend: false}));
const studentRoute = require('./routes/getWorkDivision')
const wilforms = require('./routes/getWilForm')
const sysDocUpload = require('./routes/sysDocUpload')
const getWorkDivision = require('./routes/getWorkDivision')
const getStudInfo = require('./routes/getStudInfo')
const getMentorDetails = require('./routes/getMentorDetails')
const getNameSurStud = require('./routes/getNameSurStud')

conn.connect((err)=>{
    if(err) throw err;
    console.log("Db is connected successfully: ", conn.threadId);
})

app.use('/api', studentRoute)
app.use('/api', sysDocUpload)
app.use('/api', wilforms)
app.use('/api', getWorkDivision)
app.use('/api', getStudInfo)
app.use('/api', getMentorDetails)
app.use('/api', getNameSurStud)





app.listen(8080, ()=> console.log("server is running on port: " +8080));