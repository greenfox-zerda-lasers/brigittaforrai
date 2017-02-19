'use strict';

// create a function that returns it's input factorial

function factorialMaker (number) {
  var factorial = 1
  for ( var i = number; i > 0; i--) {
    factorial = factorial * i
  }
  return factorial
}

console.log(factorialMaker(5))
