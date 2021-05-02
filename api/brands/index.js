'use strict';

var express = require('express');
var controller = require('./brands.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/fetch-all-brands',controller.fetchAllBrands);

router.post('/create',controller.create);

router.get('/activate-account/:token', controller.activateAccount);

router.post('/brand-login',controller.login)

router.get('/brand-by-id/:id',controller.brandById)

router.get('/brand-by-token',auth.isBrandAuthenticated(),controller.brandByToken)

router.get('/update/:id',auth.isBrandAuthenticated(),controller.update)


module.exports = router;