// Create a "tour" function that takes two functions as parameters:
//  - walk and distance
//  - distance should return an array of false values [false,false,false] with the length of a given parameter
//  - walk should go through the returned array of distance and change it to true
//  - tour should return the result of walk

function tour (walk) {
  return walk
}

function distance(value) {
  var array = []
  for (var i = 0; i < value; i++){
    array.push(false)
  }
  return array
}

function walk(distance) {
  for (var e = 0; e <distance.length; e++) {
    distance[e] = true
  }
  return distance
}

//console.log(distance(3))
//console.log(walk(distance(3)))
console.log(tour(walk(distance(3))))
//tour().walk().distance()
