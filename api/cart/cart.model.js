const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema({
   userId: String,
   productId: String,
   brandId: String,
   brandName: String,
   type: String,
   prodName: {
       type: String,
       required: true,
   },
   img:{
       type: String,
       required: true,
   },
   price:{
       type: String,
       required: true,
   },
   quantity:{
       type: String
   },
   createdt:{
    type:Date,
    default: Date.now
}
});

module.exports = mongoose.model('cart', CartSchema);
