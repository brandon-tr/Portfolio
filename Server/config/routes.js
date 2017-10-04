var portfolio = require('../controllers/note.js')
var path = require('path')

module.exports = function(app){
    app.post('/register_user', function(req, res) {
        portfolio.register(req, res)
    })
    app.post('/validate_user', function(req, res) {
        portfolio.validate_user(req, res)
    })
    app.post('/post', function(req, res) {
        portfolio.post(req, res)
    })
    app.post('/DeletePost', function(req, res) {
        portfolio.DeletePost(req, res)
    })
    app.post('/validate', function(req, res) {
        portfolio.validate(req, res)
    })
    app.post('/findPost', function (req, res) {
        portfolio.FindPost(req, res)
    })
    app.get('/getPost', function(req, res) {
        portfolio.getPost(req, res)
    })
    app.get('/log_out', function(req, res) {
        portfolio.logout(req, res)
    })
    app.get('/current_user', function(req, res) {
        portfolio.current_user(req, res)
    })
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve(__dirname, './../../PortfolioAngular/dist/index.html'))
    })
}