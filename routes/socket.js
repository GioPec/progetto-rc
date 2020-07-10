  
var express = require("express");
var router = express.Router();

const {ensureAuthenticated} = require('../authControl');

router.get('/', ensureAuthenticated, (req, res) => {
    User.findOne({
        email: req.user.email
        }).then(newUser => {
            res.render('chat.ejs', { user: newUser })
        })
});

module.exports = router;