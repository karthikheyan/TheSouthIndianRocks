const mongoose=require("mongoose")

const ImgSchema=mongoose.Schema({
    imgname:String,
    img:{
        data:Buffer,
        contentType:String
    },
    desc:String,
    price:Number,
    rating:Number
})

module.exports=Imagemodel=mongoose.model("Images",ImgSchema)