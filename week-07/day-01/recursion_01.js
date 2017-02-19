// 1. write a recursive function
// that takes one parameter: n
// and counts down from n

function counter(n) {
  if ( n === 0) {
    console.log(0)
  } else {
    console.log(n)
    n = n -1
    counter(n)
  }
}

counter(5)
