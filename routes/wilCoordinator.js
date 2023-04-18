const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const fileUpload = require("express-fileupload")
const fs = require('fs')
const mysql = require('mysql')

const conn = require('../config/db')
const router = express.Router()

// Set up Multer middleware to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

// Define a route to handle file uploads
router.post('/upload', upload.single('file'), function(req, res) {
  // Get the file data from the request
  const file = req.file;

  // Read the uploaded file from disk
  const fileData = fs.readFileSync(file.path);

  // Insert the file data into the MySQL database
  const query = `INSERT INTO filedetails (name, content) VALUES (?, ?)`;
  const values = [file.filename, fileData];
  connection.query(query, values, function(err, result) {
    if (err) throw err;
    res.send('File uploaded successfully!');
  });
});

module.exports = router;























/*router.post('/fileUpload', (req,res,next)=>{
   
    
        let sql = `INSERT INTO filedetails (id, fileName, uploadedDate, 
                  status) VALUES (?,?,?,?)`
    
        conn.query(sql, values, function(err, result){
            if(err)throw err;
                console.log("Successfully inserted")
        })
    
        res.status(200).json({'Message' :"Success"});
    })*/

