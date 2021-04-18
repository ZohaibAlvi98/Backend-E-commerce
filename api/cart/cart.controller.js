const CartModel = require('./cart.model')
const BrandModel = require('../brands/brands.model')

exports.addToCart = async(req,res)=>{
  
    await BrandModel.findById(req.body.brandId,async(err,brand)=>{
    
        if(!brand){
            res.send({
                success: false,
                message: 'No brand found'
            })
        }else{
            req.body['brandName'] = brand.name
            req.body['userId'] = req.user._id
            await CartModel.create(req.body,async(err,cart)=>{
                if(err){
                    (err)
                }
                res.send({
                    success:true,
                    product:cart
                })
            })
        }
    })
}

exports.getAll = async(req,res)=>{
    await CartModel.find({userId: req.user._id},async(err,carts)=>{
        (carts)
        res.send({
            success: true,
            product: carts
        })
    })
}


exports.remove = async(req,res)=>{
    (req.params.id)
    await CartModel.findByIdAndDelete(req.params.id.toString(),async(err,carts)=>{
       (carts)
        res.send({
            success: true,
            product: carts
        })
    })
}