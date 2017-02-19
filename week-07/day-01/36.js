'use strict';

var ah = [3, 4, 5, 6, 7];
// print the sum of all numbers in ah

var num = 0
var sum = 0
while ( num < ah.length) {
  sum = sum + ah[num]
  num = num + 1
}

console.log(sum)
