const mongoose=require("mongoose")
//route handler
const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        require:true,

    },
    body:{
        type:String,
        required:true,
    },
})

//export 
module.exports=mongoose.model("comment",commentSchema);