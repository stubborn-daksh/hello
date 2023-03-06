const express = require('express');

const router = express.Router();

router.use( '/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><html><head><title>My Form</title></head><body><input type="text" name="title"><button>Submit</button></body></html></form>');
});
router.post('/product',(req, res, next) => {
    console.log(req.body);
   res.redirect('/');
});
module.exports = router;