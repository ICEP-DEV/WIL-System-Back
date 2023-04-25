const path = require("path");
const conn = require('../config/db')
const express = require("express");
const multer = require("multer");
const router = express.Router()

const storage = multer.diskStorage({
    destination: './files/',
    filename: (req,file,cb)=> {
        return cb (null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

const createPost = async (req, res, next) => {
    try {
        var db = req.con;
        var data = {
            idNo : req.body.idNo,
            image : req.file.filename
        }
        let results = await db.query("INSERT INTO pic SET ? ",[data],function(error,rows){
            if(error){
                res.send({
                    message : "An error occurred"
                })
            }
            else{
                res.send({
                    message: "Success"
                })
            }
        })
    } catch (error) {
        res.send({
            message: "An error occurred"
        })
    }
}


router.post('/upload', upload.single('image'), createPost)

module.exports = router















/*const displayPic = async (req, res, next) => {
    try {
        var db = req.con;
        let results = await db.query("SELECT * FROM pic", function(error,rows){
            if(error){
                res.send({
                    message : "An error occurred"
                })
            }
            else{
                res.send({
                    message: "Success",
                    data: rows
                })
            }
        })
    } catch (error) {
        res.send({
            message: "An error occurred"
        })
    }
}*/

//router.get('/displayPic', displayPic)