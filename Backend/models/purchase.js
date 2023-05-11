const mongoose=require("mongoose")

const purchaseSchema=mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      purchaseDate: {
        type: Date,
        default: Date.now
      }
})

const Purchase=mongoose.model("PurchaseHistory",purchaseSchema)
module.exports=Purchase;