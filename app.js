const express = require('express');
const app = express();
const model = require('./models/index')
var userController = require('./controllers/UserController')
const port = 3000;

app.get('/user', userController.addUser);

app.get('/', (req,res,next)=>{
    res.send('Sequelize Module of Node.js');
})

app.listen(port, () => {
    console.log(`your app is listening at http://localhost:${port}`);
});

