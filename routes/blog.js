const express=require('express')
const router=express.Router();

//map 
// const {contact}=require("../controllers/getPost");

// router.get("/pr",contact);


const {createComment}=require("../controllers/commentController")
 

router.get("/comments/create",createComment);
module.exports=router;