require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs= require("ejs");
const session = require("express-session");
const passport = require("passport");
const passportConfig=require("./config/passport");
const methodOverride = require('method-override');

//  const passportLocalMongoose= require("passport-local-mongoose");

//routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const boardRouter= require('./routes/board');
const messageRouter = require("./routes/message");

//database

// const Messages= require("./models/board");
const User =require("./models/useres");
const mongoose = require("mongoose");
// const passport = require('./config/passport');
let mongourl=`mongodb+srv://spikee:${process.env.MONGODBKEY}@cluster0.w1arv.mongodb.net/message?retryWrites=true&w=majority`;
mongoose.connect(mongourl, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const app = express();


app.set("view engine", "ejs");

app.use(session({
  secret: 'potato potahto',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge:24*60*60*1000
  }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth',authRouter);
app.use('/board',boardRouter);
app.use('/board/:bid/message',messageRouter);

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
