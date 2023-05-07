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
        zipCode: String,
        country: String
      }, 
    createdAt: {
        type: Date,
        default: Date.now
      },
      purchases: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Purchase'
      }]
})


const User=mongoose.model("Users",userSchema)
module.exports=User