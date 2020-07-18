var express = require('express'),
  session = require('express-session'),
  passport = require('passport'),
  ejs = require('ejs'),
  SpotifyStrategy = require('passport-spotify').Strategy,
  dotenv = require('dotenv').config(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  socketIO = require('socket.io');

var app = express();

// configura
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db
mongoose.connect(process.env.mongoURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then( function() { console.log("Connected to db")});

// sessione
app.use(session({ secret: process.env.cookieSegreto, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname));

//ROUTES

var authRouter = require('./routes/auth');
app.use('/', authRouter);

var ricerca = require('./routes/ricerca');
app.use('/ricerca', ricerca);

var ricercaAlbum = require('./routes/ricercaAlbum');
app.use('/ricercaAlbum', ricercaAlbum);

var daticanzone = require('./routes/daticanzone');
app.use('/daticanzone', daticanzone);

var datialbum = require('./routes/datialbum');
app.use('/datialbum', datialbum);

var chat = require('./routes/socket');
app.use('/chat', chat);

var edit = require('./routes/modificaUtente');
app.use('/modificaUtente', edit);

var accountPubblico = require('./routes/accountPubblico');
app.use('/accountPubblico', accountPubblico);

// API

var ta = require('./routes/api/topArtists');
app.use('/topArtists', ta);

var tt = require('./routes/api/topTracks');
app.use('/topTracks', tt);

var st = require('./routes/api/searchTracks');
app.use('/searchTracks', st);

var sa = require('./routes/api/searchAlbums');
app.use('/searchAlbums', sa);

var tl = require('./routes/api/trackLyrics');
app.use('/trackLyrics', tl);

var ai = require('./routes/api/albumInfo');
app.use('/albumInfo', ai);

var uu = require('./routes/api/updateUser');
app.use('/updateUser', uu);

var du = require('./routes/api/deleteUser');
app.use('/deleteUser', du);

//

const server = app.listen(8888, () => { console.log('Server started on port 8888!')});

// Gestione WebSocket

const io = socketIO(server);

io.on('connection', (socket) => {
  socket.on('chatter', (message) => {
    //console.log(message);
    io.emit('chatter', message)
  })
})

module.exports = app;