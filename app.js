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




// app.use('/', (req,res) => {
//     res.send('Welcome to ExpressJs....')
// })

//error code always write on the last of the page
app.use((req,res,next)=> {
    res.status(404).sendFile(path.join(__dirname, 'views/Page-not-found.html'))
})
// app.use('*', (req,res)=>{
//     res.send('Error : 404 not found');
// })


app.listen(3000);