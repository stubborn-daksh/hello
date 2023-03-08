const { Sequelize,Op } = require('sequelize');
var db = require('../models');

const Users = db.users;

var addUser = async (req, res) => {
    // let data = await Users.build({name:'Test', email : 'daksh@gmail.com'});
    // await data.save();
    let data = await Users.create({name:'Test', email : 'daksh@gmail.com'});
   // console.log(data.id);
    //update
    // data.name = 'shivam';
    // data.save();
    //delete
   // data.destroy();
   let response = {
        data:'ok'
    }
    res.status(200).json(response);
}

var crudOperation =async (req, res) => {
    //*************INSERT DATA************************** */
    //let data = await Users.create({name:'DAKSH', email : 'daksh@gmail.com', gender: 'male'});
     //*************UPDATE DATA************************** */
    // let data = await Users.update({name:'RAghu'},{
    //     where: {
    //         id:7
    //     }
    // });
     //*************DELETE DATA************************** */
    //  let data = await Users.destroy({
    //     where: {
    //         id:2
    //     }
    //  });
     //*************TRUNCATE DATA******delete all the data of given table******************** */
    //  let data = await Users.destroy({
    //     truncate:true
    //  })
     //*************BULK DATA INSERT************************** */
    //  let data = await Users.bulkCreate([
    //     {name:'DAKSH', email : 'daksh@gmail.com', gender: 'male'},
    //     {name:'ARYAN', email : 'aryan@gmail.com', gender: 'male'},
    //     {name:'AYUSH', email : 'ayush@gmail.com', gender: 'male'},
    //     {name:'RAGHU', email : 'raghu@gmail.com', gender: 'male'},
    //     {name:'AMIT', email : 'amitgmail.com', gender: 'male'}
    //  ])
    //*************GET DATA in a window************************** */
    //let data = await Users.findAll({});  //-> returns all the data
    //let data = await Users.findOne({}); //->returns single data
    let response = {
        data : data
    }
    res.status(200).json(response);
}

var queryData = async (req, res) => {
    /*mughe sirf yhan pr email-id aur gender  insert krni h bs chhae user kitne bhi field pass kre lekin idhr sirf email id hi jayegi*/
//    let data = await Users.create({name:'Shyam',email:'shyam@gmail.com',gender:'male'},{
//         fields:['email','gender']
//    })
//====================================================================================================//
//returns all the data => relatable to select of the sql
//let data = await Users.findAll({});
 /*mughe sirf yhan pr name aur email  return krwana h bs */
// let data = await Users.findAll({
//     attributes:[
//         'name',
//         ['email' , 'emailID'],
//         'gender',
//         [Sequelize.fn('Count',Sequelize.col('email')),'emailCount'],//count
//         [Sequelize.fn('CONCAT',Sequelize.col('email'),'ID'),'emailCount']//concat 
//     ]
// })
//====================================================================================================//
//include-
// let data = await Users.findAll({
//      attributes:{exclude:['createdAt','updatedAt']}
// });
//-exclude
// let data = await Users.findAll({
//     attributes:{exclude:['createdAt','updatedAt'],
//     include:[
//         [Sequelize.fn('CONCAT',Sequelize.col('email'),'ID'),'emailCount']
//     ]
//  }
// });
/*===========Conditions=====================*/
// let data = await Users.findAll({
//     where:{
//         id:2
//     }
// })
//===================Sequelize Op(Operator) =====================//
// let data = await Users.findAll({
//     where: {
//         id:{
//             [Op.eq]:6
//         },
//         email:{
//             [Op.eq]:'shyam@gmail.com'
//         },
//         email:{
//             [Op.like]:'%@gmail.com%'
//         }
//     }
// })
//groupBy
// let data = await Users.findAll({
//     where: {
//         id:{
//             [Op.gt] : 2
//         },
//         email:{
//             [Op.like]: '%@gmail.com'
//         }
//     },
//     order:[
//         ['name','asc']
//     ],
//     limit: 2,
//     offset:1
// })
//count
//let data = await Users.count({});


   let response = {
    data : data
   }
   res.status(200).json(response);
}


module.exports = {
    addUser,
    crudOperation,
    queryData
}

//build method is used for create a data 
//and save method use with build to save the data of build
//create method is used for build and save both the data
