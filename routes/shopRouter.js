const path = require('path')
const express  = require('express');
const rootDir = require('../util/path')
const router = express.Router();

router.get('/', (req, res, next) => {
    //for adding a html page of views folder i need to require/import path package 
    // res.sendFile(path.join(__dirname, '../views/shop.html'))
    res.sendFile(path.join(rootDir, '/views/shop.html'));
    // res.send('<h1> Helo </h1>');
})
module.exports = router;