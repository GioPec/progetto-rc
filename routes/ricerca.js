var express = require('express'),
  session = require('express-session'),
  ejs = require('ejs'),
  dotenv = require('dotenv').config(),
  router = express.Router(),
  got = require('got');
//const fetch= require('node-fetch');

const {ensureAuthenticated} = require('../authControl');
const appKey = process.env.appKey;
const appSecret = process.env.appSecret;

router.get('/', function(req,res) {
    res.send("home_film in get");
});

router.post("/", function(req, res) { 
    var name = 'Despacito';

    var theToken = fs.readFile('token.txt', function(err, data) {});

    console.log(theToken);

    var url = 'https://api.spotify.com/v1/search?q='+name+'&type=track';
        (async () => {
        try {
            const response = await got(url);
            let fileJson = JSON.parse(response.body);
            if(false){
                res.send("La canzone che cerchi non esiste");
            }else{
                res.send(fileJson);
            }
        } catch (error) {
            res.send(error.response.body);
        }
    })();
});

module.exports = router;