'use strict';

// Nodemailer
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    type: "SMTP",
    port: 587,
    secure: false, // true for 465, false for other ports

    auth: {
        user: 'mmzee.org@gmail.com', // generated ethereal user
        pass: '@Platform12'  // generated ethereal password
    }
});

// random token generator
const UIDGenerator = require('uid-generator');


exports.sendEmail = function(to,subject,html){

    return new Promise(function(resolve,reject){


        let mailOptions = {
            from: 'smtp.gmail.com', // sender address
            to: to, // list of receivers
            subject: subject,
            html: html
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                
                reject(error);
            }else{
                resolve();
            }
        });

    })
}


exports.generateRandomToken = function(){

    const uidgen = new UIDGenerator();
    return uidgen.generateSync();

}