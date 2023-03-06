1. What is ExpressJS ?
2. Using Middleware 
3. Working with Requests and Responses (Elegantly)
4. Routing
5. Returning HTML Pages(Files)

What is Express and why we use it ?
#You want to focus  on business logic, not on the nitty-gritty details
Alternatives to Express.js => Vanilla Node.js , Adonis.js(Laravel inspired framework of node.js) ,koa, Sails.js

it is highly flexible and extensible.

it's all about middleware 
Request -> Middleware [(req,res,next) => { ... } ] , next() -> res.send() -> Response
use() is used to allow add a middleware function

