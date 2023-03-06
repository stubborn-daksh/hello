const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/adminRouter');
const shopRouter = require('./routes/shopRouter');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);



app.use('*', (req,res)=>{
    res.send('Error : 404 not found');
})





app.listen(3000);