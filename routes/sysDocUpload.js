const path = require("path");
const conn = require('../config/db');
const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
    destination: 'sysDocFiles/',
    filename: (req, file, cb) => {
        // return cb(null, '${file.filename}_${Date,now()}${path.extname(file.originalname)}')
        return cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage
});

router.post('/upload', upload.single('pdfname'), (req, res) => {
    console.log(req.file)
    res.json
    //const systemDoc = req.file.filename;
    /*conn.query('UPDATE student SET systemDoc = ? WHERE student_no', [systemDoc ], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            let pdfFK = results.insertId;

            res.json({
                success: 1,
                message: "file uploaded"
            });
        }
    });*/
});

module.exports = router;
