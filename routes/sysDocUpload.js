const path = require("path");
const conn = require('../config/db');
const express = require("express");
const multer = require("multer");
const router = express.Router();

let studNum;

const storage = multer.diskStorage({
  destination: 'sysDocFiles/',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage: storage
});

router.post('/uploadSysDoc/:studentNo', upload.single('pdfname'), (req, res) => {
  studNum = req.params.studentNo;
  const systemDoc = req.file.filename;
  const sql = 'UPDATE student SET systemDoc = ? WHERE student_no = ?';
  conn.query(sql, [systemDoc, studNum], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: 0, message: "Error occurred while updating student information" });
    } else {
      res.status(200).json({ success: 1, message: "File uploaded and student information updated successfully" });
    }
  });
});

module.exports = router;

