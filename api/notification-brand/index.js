'use strict';

var express = require('express');
var controller = require('./notification-controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/create-notification',auth.isAuthenticated(), controller.create)

router.get('/get-notification', auth.isBrandAuthenticated(), controller.getNotification)

module.exports = router;
