var express = require('express'),
  session = require('express-session'),
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