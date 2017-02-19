"use strict"

var express = require("express")

var app = express()

app.get("/", function(request, response) {
  response.send(Date() + request.method + request.url)
})


app.get("/contact", function(request, response){
  response.send(Date() + request.method + request.url)
})

app.listen(3000)
