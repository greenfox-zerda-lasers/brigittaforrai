'use strict';

var names = ['Zakarias', 'Hans', 'Otto', 'Ole'];
// create a function that returns the shortest string
// from an array

function shortest(arr) {
  var len = arr[0].length
  var name = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < len) {
      len = arr[i].length
      name = arr[i]
    }
  }
  return name
}

console.log(shortest(names))
