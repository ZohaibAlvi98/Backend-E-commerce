'use strict';

var express = require('express');
var controller = require('./user-admin.controller');
var auth = require('../../../auth/auth.service');

var router = express.Router();

router.post('/approve-account',auth.isAdmin(),controller.profileApprove)

module.exports = router;
