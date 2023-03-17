var express = require('express');//()();
var consign = require('consign');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');
app.set('views','./app/views');//Vai pesquisar a partir do app.js aonde ele é utilizado

consign()
    .include('app/routes')
    .then('/config/dbConnection.js')
    .then('/app/models')
    .into(app)


module.exports = app;
