const express = require('express');
const app = express();

app.get('/', (req,res, next) => {
    console.log('hello to node js- middleware start')
    next();
})
app.get('/', (req,res,next) => {
    console.log('hello to node js- end the middleware')
    next();
})
app.listen(3000);
