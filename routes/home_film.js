//const dotenv = require('dotenv').config();  //per la chiave privata, da implementare
const fetch= require('node-fetch');
require('dotenv').config();
var express = require("express");
var router = express.Router();
//var request = require("request");//deprecato
const got = require('got'); //usato al posto di request


//console.log(process.env);

router.get('/', function(req,res) {
    res.send("home_film in get");
});

router.post("/", function(req, res) { 
    var name = req.body.film;
    const chiave= process.env.API_KEY //da sistemare 'dc9e008d3ab078b29d0c9f141d07835b'
    /*
    var url = `https://api.themoviedb.org/3/search/movie?api_key=${chiave}&language=it&query=`+
      name +'&include_adult=false';
    */
   var url = 'https://api.themoviedb.org/3/search/movie?api_key='+'dc9e008d3ab078b29d0c9f141d07835b'+'&language=it&query='+
   name +'&include_adult=false';
    (async () => {
      try {
          const response = await got(""+url);
          let fileJson = JSON.parse(response.body);
          if(fileJson.total_results==0){
            res.send("il film che cerchi non esiste");
          }else{
            res.send(fileJson.results[0].overview);
          }
      } catch (error) {
          res.send("home_film_sto in post"+error.response.body);
      }
    })();
      /* equivalente usando require che ora è deprecato
    request(url, function(err, response, body) {
      if (err) {
        res.send("home_film_sto in post");
      }
      else {
        let fileJson = JSON.parse(body);
        if(fileJson.total_results==0){
          res.send("il film che cerchi non esiste");
          
        }else{
          res.send(fileJson.results[0].overview);
        }
      }
    });
    */
});

module.exports = router;