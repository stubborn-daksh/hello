var db = require('../models');

const Users = db.users;

var addUser = async (req, res) => {
    // let data = await Users.build({name:'Test', email : 'daksh@gmail.com'});
    // await data.save();
    let data = await Users.create({name:'Test', email : 'daksh@gmail.com'});
    
    let response = {
        data:'ok'
    }
    res.status(200).json(response);
}

module.exports = {
    addUser
}