const http = require('http');
const express = require('express');

const app = express();

app.use('/' , (req, res, next) => {
    console.log("This ALways run");
    next();
})
app.use( '/add-product', (req, res, next) => {
    res.send('<form><html><head><title>My Form</title></head><body><input type="text"><button>Submit</button></body></html></form>');
    res.send('<H1>The Add Product<H1>')
    next();
})

app.use( '/', (req, res, next) => {
      console.log("In The middleware");
      res.send('<H1>Hello from express<H1>')
      next(); //this allows the request to continue to the most middleware in line
})





app.listen(3000);