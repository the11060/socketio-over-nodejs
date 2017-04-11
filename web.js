var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // response.send('Hello World!');
  res.sendFile('static/index.html' , { root : __dirname});
});

var port = process.env.PORT || 8888;
app.listen(port, function() {
  console.log("Listening on " + port);
});