const path = require('path')
const express  = require('express');
const rootDir = require('../util/path')
const router = express.Router();
const shopController = require('../controllers/shopController');
router.get('/', shopController.shop);


module.exports = router;
exports.shopController = shopController;
