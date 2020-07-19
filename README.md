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

## Casi di test

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
   * **Content** ```{
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
                    }, ...```

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
   * **Content** ```{
    "message": {
        "header": {
            "status_code": 200
        },
        "body": {
            "tracks": {
                "href": "https://api.spotify.com/v1/search?query=The+Wall&type=album&offset=0&limit=5",
                "items": [
                    {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"
                                },
                                "href": "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9",
                                "id": "0k17h0D3J5VfsdmQ1iZtE9",
                                "name": "Pink Floyd",
                                "type": "artist",
                                "uri": "spotify:artist:0k17h0D3J5VfsdmQ1iZtE9"
                            }
                        ],
                        "available_markets": [
                            "AD",
                            "AL",
                            "AT",
                            "BA",
                            "BE",
                            "BG",
                            "BY",
                            "CH",
                            "CY",
                            "CZ",
                            "DE",
                            "DK",
                            "DZ",
                            "EE",
                            "ES",
                            "FI",
                            "FR",
                            "GB",
                            "GR",
                            "HR",
                            "HU",
                            "IE",
                            "IS",
                            "IT",
                            "KZ",
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
                            "NL",
                            "NO",
                            "PL",
                            "PT",
                            "RO",
                            "RS",
                            "RU",
                            "SE",
                            "SI",
                            "SK",
                            "TR",
                            "UA",
                            "XK"
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/6WaIQHxEHtZL0RZ62AuY0g"
                        },
                        "href": "https://api.spotify.com/v1/albums/6WaIQHxEHtZL0RZ62AuY0g",
                        "id": "6WaIQHxEHtZL0RZ62AuY0g",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273a69daf940429089524e93ceb",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02a69daf940429089524e93ceb",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851a69daf940429089524e93ceb",
                                "width": 64
                            }
                        ],
                        "name": "The Wall (Remastered)",
                        "release_date": "1979-11-30",
                        "release_date_precision": "day",
                        "total_tracks": 26,
                        "type": "album",
                        "uri": "spotify:album:6WaIQHxEHtZL0RZ62AuY0g"
                    },
                    {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0NGAZxHanS9e0iNHpR8f2W"
                                },
                                "href": "https://api.spotify.com/v1/artists/0NGAZxHanS9e0iNHpR8f2W",
                                "id": "0NGAZxHanS9e0iNHpR8f2W",
                                "name": "Alok",
                                "type": "artist",
                                "uri": "spotify:artist:0NGAZxHanS9e0iNHpR8f2W"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7bNqXqIrIfwJnipx7oGeU4"
                                },
                                "href": "https://api.spotify.com/v1/artists/7bNqXqIrIfwJnipx7oGeU4",
                                "id": "7bNqXqIrIfwJnipx7oGeU4",
                                "name": "Sevenn",
                                "type": "artist",
                                "uri": "spotify:artist:7bNqXqIrIfwJnipx7oGeU4"
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
                            "spotify": "https://open.spotify.com/album/4w68G9ohlk8eiePpr3Dd4a"
                        },
                        "href": "https://api.spotify.com/v1/albums/4w68G9ohlk8eiePpr3Dd4a",
                        "id": "4w68G9ohlk8eiePpr3Dd4a",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273423f01290a1095bd97431e6e",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02423f01290a1095bd97431e6e",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851423f01290a1095bd97431e6e",
                                "width": 64
                            }
                        ],
                        "name": "The Wall",
                        "release_date": "2019-06-28",
                        "release_date_precision": "day",
                        "total_tracks": 1,
                        "type": "album",
                        "uri": "spotify:album:4w68G9ohlk8eiePpr3Dd4a"
                    }, ...```

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
   * **Content** ```{
    "message": {
        "header": {
            "status_code": 200
        },
        "body": {
            "name": "Bohemian Rhapsody - 2011 Mix",
            "artist": "Queen",
            "lyrics": "Is this the real life?\nIs this the fantasy\nCaught in a landslide\nNo escape from reality\n\nOpen your eyes\nLook up to the skies and see\nI'm just a poor boy (Poor boy)\nI need no sympathy\nBecause I'm easy come, easy go\nLittle high, little low\nAny way the wind blows\nDoesn't really matter to me\nTo me\n\nMama, just killed a man\nPut a gun against his head\nPulled my trigger, now he's dead\nMama, life had just begun\nBut now I've gone and thrown it all away\n\nMama, ooh-ooh\nDidn't mean to make you cry\nIf I'm not back again this time tomorrow\nCarry on, carry on\nAs if nothing really matters\n\nToo late\nMy time has come\n...\n"
        }
    }
}```

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
   * **Content** ```{
    "message": {
        "header": {
            "status_code": 200
        },
        "body": {
            "name": "The Wall (Remastered)",
            "artist": "Pink Floyd",
            "tracks": [
                {
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9"
                            },
                            "href": "https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9",
                            "id": "0k17h0D3J5VfsdmQ1iZtE9",
                            "name": "Pink Floyd",
                            "type": "artist",
                            "uri": "spotify:artist:0k17h0D3J5VfsdmQ1iZtE9"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AL",
                        "AT",
                        "BA",
                        "BE",
                        "BG",
                        "BY",
                        "CH",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DZ",
                        "EE",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "HR",
                        "HU",
                        "IE",
                        "IS",
                        "IT",
                        "KZ",
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
                        "NL",
                        "NO",
                        "PL",
                        "PT",
                        "RO",
                        "RS",
                        "RU",
                        "SE",
                        "SI",
                        "SK",
                        "TR",
                        "UA",
                        "XK"
                    ],
                    "disc_number": 1,
                    "duration_ms": 198221,
                    "explicit": false,
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/1KaIRTf1YEWt54V3IW34qV"
                    },
                    "href": "https://api.spotify.com/v1/tracks/1KaIRTf1YEWt54V3IW34qV",
                    "id": "1KaIRTf1YEWt54V3IW34qV",
                    "is_local": false,
                    "name": "In The Flesh? - 2011 Remastered Version",
                    "preview_url": "https://p.scdn.co/mp3-preview/a38c14bfaea20ed78a9823dff74740fcd8f89dc4?cid=6c036ce4eb7d461cb5ea006e055d5494",
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:1KaIRTf1YEWt54V3IW34qV"
                }, ...```

### topTracks

* **URL:**
  /topTracks
* **Metodo:**
  'GET'
* **Parametri Url:**
  'email' = 'cosa@cosa.cosa.it'
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content** ```{
    "message": {
        "header": {
            "status_code": 200
        },
        "body": {
            "artists": {
                "items": [
                    {
                        "album": {
                            "album_type": "ALBUM",
                            "artists": [
                                {
                                    "external_urls": {
                                        "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
                                    },
                                    "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
                                    "id": "1Xyo4u8uXC1ZmMpatF05PJ",
                                    "name": "The Weeknd",
                                    "type": "artist",
                                    "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
                                }
                            ],
                            "available_markets": [
                                "AD",
                                "AE",
                                "AR",
                                "AT",
                                "AU",
                                "BE",
                                "BG",
                                "BH",
                                "BO",
                                "BR",
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
                                "LB",
                                "LI",
                                "LT",
                                "LU",
                                "LV",
                                "MA",
                                "MC",
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
                                "SA",
                                "SE",
                                "SG",
                                "SK",
                                "SV",
                                "TH",
                                "TN",
                                "TR",
                                "TW",
                                "US",
                                "UY",
                                "VN",
                                "ZA"
                            ],
                            "external_urls": {
                                "spotify": "https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj"
                            },
                            "href": "https://api.spotify.com/v1/albums/4yP0hdKOZPNshxUOjY0cZj",
                            "id": "4yP0hdKOZPNshxUOjY0cZj",
                            "images": [
                                {
                                    "height": 640,
                                    "url": "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
                                    "width": 640
                                },
                                {
                                    "height": 300,
                                    "url": "https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36",
                                    "width": 300
                                },
                                {
                                    "height": 64,
                                    "url": "https://i.scdn.co/image/ab67616d000048518863bc11d2aa12b54f5aeb36",
                                    "width": 64
                                }
                            ],
                            "name": "After Hours",
                            "release_date": "2020-03-20",
                            "release_date_precision": "day",
                            "total_tracks": 14,
                            "type": "album",
                            "uri": "spotify:album:4yP0hdKOZPNshxUOjY0cZj"
                        },
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
                                },
                                "href": "https://api.spotify.com/v1/artists/1Xyo4u8uXC1ZmMpatF05PJ",
                                "id": "1Xyo4u8uXC1ZmMpatF05PJ",
                                "name": "The Weeknd",
                                "type": "artist",
                                "uri": "spotify:artist:1Xyo4u8uXC1ZmMpatF05PJ"
                            }
                        ],
                        "available_markets": [
                            "AD",
                            "AE",
                            "AR",
                            "AT",
                            "AU",
                            "BE",
                            "BG",
                            "BH",
                            "BO",
                            "BR",
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
                            "LB",
                            "LI",
                            "LT",
                            "LU",
                            "LV",
                            "MA",
                            "MC",
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
                            "SA",
                            "SE",
                            "SG",
                            "SK",
                            "SV",
                            "TH",
                            "TN",
                            "TR",
                            "TW",
                            "US",
                            "UY",
                            "VN",
                            "ZA"
                        ],
                        "disc_number": 1,
                        "duration_ms": 200040,
                        "explicit": false,
                        "external_ids": {
                            "isrc": "USUG11904206"
                        },
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
                        },
                        "href": "https://api.spotify.com/v1/tracks/0VjIjW4GlUZAMYd2vXMi3b",
                        "id": "0VjIjW4GlUZAMYd2vXMi3b",
                        "is_local": false,
                        "name": "Blinding Lights",
                        "popularity": 99,
                        "preview_url": null,
                        "track_number": 9,
                        "type": "track",
                        "uri": "spotify:track:0VjIjW4GlUZAMYd2vXMi3b"
                    },```

### topArtists

* **URL:**
  /topArtists
* **Metodo:**
  'GET'
* **Parametri Url:**
  'email' = 'cosa@cosa.cosa.it'
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content** ```{
    "message": {
        "header": {
            "status_code": 200
        },
        "body": {
            "artists": {
                "items": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/51lE580QM13Anmb3mK2j1e"
                        },
                        "followers": {
                            "href": null,
                            "total": 114266
                        },
                        "genres": [
                            "dreamo",
                            "progressive jazz fusion",
                            "progressive post-hardcore"
                        ],
                        "href": "https://api.spotify.com/v1/artists/51lE580QM13Anmb3mK2j1e",
                        "id": "51lE580QM13Anmb3mK2j1e",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/f7874c27da456ffd65a1b8f0ba765cd3087cb5a7",
                                "width": 640
                            },
                            {
                                "height": 320,
                                "url": "https://i.scdn.co/image/330da4c6bf8ea88ff96aff22900c02393ca0d321",
                                "width": 320
                            },
                            {
                                "height": 160,
                                "url": "https://i.scdn.co/image/7f1274d4d0c18c319e4c4cb5876d1b78689c0d2c",
                                "width": 160
                            }
                        ],
                        "name": "The Dear Hunter",
                        "popularity": 52,
                        "type": "artist",
                        "uri": "spotify:artist:51lE580QM13Anmb3mK2j1e"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2SRIVGDkdqQnrQdaXxDkJt"
                        },
                        "followers": {
                            "href": null,
                            "total": 122098
                        },
                        "genres": [
                            "djent",
                            "jazz metal",
                            "progressive metal",
                            "progressive rock",
                            "symphonic rock"
                        ],
                        "href": "https://api.spotify.com/v1/artists/2SRIVGDkdqQnrQdaXxDkJt",
                        "id": "2SRIVGDkdqQnrQdaXxDkJt",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/828dbc16a9ea2c431e8ff7064a11e5bda35bf2b0",
                                "width": 640
                            },
                            {
                                "height": 320,
                                "url": "https://i.scdn.co/image/45c59f073a5251a06d5654ce24960d115c9e7200",
                                "width": 320
                            },
                            {
                                "height": 160,
                                "url": "https://i.scdn.co/image/1e7f714e6903232d93132dba70e940d4945f62b0",
                                "width": 160
                            }
                        ],
                        "name": "Haken",
                        "popularity": 53,
                        "type": "artist",
                        "uri": "spotify:artist:2SRIVGDkdqQnrQdaXxDkJt"
                    }, ...```

### updateUser

* **URL:**
  /updateUser
* **Metodo:**
  'PATCH'
* **Parametri Url:**
  'email' = 'cosa@cosa.cosa.it'<br>
  'username' = 'Cosa'<br>
  'country' = 'IT'<br>
  'picture' = 'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png'
* **Parametri Header:**
  'SpotiXToken' = '...'
* **Risposta con successo**
   * **Code** 200 -> OK
   * **Content** ```{
    "message": {
        "header": {
            "status_code": 200
        },
        "body": {
            "user": {
                "_id": "5f117d447372ad058406ca8d",
                "email": "cosa@cosa.cosa.it",
                "id": "72zapht0342w92fjamrpo4ilu",
                "username": "Cosa",
                "picture": "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
                "uri": "spotify:user:72zapht0342w92fjamrpo4ilu",
                "country": "FR",
                "topTracks": "{...}",
                "topArtists": "{...}",
                "SpotifyToken": "...",
                "refreshToken": "...",
                "__v": 0,
                "sessionToken": "..."
            }
        }
    }
}```

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
   * **Content** ```{
    "message": {
        "header": {
            "status_code": 200
        },
        "body": {
            "user": {
                "_id": "5f117d447372ad058406ca8d",
                "email": "cosa@cosa.cosa.it",
                "id": "72zapht0342w92fjamrpo4ilu",
                "username": "Cosa",
                "picture": "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
                "uri": "spotify:user:72zapht0342w92fjamrpo4ilu",
                "country": "FR",
                "topTracks": "{...}",
                "topArtists": "{...}",
                "SpotifyToken": "...",
                "refreshToken": "...",
                "__v": 0,
                "sessionToken": "..."
            }
        }
    }
}```