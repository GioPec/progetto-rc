var express = require('express'),
  session = require('express-session'),
  ejs = require('ejs'),
  dotenv = require('dotenv').config(),
  router = express.Router(),
  axios = require('axios').default,
  bodyParser = require('body-parser'),
  fetch = require('node-fetch');

const {ensureAuthenticated} = require('../authControl');
const appKey = process.env.appKey;
const appSecret = process.env.appSecret;

router.get('/', ensureAuthenticated, function(req,res) {
    res.render('ricerca.ejs', { user: req.user });
});

router.post("/", ensureAuthenticated, function(req, res) { 
    var name = req.body.song.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if(name=="") {
        res.render("ricerca.ejs", { user: req.user });
    }

    var theToken = process.env.theToken;    //???

    var url = 'https://api.spotify.com/v1/search?q='+name+'&type=track&limit=5';

    let bearerHeader = "Bearer "+ theToken
    let headers = {
        'Authorization': bearerHeader
    }

    axios.get(
        url,
        {headers: headers}
    )
    
    .then(function (response) {
        res.render('risultati.ejs', { data: response.data, user: req.user});
    })
    .catch(function (error) {
        console.log(error);
    })
});

module.exports = router;