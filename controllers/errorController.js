const path = require('path');
const express = require('express');
const rootDir = require('../util/path')
const router = express.Router();

exports.get404 = (req,res,next)=> {
    res.status(404).sendFile(path.join(__dirname, '../views/Page-not-found.html'))
}

exports.AllError = (req,res)=>{
        res.send('Error : 404 not found');
    }