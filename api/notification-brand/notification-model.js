const mongoose = require('mongoose');

const Notification = new mongoose.Schema({
   brandId: {
    type: String,
    required: true
   },
   userId: {
    type: String,
    required: true
   },
   productId: {
    type:String,
    required: true
   },
   brandName:{
    type: String
   },
   userName:{
    type: String
   },
   orderId:{
    type: String
   },
    img:{
    type: String
   },
   prodName:{
    type: String,
    required: true
   },
   address:{
    type: String,
    required: true
   },
   city:{
    type: String
   },
   phoneNo:{
    type: String,
    required: true
   },
   price:{
        type: Number,
   }, 
   createdt:{
    type:Date,
    default: Date.now
}
});

module.exports = mongoose.model('Notification-brand', Notification);
