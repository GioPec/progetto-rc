var express = require('express'),
  session = require('express-session'),
  passport = require('passport'),
  ejs = require('ejs'),
  SpotifyStrategy = require('passport-spotify').Strategy,
  dotenv = require('dotenv').config();

var app = express();

// configura
app.set('views', __dirname + '/views'); //cerco le views direttamente nella cartella giusta
app.set('view engine', 'ejs');

// sessione
app.use(session({ secret: process.env.cookieSegreto, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//app.use(express.static(__dirname + '/public'));

//ROUTES

var authRouter = require('./routes/auth');
app.use('/', authRouter);

var ricerca = require('./routes/ricerca');
app.use('/ricerca', ricerca);

//

app.use(function(req, res, next) {
  //next(createError(404));
  var router = express.Router();
  module.exports = router;
});

app.listen(8888, () => { console.log('Server started on port 8888!')});

module.exports = app;