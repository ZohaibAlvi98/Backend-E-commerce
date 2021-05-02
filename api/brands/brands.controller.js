'use strict';

const fs = require('fs');
const path = require('path');
var crypto = require('crypto');
const UtilService = require('../utility/util')
const htmlTemplateService = require('../utility/htmltemplate')
const ProductModel = require('../product/product-model')

// const UserService = require('./user.service');
// const UserModel = require('./user.model'); 

const BrandModel = require('./brands.model')
// const UtilService = require('../utility/util');
// const htmlTemplateService = require('../utility/htmltemplates');
const BrandSession = require('../brandSession/brandSession.model'); 
const _ = require('lodash');

exports.fetchAllBrands = async(req,res)=>{
    try{
        await BrandModel.find({},async(err,brnds)=>{
        res.send({
            success: true,
            brands: brnds
        })
    })
    }catch(e){
        res.send({
            success: true,
            message: e.message
    })
    }
}

exports.create = async(req,res)=>{
    try{
     
        var filename = Date.now()+Math.floor(Math.random() * 10^10000000);
        let filePath = path.join(ROOTPATH, 'images/brands/logo', filename + "." + req.files.logo.mimetype.split("/")[1])

        fs.writeFileSync(filePath, req.files.logo.data);

        var tempFile = filename + "." + req.files.logo.mimetype.split("/")[1];
        req.body['logo'] = tempFile;

        filename = Date.now()+Math.floor(Math.random() * 10^10000000);
         filePath = path.join(ROOTPATH, 'images/brands/cnic', filename + "." + req.files.cnicPhoto.mimetype.split("/")[1])
        fs.writeFileSync(filePath, req.files.cnicPhoto.data);

        var tempFile = filename + "." + req.files.cnicPhoto.mimetype.split("/")[1];
        req.body['cnicPhoto'] = tempFile;

        filename = Date.now()+Math.floor(Math.random() * 10^10000000);
        filePath = path.join(ROOTPATH, 'images/brands/ownerPhoto', filename + "." + req.files.ownerPhoto.mimetype.split("/")[1])
        fs.writeFileSync(filePath, req.files.ownerPhoto.data);

        var tempFile = filename + "." + req.files.ownerPhoto.mimetype.split("/")[1];
        req.body['ownerPhoto'] = tempFile;
        req.body['role']= 'user';
        await BrandModel.create(req.body,async(err,brands)=>{
            if(err){
                console.log(err)
            }else{
                let emailtoken = UtilService.generateRandomToken();
                let htmlTemplate =  htmlTemplateService.accountActivation( brands, emailtoken );
                let htmlForApproval = htmlTemplateService.NotificationForApproval( brands, emailtoken );
        
                // sending email to user for account activation
                // unionliveappdev@gmail.com
                await UtilService.sendEmail(brands.email,'Account Activation',htmlTemplate)
                await UtilService.sendEmail('mmzee.org@gmail.com','Account Approval',htmlForApproval)
                    await BrandModel.update({ _id : brands._id },{ 'accountActivated.token': emailtoken })
                    console.log('here')
                    res.send({
                        success: true,
                        brands: brands
                    })
              
               
            }
           
        })
       
    }catch(e){
        res.send({
            success: true,
            message: e.message
    })
    }
}

exports.brandById = async(req,res) =>{
    console.log(req.brand)
    await BrandModel.findById(req.params.id,async(err,brand)=>{
        await ProductModel.find({brandId: req.params.id},async(err,pro)=>{
            res.send({
                success:true,
                brand: brand,
                product: pro
            })
        })
        
    })
}

exports.brandByToken = async(req,res) =>{
   
    await BrandModel.findById(req.brand._id,async(err,brand)=>{
        await ProductModel.find({brandId: req.brand._id},async(err,pro)=>{
            res.send({
                success:true,
                brand: brand,
                product: pro
            })
        })
        
    })
}


exports.activateAccount = async(req,res)=>{
    try {
      
        //
        let brand = await BrandModel.findOne({
            "accountActivated.token": req.params.token
        });
      
        if (!brand) {
            return res.status(404).send({success: false, message:
            'Sorry we could not find this user in our system'});
        }

        brand.accountActivated.isTrue = true;
        brand.accountActivated.token = null;
        await brand.save();

        res.send({success: true,brand: brand, message: 'Your account has been activated successfully'});


    } catch (error) {
        return res.send({success: false, message: error});
    }
}

exports.login = async function(req, res){
    try{
      
        let {email, password} = req.body
       
        await BrandModel.findOne({
            email
        }, (err,brand)=>{
            if(err){
                res.send({
                    success: false,
                    message: err
                })    
            }
            if(brand!=null){
                if(!brand.adminApproval){
                    res.send({
                        success: false,
                        message: 'Your account is not approved by our team yet. Please wait for approval.'
                    })
                }
                else if(brand.authenticate(password)){
                    BrandSession.create({brand: brand._id}, (err, raw)=>{ 
                        
                        res.send({success: true, jwt: raw._id, brand})
                    })
                }else{
                    res.send({
                        success: false,
                        message: "Incorrect password."
                    })
                }
            }else{
                
                res.send({
                    success: false,
                    message: "Brand not found"
                })
            }
        })
    }catch(e){
        res.send({
            success: false,
            message: e.message
        })
    } 
}

exports.update = async(req,res)=>{
    try{
        await ProductModel.findOneAndUpdate({brandId: req.brand._id, _id: req.params.id},req.body,async(err,pro)=>{
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