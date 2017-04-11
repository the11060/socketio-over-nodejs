var express = require('express');
var path = require('path');
var app = express.createServer(express.logger());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  // response.send('Hello World!');
  res.sendFile( __dirname + "/static/" + "index.html" );
});

var port = process.env.PORT || 8888;
app.listen(port, function() {
  console.log("Listening on " + port);
});