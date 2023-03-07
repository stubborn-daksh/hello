<!-- 
-> 5 Key points for mysql configuration with express project ->

        install the project -> npx express-generator
        install the mysql driver -> npm i mysql
        install the npm on your project -> npm install
        create a file for database configuration like -> db_config.js in this folder
        and import this file on main file of the project -> app,js

 -->



1. The only prequisite is node.js installled 

 check it node --v

 2. Generate the express application 
        npx express-generator

3. MySQL Database -> install mysql on your local machine directly
      
       -> XAMPP apace distribution
4. PhpMyAdmin tool   ####Most important 

   -> GUI to manage the MYsQL database

   ->create database
   ->Have the credentials username/password for mysql connectivity

5. Install the MYSQL Driver
 ->They do not install myswl -> it will not work
 -> Driver to provide connectivity and operations
    -> npm i mysql  ####Most important 

6. Shell project and we just got mysql driver
      npm i   ####Most important 

8. Run basic as is application

9. POSTMAN API TOOL which is used for testing and developing the APIs

10. if you prefer nodemon -> optional it is up to you 

11. npm run start

12.  we created DB config file for MYSQL 
      var connection = mysql.createConnection({
        host: 'localhost',
        user : 'root',
        password : '',
        database: 'e-commerce'
        })
13. exported the db-config
14. npm run start again  -> we could see connection successfull message 
15. MySQL Crud Operations
      GET Method ->
      Retrieve the data from db
      examples 
       -> get all users
       -> get all comments
       -> get details of a user description

       1. 1 get all the records
       2. 2 get data for a certain record based on codnition
        ->details for the user whose id =10

      3. -> localhost:3000/users/comments