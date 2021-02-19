'use strict';

var express = require('express');
var controller = require('./brandSession.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/verify-brand', controller.verify);

module.exports = router;
