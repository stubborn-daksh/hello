var express = require('express');
const bcrypt = require('bcrypt');
var cors = require('cors');
var app = express();
const sequelize = require('./utils/database');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({extended:false}));

const loginRoutes = require('./routes/loginRouter');

app.use(loginRoutes);

app.use(cors({}));

sequelize.sync()
.then((result) =>{
    app.listen(3000);
}
)


