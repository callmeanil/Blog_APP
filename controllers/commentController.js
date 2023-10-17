// import model

const post=require("../models/postModel");
const comment=require("../models/commnetModel");

//business logic

exports.createComment=async(req,res)=>{
try{
// if u using save() function then fetch the object

const{post,user,body}=req.body
// then create new object name - comments  ;

const newComments=new comment({
  post,user,body
});
// save the object into the database
const savedComment=await newComments.save();

// change to increase the value of postSchema section
 // 1) Find the post by ID  ,add thr new comment to its comments array
 const updatedPost=await post.findByIdAndUpdate(post, {$push:{newComments:savedComment._id}},{new:true})
                .populate("newComments")// populate the comments array with with comment document
                .exec()
res.send(200).json({
 post:updatedPost,  
  });
            
}
catch(error){
  return res.status(500).json({
    error:"error with creating comment",
  })


}
  

}