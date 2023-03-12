const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const User = sequelize.define('loginDetails',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey: true
    },
    name :{
        type : Sequelize.STRING,
        allowNull:false,

    },
    email:
    {
        type:Sequelize.STRING,
        allowNull:false,
    },
    userpassword:
    {
        type:Sequelize.STRING
    }
}
)

module.exports = User;