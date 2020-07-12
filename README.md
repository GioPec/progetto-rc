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
- Per avviare il server eseguire ``` npm run dev ```

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

## Endpoints

https://app.swaggerhub.com/apis-docs/SpotiX/SpotiX/1#/