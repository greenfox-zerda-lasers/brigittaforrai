'use strict'

// 1. lepes npm init a console-ban (szerver letrehozasa)

var express = require("express")

var exampleApp = express() // npm intsall express -save
exampleApp.get("/", function get(request, response) {       // post valtozatrol lemaradtam :(  plusz curl-lel is csinaltunk vmit!!
  response.send("hellohello")
})  // melyik fuggvenyt adjuk meg ha befut egy keres

exampleApp.listen(3000) // elinditom az exampleApp-ot a 3000-es porton
// ezutan consolbol futtatom a server.js-t.
// a bongeszobol localhost:3000 -on elerheto a hellohelohello
// consolbol ctrl +c kilepes -> leallitja a szervert


// telepitunk egy lintert : npm install eslint -g
// eslint --init
// styleguide airbnb
