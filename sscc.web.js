const package = require('./package');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
app.fs = require('fs');
app.path = require('path');

// Variables ==================================================================
app.title = package.title;
app.port = package.port;
app.version = package.version;
app.description = package.description;
app.keywords = package.keywords ? JSON.stringify(package.keywords) : '';
app.isDebug = require('os').hostname().indexOf('local') > -1;
app.autoLogin = package.autoLogin;
app.mongodb = 'mongodb://localhost:27017/' + package.dbName;
// app.mongodb = 'mongodb://congluc19297:congluc19297@ds251902.mlab.com:51902/hello-world';
app.mailCc = ['hithanhtung@gmail.com'];
app.mailAdmin = ['thanhtung@hcmut.edu.vn'];
app.defaultAdminEmail = package.default.adminEmail;
app.defaultAdminPassword = package.default.adminPassword;
app.srcPath = app.path.join(__dirname, package.path.src);
app.viewPath = app.path.join(__dirname, package.path.view);
app.modelPath = app.path.join(__dirname, package.path.model);
app.controllerPath = app.path.join(__dirname, package.path.controller);
app.publicPath = app.path.join(__dirname, package.path.public);
app.logPath = app.path.join(__dirname, package.path.log);
app.uploadPath = app.path.join(__dirname, package.path.upload);
app.faviconPath = app.path.join(__dirname, package.path.favicon);

// Configure ==================================================================
require('./src/config/common')(app);
require('./src/config/view')(app, express);
require('./src/config/packages')(app, server);
require('./src/config/database')(app);
require('./src/config/authentication')(app);
require('./src/config/notification')(app);
require('./src/config/io')(app, server);

// Init =======================================================================
app.loadModels();
app.loadControllers();
app.createFolder([app.publicPath, app.uploadPath]);
if (!app.isDebug) app.createFolder(app.logPath);
require('./src/config/error')(app);

// Launch website =============================================================
app.keywords = (app.keywords && app.keywords.length > 2 ? app.keywords.substring(2, app.keywords.length - 2) : '').replaceAll('","', ', ');
server.listen(app.port, () => console.log(' - ' + app.title + ' on http://localhost:%d.', app.port));