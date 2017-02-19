
'use strict';

// create a function that returns it's input factorial

function factorial(num) {
  var result = 1
  for (var i = 1; i<= num; i++){
    result = result * i
  }
  return result
}

console.log(factorial(5))
