const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var app = express();
const port = process.env.port || 3000;
const homeRoutes = require('./routers/home');
app.set('view engine','ejs');


//database-connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDetails",{useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', (err)=>{
    console.log('error is'+err);
})
db.once('open',()=>{
    console.log('connected');
})

app.use('/', homeRoutes);


app.listen(port);