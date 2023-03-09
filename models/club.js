//Design a Schema of database using MongoDB

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const schema = mongoose.Schema;
let clubSchema = new schema({
     username:{
        type:String
     },
     contact:{
        type: String
     },
     useremail:{
        type: String
     }
})

module.exports = mongoose.model('student',clubSchema);