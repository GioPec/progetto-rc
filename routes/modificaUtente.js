var express = require('express'),
  session = require('express-session'),
  ejs = require('ejs'),
  dotenv = require('dotenv').config(),
  router = express.Router(),
  axios = require('axios').default,
  bodyParser = require('body-parser'),
  fetch = require('node-fetch');

router.post('/', function(req,res) {

    var tt;
    var ta;

    User.findOne({
        email: req.body.vecchiaEmail
        }).then(user => {
            tt = user.topTracks;
            ta = user.topArtists;
            console.log(tt);
        })

    //inserimento in db
    updatedUser = {
        username: req.body.nuovoUsername,
        image: req.body.nuovoFile,
        country: req.body.nuovoPaese,
    }

    User.findOneAndUpdate({
        email: req.body.vecchiaEmail
        }, updatedUser , {upsert: true}).then(user => {
          //console.log(updatedUser.topTracks);
    })

    res.render('account.ejs', { user: updatedUser, data: JSON.parse(ta), dataBrani: JSON.parse(tt) });
});

module.exports = router;