var express = require('express'),
  session = require('express-session'),
  router = express.Router(),
  axios = require('axios').default;

router.delete('/', function(req, res) {
    let email = req.query.email;

    var theToken = req.header("SpotiXToken");

    User.findOne({
        email: email
        }).then( theUtente => {
    
            if(theUtente.sessionToken==theToken) {

                User.findOneAndDelete({
                    email: email
                    }).then(ris => {

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