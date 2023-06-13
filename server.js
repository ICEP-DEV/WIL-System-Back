const express = require('express');
const cors = require('cors')
const conn = require('./config/db')
const studentRoute = require('./routes/students')
const wilRoute = require('./routes/coordinator')
const mentorRoute = require('./routes/mentorR')
const app = express();
const multer = require('multer');

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extend: false}));




conn.connect((err)=>{
    if(err) throw err;
    console.log("Db is connected successfully: ", conn.threadId);

})



app.use('/api', studentRoute);
app.use('/api', wilRoute);
app.use('/api', mentorRoute)



app.listen(8080, ()=> console.log("server is running on port: " +8080));