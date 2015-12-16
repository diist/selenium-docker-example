// Load the http module to create an http server.
var http = require('http');
var fs = require('fs')

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200);
  response.end(fs.readFileSync('index.html'));
});

// Listen on port 8000
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running on port 8000");
