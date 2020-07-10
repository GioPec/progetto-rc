  
var express = require("express");
var router = express.Router();

const {ensureAuthenticated} = require('../authControl');

router.get('/', ensureAuthenticated, (req, res) => {
    res.render('chat.ejs', { user: req.user });
});

module.exports = router;