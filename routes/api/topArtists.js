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

async function getTopArtists(req) {

    var theUtente = await User.findOne({ email: req.user.email })

    return theUtente.topArtists;

}

router.get('/', )