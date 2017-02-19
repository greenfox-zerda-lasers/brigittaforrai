'use strict';

var numbers = [4, 5, 6, 7, 8, 9, 10]
// write your own sum function

function summa(numList) {
  var sum = 0
  for (var i = 0; i < numList.length; i++){
    sum = sum + numList[i]
  }
  return sum
}

console.log(summa(numbers))
