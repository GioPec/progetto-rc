var express = require('express'),
  session = require('express-session'),
  router = express.Router(),
  axios = require('axios').default;

router.patch('/', function(req, res) {
    let email = req.query.email;
    let username = req.query.username;
    let country = req.query.country;
    let picture = req.query.picture;

    var theToken = req.header("SpotiXToken");

    User.findOne({
        email: email
        }).then( theUtente => {
    
            if(theUtente.sessionToken==theToken) {

                //inserimento in db
                if(!username) username=theUtente.username;
                if(!country) country=theUtente.country;
                if(!picture) picture=theUtente.picture;
                
                completeUser = {
                    country: country,
                    picture: picture,
                    username: username
                }

                User.findOneAndUpdate({
                    email: email
                    }, completeUser, {upsert: true, useFindAndModify: false}).then(ris => {
                        ris.country=country;
                        ris.picture=picture;
                        ris.username=username;

                        res.send( {"message": {
                            "header": {
                                "status_code": 200
                            },
                            "body": {
                                "user": ris
                            }
                        }})
                    });
            }

            else {
                res.status(403).send( {"message": {
                "header": {
                    "status_code": "Forbidden"
                },
                "body": {}
            }}) }

        }).catch( error => {
            res.status(404).send( {"message": {
                "header": {
                    "status_code": error
                },
                "body": {}
            }}
        )});
      });
    
module.exports = router;