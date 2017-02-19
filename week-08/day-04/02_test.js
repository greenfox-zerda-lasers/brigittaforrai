"use strict"

var test = require("tape")
var appendA = require("./02.js")

test("string", function(t){
  var actual = "alm" + "a"
  t.equal(actual, "alma")
  t.end()
})
