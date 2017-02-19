'use strict';

var numbers = [3, 4, 5, 6, 7];
// write a function that filters the odd numbers
// from an array and returns a new array consisting
// only the evens

function evens(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(evens(numbers))
