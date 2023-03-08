const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define( "users", {
        name: DataTypes.STRING,
        email:{
            type: DataTypes.STRING,
            defaultValue : 'daksh@gmail.com'
        },
        gender: {
            type: DataTypes.STRING
        }
    });

    return Users;
}


//logging: false is used for -> jo br br query console me aata hh usko rokhne ke liye 
