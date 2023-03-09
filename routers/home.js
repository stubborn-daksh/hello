const express = require('express');
const Router = express.Router();
const Club = require('../models/club');
const userController = require('../controller/userController')
//call a index.ejs file
Router.get('/',(req,res) => {
   res.render('index');
})

//send a data -post
Router.post('/add', userController.addUser);

//get a data
Router.get('/show',userController.getUser);

//update the data


module.exports = Router;