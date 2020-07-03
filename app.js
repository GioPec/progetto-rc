var express = require('express'),
  session = require('express-session'),
  passport = require('passport'),
  ejs = require('ejs'),
  SpotifyStrategy = require('passport-spotify').Strategy,
  dotenv = require('dotenv').config();

//var consolidate = require('consolidate');

var app = express();

// configure Express
app.set('views', __dirname + '/views'); //cerco le views direttamente nella cartella giusta
app.set('view engine', 'ejs');

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

//app.use(express.static(__dirname + '/public'));
//app.engine('html', consolidate.ejs);

//ROUTES

var authRouter = require('./routes/auth');
app.use('/', authRouter);

//

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //next(createError(404));
  var router = express.Router();
  module.exports = router;
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

app.listen(8888);
