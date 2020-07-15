var express = require('express'),
  session = require('express-session'),
  passport = require('passport'),
  ejs = require('ejs'),
  SpotifyStrategy = require('passport-spotify').Strategy,
  dotenv = require('dotenv').config(),
  router = express.Router(),
  axios = require('axios').default,
  mongoose = require('mongoose'),
  User = require('../models/user');


const {ensureAuthenticated} = require('../authControl');
const appKey = process.env.appKey;
const appSecret = process.env.appSecret;
const placeholderImage = "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png";
var newUser;
var sessionToken;

function generateRandomToken() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

  // Passport setup
    passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
    passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
  
  // Passport SpotifyStrategy
    passport.use(
    new SpotifyStrategy(
      {
        clientID: appKey,
        clientSecret: appSecret,
        callbackURL: 'http://localhost:8888/callback'
      },
      function(accessToken, refreshToken, expires_in, profile, done) {

        //console.log(expires_in);
        
        process.env.theToken = accessToken;

        console.log(process.env.theToken);
        
        sessionToken = generateRandomToken();
          
        process.nextTick(function() {
          
          newUser = {
            email: profile._json.email,
            id: profile._json.id,
            username: profile._json.display_name,
            picture: profile._json.images[0] ? profile._json.images[0].url : placeholderImage,
            uri: profile._json.uri,
            country: profile._json.country,
            topTracks: "",
            topArtists: "",
          }
          // Controllo esistenza User
          User.findOne({
            email:newUser.email
            }).then(user => {
            if(user){
            done(null, user);
            } else {
            new User(newUser)
                .save()
                .then(user => done(null, user));
                }
            })
        });
      }
    )
  );

    router.get('/', function(req, res) {
      if(!req.user) res.render('index.ejs', { user: req.user }); 
      else {
        User.findOne({
          email: req.user.email
          }).then(newUser => {
              res.render('index.ejs', { user: newUser })
          })
      }
      
    });
  
    router.get('/account', ensureAuthenticated, function(req, res) {

      var theUtente;

      User.findOne({
        email: req.user.email
        }).then( newUser => { theUtente=newUser;

          //GET top artists
          var url = 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=10';

          var theToken = process.env.theToken;

          let bearerHeader = "Bearer "+ theToken;
          let headers = {
              'Authorization': bearerHeader
          }

          axios.get(
              url,
              {headers: headers}
          )
          
          .then(function (response) {

                //GET top tracks
                var urlBrani = 'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=10';

                axios.get(
                  urlBrani,
                  {headers: headers}
                )
                .then(function (responseBrani) {

                    //inserimento in db
                    completeUser = {
                      username: newUser.username,
                      picture: newUser.picture,
                      country: newUser.country,
                      email: newUser.email,
                      id: newUser.id,
                      uri: newUser.uri,
                      topTracks: JSON.stringify(responseBrani.data),
                      topArtists: JSON.stringify(response.data),
                      sessionToken: sessionToken
                    }

                    User.findOneAndUpdate({
                      email: completeUser.email
                      }, completeUser, {upsert: true, useFindAndModify: false}).then(ris => {
                        res.render('account.ejs', { user: completeUser, data: response.data, dataBrani: responseBrani.data, sessionToken: sessionToken });
                      });

                    
                })
                .catch(function (error) {
                    console.log(error);
                })

          })
          .catch(function (error) {
              console.log(error);
          })
        })
    });
  
    router.get('/login', function(req, res) {
        res.render('login.ejs', { user: req.user });
    });
  
  router.get(
    '/auth/spotify',
    passport.authenticate('spotify', {
      scope: ['user-read-email', 'user-read-private', 'user-top-read'],
      showDialog: true
    }),
    function(req, res) {
      // Qui non ci arriviamo mai
    }
  );
  
  router.get(
    '/callback',
    passport.authenticate('spotify', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/account');
    }
  );
  
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  module.exports = router;