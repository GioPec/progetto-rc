var express = require('express'),
  session = require('express-session'),
  passport = require('passport'),
  ejs = require('ejs'),
  SpotifyStrategy = require('passport-spotify').Strategy,
  dotenv = require('dotenv').config(),
  router = express.Router(),
  axios = require('axios').default,
  mongoose = require('mongoose'),
  User = require('../../models/user');


const {ensureAuthenticated} = require('../../authControl');
const appKey = process.env.appKey;
const appSecret = process.env.appSecret;
const placeholderImage = "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png";


router.get('/', function(req, res) {
    let id = req.query.id;

    var theToken = req.query.token;    //???

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
            response.data.artists[0].name + '&apikey=' + process.env.musixmatchKey
        )
        .then(function (response2) {
            res.send(
                {"message": {
                    "header": {
                      "status_code": 200
                    },
                    "body": {
                      "name": response.data.name,
                      "artist": response.data.artists[0].name,
                      "lyrics": response2.data.message.body.lyrics.lyrics_body.substring(0, response2.data.message.body.lyrics.lyrics_body.length - 70)
                    }
                  }}
            )
        })
        .catch(function (error) {
            res.status(500).send(
                {"message": {
                    "header": {
                      "status_code": error.data.message.header.status_code
                    },
                    "body": {}
                  }}
            )
        })
    })

    .catch(function (error) {
        res.status(501).send(
            {"message": {
                "header": {
                  "message": error.message
                },
                "body": {}
            }
        }
        )
    })
});

module.exports = router;