'use strict';

// create a student object
// that has a method `addgrade`, that takes a grade from 1 to 5
// an other method `getAverage`, that returns the average of the grades

var student = {
  gradeList: []
}

student.grade = function addGrade(mark) {
  this.gradeList.push(mark)
}

student.average = function getVerage(){
  var sum = this.gradeList.reduce(function(a,b) {
    return a + b
  })
  var gradesAverage = sum / this.gradeList.length
  return gradesAverage
}

student.grade(5)
student.grade(1)
student.grade(3)
console.log(student)
console.log(student.average())
