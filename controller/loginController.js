const dbModel = require('../models/loginSchema')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

var addUser = async (req, res) => {
    try{
        const name = req.body.name;
        const email = req.body.email;
        const userpassword = req.body.userpassword;
        dbModel.create({
            name : name,
            email:email,
            userpassword : userpassword
        })
        .then((result) =>{
            console.log('User signup successfully')
            res.json(result);
        })
        .catch(err => console.log(err));
    } catch(err){
        console.log(err);
    }
}



module.exports = {
    addUser
}