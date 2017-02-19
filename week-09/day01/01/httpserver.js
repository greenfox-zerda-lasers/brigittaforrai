//Create a webserver that can receive any request to any path. It should respond the path name, the request methos and the current time.

"use strict"

var http = require("http")
var path = require("path")

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"})
  console.log(request)
  response.end(Date() + request.method + request.url)
})

server.listen(3000, '127.0.0.1')
