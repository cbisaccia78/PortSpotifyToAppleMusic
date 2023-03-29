const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;


var clientId;
var clientSecret;

fs.readFile('clientId.txt', function(err, data) {
  clientId = data;
});

fs.readFile('clientSecret,txt', function(err, data) {
  clientSecret = data;
});

var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: 'http://localhost'
});


/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/