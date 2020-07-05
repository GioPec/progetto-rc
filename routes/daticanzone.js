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

    var url = 'https://api.spotify.com/v1/tracks/' + id;

    let bearerHeader = "Bearer "+ theToken
    let headers = {
        'Authorization': bearerHeader
    }

    //tutto pronto inviamo il messaggio con axios
    axios.get(
        url,
        {headers: headers}
    )
    
    //qualsiasi sia l'esito se la vede il chiamante
    .then(function (response) {
        res.render('daticanzone.ejs', { data: response.data, user: req.user});
    })
    .catch(function (error) {
        console.log(error);
    })
});

module.exports = router;