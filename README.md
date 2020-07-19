# SpotiX

## Progetto per Reti di Calcolatori 2020

Il progetto consiste nella creazione di una web app che utilizzi un paradigma RESTful con api REST a protocollo CRUD.

## Requisiti
1. Il servizio REST che implementate (lo chiameremo SERV) deve offrire all'esterno delle API documentate con swagger per esempio
2. SERV si deve interfacciare con almeno due servizi REST “esterni”, cioè non su localhost (e.g. google maps)
3. Almeno uno dei servizi REST esterni deve essere “commerciale” (es: twitter, google, facebook, pubnub, parse, firbase etc)
4. Almeno uno dei servizi REST esterni deve richiedere oauth (e.g. google calendar)
5. Si devono usare Websocket e/o AMQP (o simili es MQTT)
6. Il progetto deve essere su GIT (GITHUB, GITLAB...) e documentato don un README che illustri almeno scopo del progetto, tecnologie usate, come installarlo, come far girare i casi di test
7. Le API REST implementate in SERV devono essere documentate su GIT e devono essere validate con un caso di test 

## Avvio
- Per installare le dipendenze eseguire ``` npm install ```, verranno lette dal file _package.json_ e installate.
- Per avviare il server eseguire ``` node app.js ```

## Descrizione
Il progetto realizzato utilizza le API fornite da Spotify al fine di effettuare la ricerca dei brani e degli album.

Inoltre vengono impiegate le API fornite da Musixmatch per trovare i testi dei brani.

Accedi al sito con il protocollo OAuth attraverso il tuo account Spotify, e potrai parlare con altri appassionati di musica come te utilizzando la chat integrata nel sito, che utilizza WebSocket.

## API reference

Le API utilizzate nel sito sono:

- [Spotify](https://developer.spotify.com/)
- [Musixmatch](https://developer.musixmatch.com/)

## Tecnologie usate

- NodeJS
- Express
- EJS
- Socket.io
- Bootstrap
- MongoDB

Sviluppato con VSCode (Live Share) e testato con Postman

## Documentazione API

https://app.swaggerhub.com/apis-docs/SpotiX/SpotiX/1#/

# Casi di test

### searchTracks

* **URL:**
  /searchTracks
* **Metodo:**
  'GET'
* **Parametri Url:**
  'name' = 'Bohemian Rhapsody'
* **Parametri Header:**
  'SpotifyToken' = '...'
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content** <sub><sup><p>{
    "message": {
        "header": {
            "status_code": 200
        },
        "body": {
            "tracks": {
                "href": "https://api.spotify.com/v1/search?query=despacito&type=track&offset=0&limit=5",
                "items": [
                    {
                        "album": {
                            "album_type": "album",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/4V8Sr092TqfHkfAA5fXXqG"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/4V8Sr092TqfHkfAA5fXXqG",
                                    "id": "4V8Sr092TqfHkfAA5fXXqG",
                                    "name": "Luis Fonsi",
                                    "type": "artist",
                                    "uri": "spotify:artist:4V8Sr092TqfHkfAA5fXXqG"
                                }
                            ],
                            "available_markets": [
                                "AD",
                                "AE",
                                "AL",
                                "AR",
                                "AT",
                                "AU",
                                "BA",
                                "BE",
                                "BG",
                                "BH",
                                "BO",
                                "BR",
                                "BY",
                                "CA",
                                "CH",
                                "CL",
                                "CO",
                                "CR",
                                "CY",
                                "CZ",
                                "DE",
                                "DK",
                                "DO",
                                "DZ",
                                "EC",
                                "EE",
                                "EG",
                                "ES",
                                "FI",
                                "FR",
                                "GB",
                                "GR",
                                "GT",
                                "HK",
                                "HN",
                                "HR",
                                "HU",
                                "ID",
                                "IE",
                                "IL",
                                "IN",
                                "IS",
                                "IT",
                                "JO",
                                "JP",
                                "KW",
                                "KZ",
                                "LB",
                                "LI",
                                "LT",
                                "LU",
                                "LV",
                                "MA",
                                "MC",
                                "MD",
                                "ME",
                                "MK",
                                "MT",
                                "MX",
                                "MY",
                                "NI",
                                "NL",
                                "NO",
                                "NZ",
                                "OM",
                                "PA",
                                "PE",
                                "PH",
                                "PL",
                                "PS",
                                "PT",
                                "PY",
                                "QA",
                                "RO",
                                "RS",
                                "RU",
                                "SA",
                                "SE",
                                "SG",
                                "SI",
                                "SK",
                                "SV",
                                "TH",
                                "TN",
                                "TR",
                                "TW",
                                "UA",
                                "US",
                                "UY",
                                "VN",
                                "XK",
                                "ZA"
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/5C0YLr4OoRGFDaqdMQmkeH"
                            },
                            "href": "https://api.spotify.com/v1/albums/5C0YLr4OoRGFDaqdMQmkeH",
                            "id": "5C0YLr4OoRGFDaqdMQmkeH",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b273ef0d4234e1a645740f77d59c",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e02ef0d4234e1a645740f77d59c",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d00004851ef0d4234e1a645740f77d59c",
                                    "width": 64
                                }
                            ],
                            "name": "VIDA",
                            "release_date": "2019-02-01",
                            "release_date_precision": "day",
                            "total_tracks": 15,
                            "type": "album",
                            "uri": "spotify:album:5C0YLr4OoRGFDaqdMQmkeH"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4V8Sr092TqfHkfAA5fXXqG"
                                },
                                "href": "https://api.spotify.com/v1/artists/4V8Sr092TqfHkfAA5fXXqG",
                                "id": "4V8Sr092TqfHkfAA5fXXqG",
                                "name": "Luis Fonsi",
                                "type": "artist",
                                "uri": "spotify:artist:4V8Sr092TqfHkfAA5fXXqG"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m"
                                },
                                "href": "https://api.spotify.com/v1/artists/4VMYDCV2IEDYJArk749S6m",
                                "id": "4VMYDCV2IEDYJArk749S6m",
                                "name": "Daddy Yankee",
                                "type": "artist",
                                "uri": "spotify:artist:4VMYDCV2IEDYJArk749S6m"
                            }
                        ],
                        "available_markets": [
                            "AD",
                            "AE",
                            "AL",
                            "AR",
                            "AT",
                            "AU",
                            "BA",
                            "BE",
                            "BG",
                            "BH",
                            "BO",
                            "BR",
                            "BY",
                            "CA",
                            "CH",
                            "CL",
                            "CO",
                            "CR",
                            "CY",
                            "CZ",
                            "DE",
                            "DK",
                            "DO",
                            "DZ",
                            "EC",
                            "EE",
                            "EG",
                            "ES",
                            "FI",
                            "FR",
                            "GB",
                            "GR",
                            "GT",
                            "HK",
                            "HN",
                            "HR",
                            "HU",
                            "ID",
                            "IE",
                            "IL",
                            "IN",
                            "IS",
                            "IT",
                            "JO",
                            "JP",
                            "KW",
                            "KZ",
                            "LB",
                            "LI",
                            "LT",
                            "LU",
                            "LV",
                            "MA",
                            "MC",
                            "MD",
                            "ME",
                            "MK",
                            "MT",
                            "MX",
                            "MY",
                            "NI",
                            "NL",
                            "NO",
                            "NZ",
                            "OM",
                            "PA",
                            "PE",
                            "PH",
                            "PL",
                            "PS",
                            "PT",
                            "PY",
                            "QA",
                            "RO",
                            "RS",
                            "RU",
                            "SA",
                            "SE",
                            "SG",
                            "SI",
                            "SK",
                            "SV",
                            "TH",
                            "TN",
                            "TR",
                            "TW",
                            "UA",
                            "US",
                            "UY",
                            "VN",
                            "XK",
                            "ZA"
                        ],
                        "disc_number": 1,
                        "duration_ms": 229360,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "USUM71607007"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/6habFhsOp2NvshLv26DqMb"
                        },
                        "href": "https://api.spotify.com/v1/tracks/6habFhsOp2NvshLv26DqMb",
                        "id": "6habFhsOp2NvshLv26DqMb",
                        "is_local": false,
                        "name": "Despacito",
                        "popularity": 79,
                        "preview_url": null,
                        "track_number": 9,
                        "type": "track",
                        "uri": "spotify:track:6habFhsOp2NvshLv26DqMb"
                    }, ...</p></sup></sub>

### searchAlbums

* **URL:**
  /searchAlbums
* **Metodo:**
  'GET'
* **Parametri Url:**
    'name' = 'The Wall'
* **Parametri Header:**
  'SpotifyToken' = '...'
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content** 

### trackLyrics

* **URL:**
  /trackLyrics
* **Metodo:**
  'GET'
* **Parametri Url:**
  'id' = 4u7EnebtmKWzUH433cf5Qv
* **Parametri Header:**
  'SpotifyToken' = '...'
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content** 

### albumInfo

* **URL:**
  /albumInfo
* **Metodo:**
  'GET'
* **Parametri Url:**
  'id' = 6WaIQHxEHtZL0RZ62AuY0g
* **Parametri Header:**
  'SpotifyToken' = '...'
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content** 

### topTracks

* **URL:**
  /topTracks
* **Metodo:**
  'GET'
* **Parametri Url:**
  'email' = 'cosa@cosa.cosa.it'
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content** 

### topArtists

* **URL:**
  /topArtists
* **Metodo:**
  'GET'
* **Parametri Url:**
  'email' = 'cosa@cosa.cosa.it'
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content** 

### updateUser

* **URL:**
  /updateUser
* **Metodo:**
  'PATCH'
* **Parametri Url:**
  'email' = 'cosa@cosa.cosa.it'
  'username' = 'Cosa'
  'country' = 'IT'
  'picture' = 
* **Parametri Header:**
  'SpotiXToken' = '...'
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content** 

### deleteUser

* **URL:**
  /deleteUser
* **Metodo:**
  'DELETE'
* **Parametri Url:**
  'email' = 'cosa@cosa.cosa.it'
* **Parametri Header:**
  'SpotiXToken' = '...'
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content** 