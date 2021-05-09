const UtilService = require('../../utility/util')
const htmlTemplateService = require('../../utility/htmltemplate')

// const UserService = require('./user.service');
// const UserModel = require('./user.model'); 

const BrandModel = require('../../brands/brands.model')
const userModel = require('../../user/user.model')
const UserSession = require('../../userSession/userSession.model')
const userSessionModel = require('../../userSession/userSession.model')
const notificationModel = require('../../notification-brand/notification-model')


exports.profileApprove = async(req,res)=>{
   console.log(req.body)
    let brand = await BrandModel.findById(req.body.id)
   
    await BrandModel.findByIdAndUpdate(req.body.id,{adminApproval: true}, async(err,upduser)=>{
      if(err){
        res.send({
          success: false,
          message: err.message
        })
      }else{
        let emailtoken = UtilService.generateRandomToken();
        let htmlTemplate =  htmlTemplateService.ApproveAccount( brand, emailtoken );
  
  
        // sending email to user for account activation
        await UtilService.sendEmail(brand.email,'Account Approved',htmlTemplate)
  
        res.send({
          success: true,
          message: 'profile approved'
        })
      }
    })
  }

exports.adminLogin = async(req,res)=>{
  try{
    let {email, password} = req.body
    console.log(req.body)
    await userModel.findOne({
        email
    }, (err,user)=>{
        if(err){
            res.send({
                success: false,
                message: err
            })    
        }
        if(user!=null){
            
            if(user.authenticate(password)){
                UserSession.create({user: user._id}, (err, raw)=>{ 
                    if(user.role == 'admin'){
                      res.send({success: true, jwt: raw._id, user})
                    }else{
                      res.send({success: false, message: 'Not a admin'})
                    }
                    
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
                message: "User not found"
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

exports.getAll = async(req,res)=>{
  try{
      await userModel.find({},async(err,user)=>{
        res.send({
          success: true,
          product: user.reverse()
        })
      })
  }catch(e){
    res.send({
        success: true,
        message: e.message
      })
  }
}


exports.getAllNotification = async(req,res)=>{
  try{
      await notificationModel.find({},async(err,noti)=>{
        res.send({
          success: true,
          product: noti.reverse()
        })
      })
  }catch(e){
    res.send({
        success: true,
        message: e.message
      })
  }
}


exports.brandDetail = async(req,res)=>{
    try{
      let brand = await BrandModel.findById(req.body.id)
      res.send({
        success: true,
        brand: brand
      })
    }catch(e){
    res.send({
        success: true,
        message: e.message
      })
  }
}
  