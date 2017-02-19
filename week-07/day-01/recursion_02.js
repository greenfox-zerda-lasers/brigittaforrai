// 2. write a recursive function
// that takes one parameter: n
// and adds numbers from 1 to n


var sum = 0

function addNums(n) {
  if (n > 0){
    sum = sum + n
    n = n - 1
    addNums(n)
  }
  return sum
}

console.log(addNums(10))
