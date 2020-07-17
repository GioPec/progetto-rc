var express = require('express'),
  session = require('express-session'),
  router = express.Router(),
  axios = require('axios').default;

router.get('/', function(req, res) {
    var name = req.query.name;
    var theToken = req.header("SpotifyToken");

    if(name=="" || theToken=="") {
        res.status(400).send(
            {"message": {
                "header": {
                  "message": "Bad request 400"
                },
                "body": {}
            }
        }
    )}
    
    var url = 'https://api.spotify.com/v1/search?q='+name+'&type=album&limit=5';

    let bearerHeader = "Bearer "+ theToken
    let headers = {
        'Authorization': bearerHeader
    }

    axios.get(
        url,
        {headers: headers}
    )
    
    .then(function (response) {
        res.send(
            {"message": {
                "header": {
                  "status_code": 200
                },
                "body": {
                  "tracks": response.data.albums
                }
              }
            }
        )
    })
    .catch(function (error) {
        res.status(404).send(
            {"message": {
                "header": {
                  "message": error.message
                },
                "body": {}
            }
        }
    )})
});

module.exports = router;