var express = require('express'),
  session = require('express-session'),
  ejs = require('ejs'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = require('../models/user');


const {ensureAuthenticated} = require('../authControl');

router.get('/', ensureAuthenticated, function(req, res) {

    User.findOne({
        id :req.query.id
        }).then(theUser => {
            var tt = JSON.parse(theUser.topTracks);
            var ta = JSON.parse(theUser.topArtists);
            res.render('accountPubblico.ejs', { user: theUser, data: ta, dataBrani: tt });
        })
  });

  module.exports = router;