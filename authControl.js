
// Route middleware che verifica se l'utente è acceduto, altrimenti viene reindirizzato a index

module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
        return next();
        }
        res.redirect('/');
    },

    makeBasicHeader: function() {
    
        let clientId = process.env.appKey;
        let clientSec = process.env.appSecret;
        let plainString = clientId + ':' + clientSec;
        
        let buff = new Buffer.from(plainString);
        let encodedString = buff.toString('base64');
        
        let authToken = "Basic "+encodedString;
        return authToken;
    }
}
