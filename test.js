var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/hi', function (req, res) {
  res.send('Hello Boy!!!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});