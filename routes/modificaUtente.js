var express = require('express'),
  session = require('express-session'),
  ejs = require('ejs'),
  router = express.Router(),
  bodyParser = require('body-parser'),
  fetch = require('node-fetch');

const {ensureAuthenticated} = require('../authControl');

router.post('/', ensureAuthenticated, function(req,res) {

    User.findOne({
        email: req.body.vecchiaEmail
        }).then(user => {
            var tt = user.topTracks;
            var ta = user.topArtists;
            var taParsato = JSON.parse(ta);
            var ttParsato = JSON.parse(tt);

            //inserimento in db
            updatedUser = {
                username: req.body.nuovoUsername,
                picture: req.body.nuovoFile,
                country: req.body.nuovoPaese,

                email: user.email,
                id: user.id,
                uri: user.uri,
                topTracks: user.topTracks,
                topArtists: user.topArtists
            }

            User.findOneAndUpdate({
                email: req.body.vecchiaEmail
                }, updatedUser , {upsert: true}).then(ris => {
                    res.render('account.ejs', { user: updatedUser, data: taParsato, dataBrani: ttParsato });
                })

    })
});

module.exports = router;