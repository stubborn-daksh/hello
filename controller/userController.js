const Club = require('../models/club');
var addUser = (req,res)=>{
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
}

var getUser = (req,res) => {
    Club.find((err,docs) => {
      if(err){
         throw err;
      }
     res.json(docs);
    }) 
 }

module.exports = {
    addUser,
    getUser
}