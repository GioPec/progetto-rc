
// Route middleware che verifica se l'utente è acceduto, altrimenti viene reindirizzato a index

module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if (req.isAuthenticated()) {
        return next();
        }
        res.redirect('/');
    }
}
