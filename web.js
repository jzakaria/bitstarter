var express = require('express');

var app = express.createServer(express.logger());

var result = new Buffer(256);
var len;

fs.readFileSync("index.html", function (err, data) {
  if (err) throw err;
  len = result.write(data, 0);
});

app.get('/', function(request, response) {
  response.send(result.toString('utf', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
