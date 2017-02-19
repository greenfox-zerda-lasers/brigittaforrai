'use sttict';

var numbers = [7, -10, 8, -1, 2];
// Write a function that returns the minimal element
// in an array (your own min function)

function minimum (arr) {
  var min = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

console.log(minimum(numbers))
