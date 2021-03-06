'use strict';

const path = require('path');
const fs = require('fs');

const _ = require('lodash');
const moment = require('moment');

const BrandSessionModel = require('../brandSession/brandSession.model');
const BrandModel = require('../brands/brands.model');
const ProductModel = require("./product-model")

exports.createProduct = async(req,res)=>{
try{
    console.log(req.body)
   var filename = Date.now()+Math.floor(Math.random() * 10^10000000);
    let filePath1 = path.join(ROOTPATH, 'images/brands/products', filename + "." + req.files.photo1.mimetype.split("/")[1])

    fs.writeFileSync(filePath1, req.files.photo1.data);

    var tempFile = filename + "." + req.files.photo1.mimetype.split("/")[1];
    req.body['photo1'] = tempFile;

    var filename = Date.now()+Math.floor(Math.random() * 10^10000000);
    let filePath2 = path.join(ROOTPATH, 'images/brands/products', filename + "." + req.files.photo2.mimetype.split("/")[1])

    fs.writeFileSync(filePath2, req.files.photo2.data);

    var tempFile = filename + "." + req.files.photo2.mimetype.split("/")[1];
    req.body['photo2'] = tempFile;

    var filename = Date.now()+Math.floor(Math.random() * 10^10000000);
    let filePath3 = path.join(ROOTPATH, 'images/brands/products', filename + "." + req.files.photo3.mimetype.split("/")[1])

    fs.writeFileSync(filePath3, req.files.photo3.data);

    var tempFile = filename + "." + req.files.photo3.mimetype.split("/")[1];
    req.body['photo3'] = tempFile;

    req.body['brandId'] = req.brand._id
    await ProductModel.create(req.body,async(err,brand)=>{
        res.send({
            success: true,
            brand: brand
        })
    })
}catch(e){
    res.send({
        success: false,
        message: e.message
    })
}
}

exports.getAll = async(req,res) =>{
    try{
       
        await ProductModel.find({brandId: req.brand._id},async(err,product)=>{
            
        res.send({
            success: true,
            product: product
        })
    })
}catch(e){
        res.send({
            success: false,
            message: e.message
        })
    }
}

exports.all = async(req,res)=>{
    let products=[];
  
    await ProductModel.find({},async(err,pro)=>{
        Promise.all(pro.map(async (p) =>{
            
            await BrandModel.findById(p.brandId,async(err,brand)=>{
             
           products.push({name: p.name,_id: p._id,price: p.price,photo1:p.photo1,brandId:p.brandId,brandName: brand.brandName,logo:brand.logo})
         
            })
           
        })).then(()=>{
            console.log('yo');
            res.send({
                success: true,
                product: products.reverse()
            })
        })
      
    })
}

exports.fetchById = async(req,res)=>{
    await ProductModel.findById(req.params.id,async(err,product)=>{
        res.send({
            success: true,
            product: product
        })
    })
}

exports.remove = async(req,res)=>{
    try{
        console.log(req.params.id)
        await ProductModel.findByIdAndRemove(req.params.id,async(err,pro)=>{
        res.send({
            success: true,
            product: pro
        })
    })
}catch(e){
    res.send({
        success: false,
        message: e.message
    })
}
}