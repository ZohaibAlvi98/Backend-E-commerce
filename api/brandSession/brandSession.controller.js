'use strict';

const path = require('path');
const fs = require('fs');

const _ = require('lodash');
const moment = require('moment');

const BrandSessionModel = require('./brandSession.model');
const BrandModel = require('../brands/brands.model');

exports.verify = async function(req, res) {
    req.query.token = req.header('Authorization_Br_Token')
   
  
    if (req.query.token != undefined) {
      try {
        
        BrandSessionModel.findById(req.query.token, async (err, sessions) => {
          if (err) {
            //console.log("err", err);
          }
          //console.log('Session found', sessions);
       
          if (sessions != undefined) {
            if (!sessions.isDeleted) {
              //console.log(sessions.userId);
              await BrandModel.findById( sessions.brand.toString()
              , (err, brand) => {
             
                if(brand.length !=0 && brand != null){
               
                    res.send({
                      success: true,
                      brand: brand
                    });
                  
              }
          })
      }
  }
        })
      }catch (e) {
          res.send({
            success: false,
            messaage: "undefined"
          })
        }
  }
  }
