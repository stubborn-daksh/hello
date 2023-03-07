var express = require('express');
var router = express.Router();
//database
var connection = require('../db_config');
//get all data
router.get('/comments' , (req, res, next) => {
  var getCommentsQ = "select * from comment";
  connection.query(getCommentsQ, function(err, result){
    if(err){
      console.log(err);
      res.send('Unable to get the comments');
    } else {
       res.send(result);
    }
  });
})
//get data with parameter
router.get('/comments/:id' , (req, res, next) => {
  var getCommentsQ = "select * from comment where id =" +req.params.id;
  connection.query(getCommentsQ, function(err, result){
    if(err){
      console.log(err);
      res.send('Unable to get the comments');
    } else {
       res.send(result);
    }
  });
})

//post data
router.post('/comments' , (req, res, next) => {
  var getCommentsQ = "Insert into comment(name, description, username) values('Akshat', 'I am a bad guy', 'adkshat@#_$_')";
  console.log(getCommentsQ);
  connection.query(getCommentsQ, function(err, result){
    if(err){
      console.log(err);
      res.send('Unable to post the comments');
    } else {
       res.send('Data is Successfully submitted');
    }
  });
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
