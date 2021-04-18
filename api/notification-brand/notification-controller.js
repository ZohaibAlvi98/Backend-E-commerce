'use strict';

const fs = require('fs');
const path = require('path');
var crypto = require('crypto');
const UtilService = require('../utility/util')
const htmlTemplateService = require('../utility/htmltemplate')
const NotificationModel = require('./notification-model')
const ProductModel = require('../product/product-model')
// const UserService = require('./user.service');
// const UserModel = require('./user.model'); 
const Vonage = require('@vonage/server-sdk')

const BrandModel = require('../brands/brands.model')
const _ = require('lodash');
const productModel = require('../product/product-model');

exports.create = async(req,res)=>{
    try{
        var val = Math.floor(1000 + Math.random() * 9000);
   

    console.log(req.body)
    req.body.product.map(async pro =>{
        pro['orderId'] = val
        pro['userId'] = req.user._id
        pro['userName'] = req.user.fullName
        // console.log(pro)
        await productModel.findById(pro.prodId,async(err,product)=>{
            // console.log(pro)
            if(!pro){
                res.send({
                    success: false,
                    message: 'Product is not found'
                })
            }else{
                await BrandModel.findById(pro.brandId,async(err,brand)=>{
                    // console.log(brand)
                   
                    await NotificationModel.create(pro,async(err,noti)=>{
                        if(err){
                            console.log(err)
                        }
                        // let emailtoken = UtilService.generateRandomToken();
                        // let htmlTemplate =  htmlTemplateService.orderPlaced( req.user, pro.name, pro.price );
                        // let htmlForOrderRequest = htmlTemplateService.notificationForOrder(  req.user, pro.name, pro.price );
                
                        // // sending email to user for account activation
                        // // unionliveappdev@gmail.com
                        // await UtilService.sendEmail(brand.email,'Order Request',htmlTemplate)
                        // await UtilService.sendEmail('mmzee.org@gmail.com','Order Request',htmlForOrderRequest)
                        
                        const vonage = new Vonage({
                            apiKey: "e0fc0d74",
                            apiSecret: "46ECCup2qg1SS6In"
                          })
                          const from = "Zohaib"
                          const to = brand.companyContactNumber
                          const text = `A User just placed an order on MMZEE application. Username: ${req.user.fullName},city: ${pro.city},\nIgnore the below lines`
                          
                         await vonage.message.sendSms(from, to, text, (err, responseData) => {
                              if (err) {
                                //   console.log(err);
                              } else {
                                  if(responseData.messages[0]['status'] === "0") {
                                      console.log("Message sent successfully.");
                                      res.send({
                                        success: true,
                                        noti:noti
                                    })
                                  } 
                              }
                          })
                       
                    })
                })
              
            }
        })
    })
   
}catch(e){
    res.send({
        success: true,
        message: e.message
})
}

}