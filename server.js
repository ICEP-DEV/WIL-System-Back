const express = require('express')
const cors = require('cors')
const conn = require('./config/db')
const studentRoute = require('./routes/students')
const wilRoute = require('./routes/coordinator')
const mentorRoute = require('./routes/mentorR')
const adminRoute = require('./routes/admin')
const app = express();
const multer = require('multer');

conn.connect((err)=>{
    if(err) throw err;
    console.log("Db is connected successfully: ", conn.threadId);
})

const corsOptions = {
    origin: '*'
}



app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extend: false}));
const workDivision = require('./routes/getWorkDivision')
const sysDocUpload = require('./routes/sysDocUpload')
const getWorkDivision = require('./routes/getWorkDivision')
const getStudInfo = require('./routes/getStudInfo')
const getMentorDetails = require('./routes/getMentorDetails')
const getNameSurStud = require('./routes/getNameSurStud')
const getUserStudNum = require('./routes/getUserStudNum')
const getSupEvaluation = require('./routes/getSupEvaluation')
const getCoWorkerEvaluation = require('./routes/getCoWorkerEvaluation')
const getReAdInfo = require('./routes/getReAdInfo')
const declaration = require('./routes/declaration')
const getSysDoc = require('./routes/getSysDoc')
const submissionStatus = require('./routes/submissionStatus')
const inviteMentor = require('./routes/inviteMentor')


app.use('/api', studentRoute)
app.use('/api', wilRoute)
app.use('/api', mentorRoute)
app.use('/api', adminRoute)
app.use('/api', workDivision)
app.use('/api', sysDocUpload)
app.use('/api', getWorkDivision)
app.use('/api', getStudInfo)
app.use('/api', getMentorDetails)
app.use('/api', getNameSurStud)
app.use('/api', getUserStudNum)
app.use('/api', getSupEvaluation)
app.use('/api', getCoWorkerEvaluation)
app.use('/api', getReAdInfo)
app.use('/api', declaration)
app.use('/api', getSysDoc)
app.use('/api', submissionStatus)
app.use('/api', inviteMentor)





app.listen(8080, ()=> console.log("server is running on port: " +8080));