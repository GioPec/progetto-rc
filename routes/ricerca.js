var express = require('express'),
  session = require('express-session'),
  ejs = require('ejs'),
  dotenv = require('dotenv').config(),
  router = express.Router(),
  axios = require('axios').default,
  bodyParser = require('body-parser'),
  fetch = require('node-fetch');

const {ensureAuthenticated, makeBasicHeader} = require('../authControl');

router.get('/', ensureAuthenticated, function(req,res) {
    res.render('ricerca.ejs', { user: req.user });
});

router.post("/", ensureAuthenticated, function(req, res) { 
    // Gestione accenti
    var name = req.body.song.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if(name=="") {
        res.render("ricerca.ejs", { user: req.user });
    }

    User.findOne({
        email: req.user.email
        }).then(u => {
            var theToken = u.SpotifyToken;

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
                if (error.response.status==401) {
                      
                    User.findOne({
                    email: req.user.email
                    }).then( u => {

                        var url2 = 'https://accounts.spotify.com/api/token';

                        bearerHeader = makeBasicHeader();
                        let headers = {
                            'Authorization': bearerHeader
                        }

                        let payload =
                        'grant_type=refresh_token&'+
                        'refresh_token='+u.refreshToken;    
              
                        axios.post(
                            url2,
                            payload,
                            {headers: headers}
                        )

                        .then(function (responseError) {
                            newTokenUser = {
                            SpotifyToken: responseError.data.access_token,
                            }
                            User.findOneAndUpdate({
                            email: u.email
                            }, newTokenUser, {upsert: true, useFindAndModify: false}).then(ris => {
                                
                                let bearerHeader2 = "Bearer "+ newTokenUser.SpotifyToken
                                let headers2 = {
                                    'Authorization': bearerHeader2
                                }

                                axios.get(
                                    url,
                                    {headers: headers2}
                                )
                                
                                .then(function (response) {
                                    res.render('risultati.ejs', { data: response.data, user: req.user});
                                })
                            })
                        })
                      
                })}
                else console.log(error);
            })
        })
});

module.exports = router;