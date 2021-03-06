var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var seedDB = require("./seeds");
var db_key = require('./db_key.js')
var index = require('./routes/index');
var mixesRoutes = require('./routes/mixes');

var app = express();
console.log(db_key);
mongoose.connect('mongodb://doguser:doguser@ds135552.mlab.com:35552/dogalchemy');
//seedDB()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/getMixes', mixesRoutes)

app.use(function(req, res, next) {
  return res.render('index')
});

module.exports = app;
