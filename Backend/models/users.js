const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    UserName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address: {
        street: String,
        city: String,
        state: String,
      },
      phone:{
        type:Number,
        required:true
      },
    createdAt: {
        type: Date,
        default: Date.now
      },
      purchasesHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PurchaseHistory'
      }],
      cart:[{
        type:mongoose.Schema.Types.Object,
        ref: 'Product'
      }]
})


const User=mongoose.model("Users",userSchema)
module.exports=User