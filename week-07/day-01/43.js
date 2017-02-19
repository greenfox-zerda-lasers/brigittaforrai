'use strict';

var numbers = [3, 4, 5, 6, 7];
// write a function that filters the odd numbers
// from an array and returns a new array consisting
// only the evens

function oddNums (numList) {
  var new_list = []
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] % 2 == 0) {
      new_list.push(numList[i])
    }
  }
  return new_list
}

console.log(oddNums(numbers))
