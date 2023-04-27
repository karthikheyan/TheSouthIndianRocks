const mongoose=require("mongoose")

const TypeSchema=new mongoose.Schema({
    pname: {
        type: String,
        required: true
      },
      img:{
        data:Buffer,
        contentType:String,
    },
      description: {
        type: String,
        required: true
      },
      category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Categories',
        required:true
      }
})


const productType =mongoose.model('ProductTypes',TypeSchema)
module.exports = productType;