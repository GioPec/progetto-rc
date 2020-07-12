var express = require('express'),
  session = require('express-session'),
  passport = require('passport'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = require('../../models/user');


router.get('/', function(req, res) {
    User.findOne({ email: req.query.email }).then( theUtente => {

        res.send( {"message": {
            "header": {
                "status_code": 200
            },
            "body": {
                "artists": JSON.parse(theUtente.topTracks)
            }
        }
    }
    )}).catch( error => {
        res.status(404).send( {"message": {
            "header": {
                "status_code": error
            },
            "body": {}
        }}
    )});
});

module.exports = router;