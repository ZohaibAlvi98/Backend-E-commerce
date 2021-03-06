'use strict';

var express = require('express');
var controller = require('./product.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/create-product',auth.isBrandAuthenticated(), controller.createProduct)

router.get('/fetch-all-products',auth.isBrandAuthenticated(), controller.getAll)

module.exports = router;