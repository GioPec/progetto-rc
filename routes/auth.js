var express = require('express'),
  session = require('express-session'),
  passport = require('passport'),
  ejs = require('ejs'),
  SpotifyStrategy = require('passport-spotify').Strategy,
  dotenv = require('dotenv').config(),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = require('../models/user');


const {ensureAuthenticated} = require('../authControl');
const appKey = process.env.appKey;
const appSecret = process.env.appSecret;
const placeholderImage = "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png";

  // Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session. Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing. However, since this example does not
//   have a database of user records, the complete spotify profile is serialized
//   and deserialized.
    passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
    passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
  
  // Use the SpotifyStrategy within Passport.
  //   Strategies in Passport require a `verify` function, which accept
  //   credentials (in this case, an accessToken, refreshToken, expires_in
  //   and spotify profile), and invoke a callback with a user object.
    passport.use(
    new SpotifyStrategy(
      {
        clientID: appKey,
        clientSecret: appSecret,
        callbackURL: 'http://localhost:8888/callback'
      },
      function(accessToken, refreshToken, expires_in, profile, done) {
        
        process.env.theToken = accessToken; //???

        console.log(process.env.theToken);
          
        // asynchronous verification, for effect...
        process.nextTick(function() {
          
          const newUser = {
            email: profile._json.email,
            id: profile._json.id,
            username: profile._json.display_name,
            picture: profile._json.images[0] ? profile._json.images[0].url : placeholderImage,
            uri: profile._json.uri,
            country: profile._json.country,
          }
          //console.log(profile);
          //console.log(newUser);
          // Check for existing user
          User.findOne({
            email:profile.email //photos[0].value
            }).then(user => {
            if(user){
            // Return user
            done(null, user);
            } else {
            // Create user
            new User(newUser)
                .save()
                .then(user => done(null, user));
                }
            })

          //return done(null, profile);
        });
      }
    )
  );


    router.get('/', function(req, res) {
        res.render('index.ejs', { user: req.user });
    });
  
    router.get('/account', ensureAuthenticated, function(req, res) {
        res.render('account.ejs', { user: req.user });
    });
  
    router.get('/login', function(req, res) {
        res.render('login.ejs', { user: req.user });
    });
  
  // GET /auth/spotify
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request. The first step in spotify authentication will involve redirecting
  //   the user to spotify.com. After authorization, spotify will redirect the user
  //   back to this application at /auth/spotify/callback
  router.get(
    '/auth/spotify',
    passport.authenticate('spotify', {
      scope: ['user-read-email', 'user-read-private'],
      showDialog: true
    }),
    function(req, res) {
      // Qui non ci arriviamo mai
    }
  );
  
  // GET /auth/spotify/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request. If authentication fails, the user will be redirected back to the
  //   login page. Otherwise, the primary route function function will be called,
  //   which, in this example, will redirect the user to the home page.
  router.get(
    '/callback',
    passport.authenticate('spotify', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/');
    }
  );
  
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  module.exports = router;