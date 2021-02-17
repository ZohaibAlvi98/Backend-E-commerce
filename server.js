'use strict';
const dotenv = require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const passport = require('passport');
const session = require('express-session');
const busboyBodyParser = require('busboy-body-parser');
const path = require('path');
const app = express();
var compression = require('compression');
var cors = require('cors');

const PORT = process.env.PORT;

global.ROOTPATH = __dirname;
const _ = require('lodash');
const moment = require('moment');
 
app.use('/auth', require('./auth'))

app.locals.moment = require('moment');

app.get('/dist-user-images/:filename', function(req, res) {
  var filename = req.params.filename.replace(/'/g, '');
  res.sendFile(path.resolve('./dist/App/assets/images/user/' + filename));
});

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', "access-control-allow-headers,access-control-allow-origin,content-type,Authorization_Token,Service_ID");

  if (req.method === 'OPTIONS') {
      res.sendStatus(200);
  } else {
      next();
  }
});

app.use(compression());
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

require('./config')(app);
require('./routes')(app);

app.listen(PORT, function() {
  console.log('Server listening on PORT : ' + PORT);
})
