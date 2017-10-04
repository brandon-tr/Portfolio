var express = require('express')
var bodyParser = require("body-parser")
var path = require('path')
var session = require('express-session')

var app = express();

require('./Server/config/mongoose.js')
app.use(session({secret: 'asfsbdfsadfshksaldhfhsdoy', resave: false, saveUninitialized: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname , "./PortfolioAngular/dist")))

var routeSetter = require('./Server/config/routes.js')
routeSetter(app)

var server = app.listen(5000, function(){
    console.log("listening")
})
