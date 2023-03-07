const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : '',
    database: 'e-commerce'
})

connection.connect(function(err){
    if(err){
        console.log(err)
    } else{
        console.log('connected');
    }
})

module.exports = connection;
