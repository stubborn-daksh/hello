const path = require('path');
const express = require('express');
const rootDir = require('../util/path')
const router = express.Router();

router.get('/', (req,res,next) => {
    res.send('Welcome to Admin Page');
})
router.get( '/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="POST"><html><head><title>My Form</title></head><body><input type="text" name="title"><button>Submit</button></body></html></form>');

    // res.sendFile(path.join(__dirname, '../views/add-product.html'));
    //another way to importing a views folder on the project
    res.sendFile(path.join(rootDir, '/views/add-product.html'));
});
router.post('/add-product',(req, res, next) => {
    console.log(req.body);
   res.redirect('/');
});

router.post('/contactUs',(req,res,next) => {
    res.sendFile(path.join(rootDir, '/views/contactUs.html'));
})
router.post('/submit',(req,res,next) => {
    res.sendFile(path.join(rootDir, '/views/submit-page.html'));
})
router.post('/success', (req,res)=>{
    res.sendFile(path.join(rootDir, '/views/submit-page.html'));
})
module.exports = router;

