var express = require('express'),
  session = require('express-session'),
  ejs = require('ejs'),
  dotenv = require('dotenv').config(),
  axios = require('axios'),
  router = express.Router();

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
                'https://api.spotify.com/v1/albums/' + id,
                {headers: headers}
            )
            
            .then(function (response) {
                res.render('datialbum.ejs', { spotify: response.data, user: req.user });
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
                                    'https://api.spotify.com/v1/albums/' + id,
                                    {headers: headers2}
                                )
                                
                                .then(function (response) {
                                    res.render('datialbum.ejs', { spotify: response.data, user: req.user });
                                })
                            })
                        })
                      
                })}
                else console.log(error);
            })
        })
});

module.exports = router;