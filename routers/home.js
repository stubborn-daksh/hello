const express = require('express');
const Router = express.Router();
const Club = require('../models/club');
//call a index.ejs file
Router.get('/',(req,res) => {
   res.render('index');
})

//send a data -post
Router.post('/add', (req,res)=>{
      const username = req.body.username;
      const contact = req.body.contact;
      const useremail = req.body.useremail;

     const club  = new Club({
        username,
        contact,
        useremail
     })
     club.save(err=>{
        if(err){
            console.log(err);
        } else {
            res.redirect('/');
        }
     });
})

//get a data
Router.get('/show',(req,res) => {
   Club.find((err,docs) => {
     if(err){
        throw err;
     }
    res.json(docs);
   })
    
})

//update the data
    

module.exports = Router;