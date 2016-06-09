var express = require('express');
var server = express();


server.get('/', function(request, response){
  console.log(__dirname);
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.listen(8080);
