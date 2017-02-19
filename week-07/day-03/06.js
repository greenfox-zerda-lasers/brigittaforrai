'use strict';


// create a function that takes a string and a letter and returns a boolean
// it should return true if the string consits the given letter, false otherwise

function isIn (string, letter) {
  return string.split("").some(function(e){
    return letter === e
  })
}

console.log(isIn("Hello", "e"))
