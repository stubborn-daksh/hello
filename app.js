const express = require('express');
const app = express();
const model = require('./models/index')
var userController = require('./controllers/UserController')
const port = 3000;

app.get('/add', userController.addUser);
app.get('/crud', userController.crudOperation);
app.get('/query', userController.queryData);
app.get('/finder', userController.finderData);

app.get('/', (req,res,next)=>{
    res.send('Sequelize Module of Node.js');
})

app.listen(port, () => {
    console.log(`your app is listening at http://localhost:${port}`);
});

