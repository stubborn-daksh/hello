const path = require('path');
const express = require('express');
const rootDir = require('../util/path')
const Product = require('../Models/productModel');

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
    const product = new Product(req.body.title);
    product.save();
   res.redirect('/get-products');
}

exports.getProducts = (req,res,next) => {
    const products = Product.fetchAll();
    res.render('shop', {
        prods: products,
        pageTitle : 'shop',
        path : '/',
        hasProducts: products.length > 0,
        activeShop : true,
        productCSS: true
    })
}