'use strict';

var express = require('express');
var controller = require('./brands.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('fetch-all-brands',controller.fetchAllBrands);

router.post('/create',controller.create);

router.get('/activate-account/:token', controller.activateAccount);

module.exports = router;