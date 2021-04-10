const CartModel = require('./cart.model')

exports.addToCart = async(req,res)=>{
    await CartModel.create(req.body,async(err,cart)=>{
        res.send({
            success:true,
            product:cart
        })
    })
}

exports.getAll = async(req,res)=>{
    await CartModel.find({userId: req.user._id},async(err,carts)=>{
        res.send({
            success: true,
            product: carts
        })
    })
}