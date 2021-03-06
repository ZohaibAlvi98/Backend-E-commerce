const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
   brandId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
   },
   type:{
       type: String
   },
   name:{
    type: String,
    required: true
   },
   promotion:{
        type: Boolean
   },
   product_description:{
        type: String,
        required: true
   },
   price:{
        type: String,
        required: true
   },
   delievery_charges:{
    type: String
   },
   deliveryPolicy:{
    type: String
   },
   photo1:{
    type: String,
    required: true
   },
   photo2:{
    type: String,
    required: true
   },
   photo3:{
    type: String,
    required: true
   },
   rating:{
    type: String
   },
   reviews:[
        {
            userId:  mongoose.Schema.Types.ObjectId,
            comment: String
        }
    ],
    approved:{
        type: Boolean,
        default: true
    },
    likes:{
        type: String
    },
    views:{
        type: String
    },
    stock:{
        type: String
    },
    color:{
        type: String
    },
   createdt:{
    type:Date,
    default: Date.now
}
});

module.exports = mongoose.model('Product', ProductSchema);
