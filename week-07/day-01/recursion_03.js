// 3. Given a non-negative int n,
// return the sum of its digits recursively (no loops).
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
// while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

var number = 123
var sum = 0

function something(num) {
  sum = sum + num / 100
  return sum
}


console.log(something(number))
