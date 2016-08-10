//Require Express
var express = require('express');
var app = express();

var port = process.env.PORT || 8081;

app.set('port', process.env.PORT || 8081);

// By using this, we are saying that the code in /dist/app should be
//  mounted at /app on the Virtual Express server
app.use('/app', express.static('./dist/app'));

app.get('/', function(req, res){
  var hostname = 'http://' + req.headers.host;
  req.pipe(request(hostname + '/index.html')).pipe(res);
});

// This section is only for the API
// app.all('/api/*', function(req, res){
//   var apiUrl = '';
//   var apiSplat = req.url.replace('/api','');
//   var url = apiUrl + apiSplat;

//   req.pipe(request(url)).pipe(res);
// });

var server = app.listen(port);
