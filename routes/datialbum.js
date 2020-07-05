var express = require('express'),
  session = require('express-session'),
  ejs = require('ejs'),
  dotenv = require('dotenv').config(),
  axios = require('axios'),
  router = express.Router();

const {ensureAuthenticated} = require('../authControl');
const { response } = require('express');

router.get('/', function(req,res) {
    let id = req.query.id;
    //console.log(id);

    var theToken = process.env.theToken;    //???

    let bearerHeader = "Bearer "+ theToken
    let headers = {
        'Authorization': bearerHeader
    }

    axios.get(
        'https://api.spotify.com/v1/albums/' + id,
        {headers: headers}
    )
    
    .then(function (response) {
        res.render('datialbum.ejs', { spotify: response.data, user: req.user});
    })

    .catch(function (error) {
        console.log(error);
    })
});

module.exports = router;