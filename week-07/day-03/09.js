'use strict';

// create a function that takes a string and counts its letters
// it should return an object thats keys are the letters and the values are
// the counts.
// example: "apple" -> {a: 1, p: 2, l: 1, e: 1}

function counter (string) {
  var obj = {}
  var sum = 1
  string.split("").forEach(function(e){
    if (Object.keys(obj).indexOf(e) === -1) {
      obj[e] = 1
    } else {
      obj[e] += 1
    }
  })
  return obj
}

console.log(counter("toriiiiii"))
