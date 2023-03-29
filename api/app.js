const http = require('http');
const fs = require('fs');
const SpotifyWebApi = require('spotify-web-api-node');
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

//spotifyApi.setAccessToken('<your_access_token>');
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: 'http://localhost'
});

// Get a user
spotifyApi.getUser('petteralexis')
  .then(function(data) {
    console.log('Some information about this user', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get the authenticated user
spotifyApi.getMe()
  .then(function(data) {
    console.log('Some information about the authenticated user', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/*
 * Playlist methods
 */

// Get a playlist
spotifyApi.getPlaylist('5ieJqeLJjjI8iJWaxeBLuK')
  .then(function(data) {
    console.log('Some information about this playlist', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get a user's playlists
spotifyApi.getUserPlaylists('thelinmichael')
  .then(function(data) {
    console.log('Retrieved playlists', data.body);
  },function(err) {
    console.log('Something went wrong!', err);
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