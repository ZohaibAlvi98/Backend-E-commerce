'use strict';

var express = require('express');
var controller = require('./cart.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/add-to-cart',auth.isAuthenticated(), controller.addToCart);

router.get('/getAll',auth.isAuthenticated(),controller.getAll)

module.exports = router;
