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
        },
        timestamps: false //createdAt: false, UpdatedAt : false
    });

    return sequelize.define();
}