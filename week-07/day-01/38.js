'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number
// and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

function fizzBuzz() {
  var num = 1
  while ( num <= 100){
    if (num % 3 === 0) {
      console.log("Fizz")
    } else if (num % 5 === 0) {
      console.log("Buzz")
    } else if (num % 5 === 0 && num % 3 === 0) {
      console.log("FizzBuzz")
    } else {
      console.log(num)
    }
    num = num + 1
  }
}

fizzBuzz()
