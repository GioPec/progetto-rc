var express = require('express'),
  session = require('express-session'),
  dotenv = require('dotenv').config(),
  router = express.Router(),
  axios = require('axios').default;


router.get('/', function(req, res) {
    let id = req.query.id;

    var theToken = req.header("SpotifyToken");

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