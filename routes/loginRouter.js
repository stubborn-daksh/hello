var express = require('express');
var router = express.Router();
const loginController = require('../controller/loginController')

router.post('/add-user', loginController.addUser);

module.exports = router;