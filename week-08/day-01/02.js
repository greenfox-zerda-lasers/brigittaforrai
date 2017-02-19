'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

function Rectangle(a, b) {
  this.a = a
  this.b = b
  //this.getArea = console.log(a * b)
  //this.getCircumference = 2*a + 2*b
}

Rectangle.prototype.getArea = function(a, b) {
  this.a = a
  this.b = b
  return a * b
}

Rectangle.prototype.getCircumference= function(a, b) {
  this.a = a
  this.b = b
  return 2*a + 2*b
}

var rect1 = new Rectangle(10, 5)
console.log(rect1.getArea(5, 2))
console.log(rect1.b)

var rect2 = new Rectangle(2, 2)
console.log(rect2.getArea(3,3))
console.log(rect2.getCircumference(3,3))
