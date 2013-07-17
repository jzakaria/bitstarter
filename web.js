var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var result = new Buffer(64);
var len = 0;
var x = "sup?";

fs.readFileSync("index.html", function (err, data) {
  if (err) throw err;
  len = result.write(data, 0);
});

app.get('/', function(request, response) {
  response.send(x);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
