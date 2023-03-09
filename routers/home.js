const express = require('express');
const Router = express.Router();

Router.get('/',(err,res) => {
   res.render('index');
})


module.exports = Router;