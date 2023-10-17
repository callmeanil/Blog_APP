const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    } )

    .then(()=>console.log("data base connected successfull") )
        .catch((error)=>{
            console.log('issue in db connect')
            console.log(error.message);
            process.exit(1);
        });
        

}
module.exports=dbConnect;
