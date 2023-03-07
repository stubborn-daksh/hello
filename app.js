const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/adminRouter');
const shopRouter = require('./routes/shopRouter');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);


const errorController = require('./controllers/errorController')

app.use('/',errorController.get404);
app.use('*', errorController.AllError);

exports.errorController = errorController;
app.listen(3000);