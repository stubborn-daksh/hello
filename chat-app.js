const express=require('express');
const bodyparser=require('body-parser');
const fs=require('fs');
const app= express();
app.use(bodyparser.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err);
            data="no chat exists"
        }
        res.send(
            `${data}<form onSubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="POST">
            <input id="message" type="text" name="message">
            <input id="username" type="hidden" name="username">
            <button type="submit">send</button>
            </form> `);
        
    })
});
app.post("/",(req,res)=>{
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:"a"},(err)=>{
        err ? console.log(err) :res.redirect('/')
    });
});
app.get('/login',(req,res)=>{
    res.send(`<form onSubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/" method="POST">
    <input id="username" type="text" name="username" placeholder="username">
     <input id="message" type="hidden" name="message">
    <button type="submit">add</button>
    </form>`)
    
})
app.listen(4000);