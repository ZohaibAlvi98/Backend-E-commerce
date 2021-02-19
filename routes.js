'use strict';


var path = require('path');

module.exports = function(app){

    // ANALYTICS USAGE

    app.use('/api/user', require('./api/user'));
    app.use('/api/userSesion', require('./api/userSession'));
    app.use('/api/brandSession', require('./api/brandSession'));

    app.use('/api/brands', require('./api/brands'));
    app.use('/api/admin/user-admin', require('./api/admin/user-admin'));




    app.route('/*')
        .get(function(req, res) {
            // Commented path is for angular 6 build post production
            res.sendFile(path.resolve( __dirname + '/dist/App/index.html'));
            // res.sendFile(path.resolve( __dirname + '/index.html'));
        });

}
