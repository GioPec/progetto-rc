var express = require('express'),
  session = require('express-session'),
  ejs = require('ejs'),
  dotenv = require('dotenv').config(),
  axios = require('axios'),
  router = express.Router(),
  passport = require('passport');

const {ensureAuthenticated, makeBasicHeader} = require('../authControl');
const { response } = require('express');

router.get('/', ensureAuthenticated, function(req,res) {
    let id = req.query.id;

    User.findOne({
        email: req.user.email
        }).then(u => {
            var theToken = u.SpotifyToken;

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
                    res.render('daticanzone.ejs', { spotify: response.data, musixmatch: response2.data, user: req.user});
                })
                .catch(function (error) {
                    console.log(error);
                })
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
                                
                                let bearerHeader2 = "Bearer "+ newTokenUser.SpotifyToken;
                                let headers2 = {
                                    'Authorization': bearerHeader2
                                }

                                axios.get(
                                    'https://api.spotify.com/v1/tracks/' + id,
                                    {headers: headers2}
                                )
                                
                                .then(function (response) {

                                    //MUSIXMATCH2

                                    axios.get(
                                        'http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=' + response.data.name + '&q_artist=' +
                                        response.data.artists[0].name + '&apikey=' + process.env.musixmatchKey
                                    )
                                    .then(function (response2) {
                                        res.render('daticanzone.ejs', { spotify: response.data, musixmatch: response2.data, user: req.user });
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    })
                                })
                            })
                        })
                      
                })}
                else console.log(error);
            })
        })
});

module.exports = router;