const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
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
  },
  isdeleivered:{
       type:Boolean
  }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
