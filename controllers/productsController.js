const path = require('path');
const express = require('express');
const rootDir = require('../util/path')
const router = express.Router();

exports.getHome = (req,res,next) => {
    res.send('Welcome to Admin Page');
}

exports.getAddProduct = (req,res,next) => {
    res.sendFile(path.join(rootDir, '/views/add-product.html'));
}

exports.getSubmit = (req,res,next) => {
    res.sendFile(path.join(rootDir, '/views/submit-page.html'));
}

exports.contactUs = (req,res,next) => {
    res.sendFile(path.join(rootDir, '/views/contactUs.html'));
}

exports.success = (req,res)=>{
    res.sendFile(path.join(rootDir, '/views/submit-page.html'));
}

exports.addProduct = (req, res, next) => {
    console.log(req.body);
   res.redirect('/');
}