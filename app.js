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
app.set('views', __dirname + '/views'); //cerco le views direttamente nella cartella giusta
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

//

app.use(function(req, res, next) {
  //next(createError(404));
  var router = express.Router();
  module.exports = router;
});

const server = app.listen(8888, () => { console.log('Server started on port 8888!')});

const io = socketIO(server);  //formazione WebSocket

//connessione con la socket
io.on('connection', (socket) => {
  //console.log('a user connected')
  socket.on('chatter', (message) => {
    //console.log('chatter : ', message)
    io.emit('chatter', message)
  })
})

module.exports = app;