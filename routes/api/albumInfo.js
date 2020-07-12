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

const placeholderImage = "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png";

router.get('/', function(req, res) {
    let id = req.query.id;

    var theToken = req.query.token;

    let bearerHeader = "Bearer "+ theToken
    let headers = {
        'Authorization': bearerHeader
    }

    axios.get(
        'https://api.spotify.com/v1/albums/' + id,
        {headers: headers}
    )
    
    .then(function (response) {
        res.send(
            {"message": {
                "header": {
                  "status_code": 200
                },
                "body": {
                  "name": response.data.name,
                  "artist": response.data.artists[0].name,
                  "tracks": response.data.tracks.items
                }
              }}
        )
    })

    .catch(function (error) {
       res.status(404).send(
        {"message": {
            "header": {
              "status_code": error.message
            },
            "body": {}
          }}
       )
    })
});

module.exports = router;