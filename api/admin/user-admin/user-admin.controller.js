const UtilService = require('../../utility/util')
const htmlTemplateService = require('../../utility/htmltemplate')

// const UserService = require('./user.service');
// const UserModel = require('./user.model'); 

const BrandModel = require('../../brands/brands.model')



exports.profileApprove = async(req,res)=>{
   
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
  