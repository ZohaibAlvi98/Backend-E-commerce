'use strict';

var express = require('express');
var controller = require('./user-admin.controller');
var auth = require('../../../auth/auth.service');

var router = express.Router();

router.post('/approve-account',auth.isAdmin(),controller.profileApprove)

router.post('/admin-login',controller.adminLogin)

router.get('/get-all-user',auth.isAdmin(),controller.getAll)

router.get('/get-all-notification',auth.isAdmin(),controller.getAllNotification)

router.post('/brand-detail',auth.isAdmin(),controller.brandDetail)


module.exports = router;
