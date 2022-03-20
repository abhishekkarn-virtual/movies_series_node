const router=require("express").Router();
const Content=require("../models/Content");


router.get("/movies",async(req,res)=>{
    try{
        const Movies=await Content.find({programType:"movie"});
        res.status(200).json(Movies);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;