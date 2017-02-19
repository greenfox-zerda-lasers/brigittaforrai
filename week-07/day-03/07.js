'use strict';

var numbers = [2, 5, 11, 29];

// create a function that takes an array of numbers and returns a boolean
// it should return true if all the elements are prime, false otherwise

function prime (arr) {
  return arr.every(function(a){
    if (a >2) {
      for (var x = 2; x<a; x++) {
        return a % x !== 0
      }
    } else if (a === 2 || a === 1){
      return true
    } else {
      return false
    }
  })

}

console.log(prime(numbers))
