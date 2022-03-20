const mongoose=require('mongoose');

const ContentSchema= new mongoose.Schema({
    title:String,
    description:String,
    programType:String,
    images:{
        PosterArt:{
            url:String,
            width:Number,
            height:Number
        }
    },
    releaseYear:Number
})

module.exports=mongoose.model("Content",ContentSchema);