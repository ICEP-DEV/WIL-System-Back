const { genSaltSync, hashSync, compareSync } = require("bcryptjs");
const{register} = require ("../service/mentor")

module.exports ={

    registerMentor: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt);
        register(body, (err, results) =>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data:results
            });
        })
    }

}