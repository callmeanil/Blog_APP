

// import mongoose
const mongoose=require('mongoose')
//reoute handler

const likeSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        
        ref:"Post",
    },
    user:{
        type:String,
        required:true,

    },
})

module.exports=mongoose.model("Like",likeSchema);