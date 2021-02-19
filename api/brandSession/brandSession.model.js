const mongoose = require('mongoose');
const BrandSessionSchema = new mongoose.Schema({
   brand: String,
   isDeleted: {
       type: Boolean,
       default: false
   }, 
   createdt:{
    type:Date,
    default: Date.now
}
});

module.exports = mongoose.model('BrandSession', BrandSessionSchema);
