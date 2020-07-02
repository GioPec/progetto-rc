var express = require('express');
const fetch= require('node-fetch');
const flash = require('connect-flash');  //https://www.npmjs.com/package/connect-flash
var bodyParser = require("body-parser");  //https://www.npmjs.com/package/body-parser

var app = express();

var client_id = '6c036ce4eb7d461cb5ea006e055d5494'; // Your client id
var client_secret = '81303dd1935f4e6aaa80495d452b2263'; // Your secret
var redirect_uri = 'localhost:3000'; // Your redirect uri

var scopes = 'user-read-private user-read-email'

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