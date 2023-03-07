const {Sequelize , DataTypes} = require('sequelize');

const sequelize = new Sequelize('e-commerce', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging:false,
    pool:{max:5, min:0, idle:10000}
});

sequelize.authenticate()
.then(()=>{ console.log('successfully connected')})
.catch( (err) => {console.log(err)});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users= require('./users')(sequelize,DataTypes);
/*
if i do {force:true} inside the sync function then it gets deleted the existing table and create a new one, 
otherwise if i do {force: false} or leave default with blank then it does not do anything it checks only one thing that this table is already exist or not if exist then it delete else it does not do any thing.

match-condition during testing : if we want to match our database during testing or for deleting al data and do testing from start

db.sequelize.sync({force:true, match:/e-commerce$/})
.then( ()=> {console.log('re-sync')})
 */
db.sequelize.sync()
.then( ()=> {console.log('Your table is created successfully')})

module.exports = db;