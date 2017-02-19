'use strict';

var test = require("tape")

var ai = 123;
// create a function that doubles it's input
// double ai with it

function doubler (num) {
  return num * 2
}

console.log(doubler(ai))

module.exports = doubler;
