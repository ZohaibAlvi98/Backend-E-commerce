'use strict';

const fs = require('fs');
const path = require('path');
var crypto = require('crypto');


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
         filePath = path.join(ROOTPATH, 'images/brands/cnic', filename + "." + req.files.cnic.mimetype.split("/")[1])
        fs.writeFileSync(filePath, req.files.cnic.data);

        var tempFile = filename + "." + req.files.cnic.mimetype.split("/")[1];
        req.body['CNICPhoto'] = tempFile;

        filename = Date.now()+Math.floor(Math.random() * 10^10000000);
        filePath = path.join(ROOTPATH, 'images/brands/ownerPhoto', filename + "." + req.files.ownerPhoto.mimetype.split("/")[1])
        fs.writeFileSync(filePath, req.files.ownerPhoto.data);

        var tempFile = filename + "." + req.files.ownerPhoto.mimetype.split("/")[1];
        req.body['ownerPhoto'] = tempFile;

        await BrandModel.create(req.body,async(err,brands)=>{
            if(err){
                console.log(err)
            }else{
                res.send({
                    success: true,
                    brands: brands
                })
            }
           
        })
        // await BrandModel.create(req.body,async(req,res)=>{

        // })
    }catch(e){
        res.send({
            success: true,
            message: e.message
    })
    }
}