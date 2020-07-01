var express = require('express');
const fetch= require('node-fetch');
const flash = require('connect-flash');  //https://www.npmjs.com/package/connect-flash
var bodyParser = require("body-parser");  //https://www.npmjs.com/package/body-parser

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));


//prove
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/primo', function (req, res) {
    res.send('sono la prima risorsa GET su questo server');
});
app.post('/primopost', function (req, res) {
    res.send('sono la stessa_risorsa acceduta in POST');
  });
//fine prove


//routes
//modulo trama film
var home_film = require('./routes/home_film');
app.use('/home_film', home_film);


//apro connessione su porta 3000
var server= app.listen(3000, function () {
    var host=server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

module.exports = app;