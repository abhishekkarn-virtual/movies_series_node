const router=require("express").Router();
const Content=require("../models/Content");


router.get("/series",async(req,res)=>{
    try{
        const Series=await Content.find({programType:"series"});
        res.status(200).json(Series);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;