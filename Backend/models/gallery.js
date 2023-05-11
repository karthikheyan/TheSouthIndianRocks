const mongoose=require("mongoose")

const gallerySchema=mongoose.Schema({
    imgage:{
        type:String,
        require:true
    }
})


module.exports=mongoose.model("Gallery",gallerySchema)
