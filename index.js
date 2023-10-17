const express=require('express');
const app=express();


// fetch env file
require('dotenv').config();

const PORT=process.env.PORT || 4000;


// middle use to parse json
app.use(express.json());

// import routes
const blog=require("./routes/blog")


// mount api
app.use("/api/v1",blog);

// start the server
app.listen(3000,()=>{
    console.log(`server is started at port ${PORT}`);
})

// connect to database 
const dbConnect=require('./config/database');
dbConnect();
 
 // default routes
app.get('/',(req,res)=>{
    res.send("<h1> Ready for blog app</h1>")

}) 

