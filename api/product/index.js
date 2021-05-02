'use strict';

var express = require('express');
var controller = require('./product.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/create-product',auth.isBrandAuthenticated(), controller.createProduct)

router.get('/fetch-all-products',auth.isBrandAuthenticated(), controller.getAll)

router.get('/all-random-products',controller.all)

router.get('/product-by-id/:id',controller.fetchById)

router.get('/remove/:id',auth.isBrandAuthenticated(),controller.remove)

module.exports = router;
