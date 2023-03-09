step -1 > initialize a npm -> npm init
step -2 -> install npm in your projecyt -> npm install
step -3 -> npm i express mongodb mongoose ejs body-parser nodemon    
step -4 -> package.json -> dev-> run krne ka cmd set krenge

Note: => for add any external css or js file in project i need to add => 
app.use(express.static('public))

and after this i can import css/js file directly in our project => href="css/home.css" <=

error : throw new MongooseError('Model.prototype.save() no longer accepts a callback');
Note : save() se data save nhi hoga iske liye mughe  ye 2 cmds run krne honge 
=> npm uninstall mongoose
=> npm install mongoose@6.10.0


error:  DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
Note:  ye error jb bhi aaye database ki file me ja kr direct ye 1 line ka code likhna hh bs
mongoose.set('strictQuery', false);

Note : table ka name model me singular dena hh wo plural name ka database me collections bna lega
