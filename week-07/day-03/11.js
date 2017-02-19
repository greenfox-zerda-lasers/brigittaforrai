'use strict';

// Create a `Stack` constructor that stores elements
// It should have a `size` method that returns number of elements it has
// It should have a `push` method that adds an element to the stack
// It should have a `pop` method that returns the last element form the stack and also deletes it from it

// please don`t use the built in methods

function Stack(arr) {
  this.size = function(arr) {
    return arr.length
  }
  this.push = function (newElement) {
    return arr.push(newElement)
  }
  this.pop = function() {
    return arr.pop()
  }
}

var array = [1, 2, 3, 4]
var stack = new Stack(array)
console.log(stack)
console.log(stack.size(array), stack.push(5), array)
console.log(stack.size(array), stack.push(6), stack.pop())
