// =======================
// get instance we need
// =======================
var express           = require('express');
var app               = express();
var bodyParser        = require('body-parser');
var session            = require('express-session');
var path               = require('path');
var routes             = require('./routes/routes');

// =======================
// configuration
// =======================
var port = process.env.PORT || 8080;

// request parameter parser
app.use(bodyParser.urlencoded({
  extended: true
}));

// static file folder
app.use(express.static('public'));

// html template
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// session
app.use(session({
  secret: 'xxxxxxxxxxxxx'
}));

// =======================
// routes
// =======================
app.use('/', routes);

// =======================
// start the server
// =======================
app.listen(port);
console.log('application started');

