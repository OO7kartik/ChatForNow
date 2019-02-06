var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//variables that require our routes
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
var homeRouter = require('./routes/home');
var loginRouter = require('./routes/Login');
const register_details = require('./models/registerM');
//our express object
var app = express();

//connecting to mongoose
mongoose.connect('mongodb://007kartik:mlabvA1`@ds123465.mlab.com:23465/chatfornow', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

//       mongodb://<dbuser>:<dbpassword>@ds123465.mlab.com:23465/chatfornow

//url urlencodedParser
const urlencodedParser = bodyParser.urlencoded({ extended: false});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//to display these pages
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/', homeRouter);
app.use('/Login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
