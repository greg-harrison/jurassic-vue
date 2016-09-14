//Require Express
var express = require('express');
var app = express();
var cons = require('consolidate');
var path = require('path');

var Character = require('./db').Character;

var port = process.env.PORT || 8081;

app.set('port', process.env.PORT || 8081);
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'app'));
app.set('view engine', 'html');

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api', function(req, res){
  Character.find({}, function(err, characters){
    console.log(characters);
    res.render('index', {characters: characters});
    // res.json(characters);
  });
});

var server = app.listen(port);
