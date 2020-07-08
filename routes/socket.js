  
var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
    res.render('chat.ejs', { user: req.user });
});

module.exports = router;