var express = require('express'),
  session = require('express-session'),
  ejs = require('ejs'),
  dotenv = require('dotenv').config(),
  axios = require('axios'),
  router = express.Router();

const {ensureAuthenticated} = require('../authControl');
const { response } = require('express');

router.get('/', ensureAuthenticated, function(req,res) {
    let id = req.query.id;
    //console.log(id);

    var theToken = process.env.theToken;    //???

    let bearerHeader = "Bearer "+ theToken
    let headers = {
        'Authorization': bearerHeader
    }

    axios.get(
        'https://api.spotify.com/v1/tracks/' + id,
        {headers: headers}
    )
    
    .then(function (response) {

        //MUSIXMATCH

        axios.get(
            'http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=' + response.data.name + '&q_artist=' +
            response.data.artists[0].name + '&apikey=d9ac33f20bf282bc5799f661738e9661'
        )
        .then(function (response2) {
            res.render('daticanzone.ejs', { spotify: response.data, musixmatch: response2.data, user: req.user});
        })
        .catch(function (error) {
            console.log(error);
        })
    })

    .catch(function (error) {
        console.log(error);
    })
});

module.exports = router;