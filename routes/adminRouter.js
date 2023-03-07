const path = require('path');
const express = require('express');
const rootDir = require('../util/path')
const router = express.Router();

const productController = require('../controllers/productsController');

exports.getHome = ('/',productController.getHome);
// router.get('/add-product', productController.getAddProduct);
router.get( '/add-product', productController.getAddProduct);
router.post('/add-product', productController.addProduct);
router.get('/get-products', productController.getProducts);
router.post('/contactUs', productController.contactUs);
router.post('/submit', productController.getSubmit);
router.post('/success', productController.success);


module.exports = router;
exports.productController = productController;

   

