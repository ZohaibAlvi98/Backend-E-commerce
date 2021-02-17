'use strict';

const fs = require('fs');
const path = require('path');
var crypto = require('crypto');
const UtilService = require('../utility/util')
const htmlTemplateService = require('../utility/htmltemplate')

// const UserService = require('./user.service');
// const UserModel = require('./user.model'); 

const BrandModel = require('./brands.model')
// const UtilService = require('../utility/util');
// const htmlTemplateService = require('../utility/htmltemplates');
const UserSession = require('../userSession/userSession.model'); 
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

exports.activateAccount = async(req,res)=>{
    try {
        console.log('here')
        console.log(req.params.token)
        //
        let brand = await BrandModel.findOne({
            "accountActivated.token": req.params.token
        });
        console.log(brand)
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
