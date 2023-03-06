const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/adminRouter');
const shopRouter = require('./routes/shopRouter');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);

app.use( '/', (req, res, next) => {
      res.send('<H1>Hello from express<H1>')
    //   next(); //this allows the request to continue to the most middleware in line
});





app.listen(3000);