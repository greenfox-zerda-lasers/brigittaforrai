'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

function Animal(voice) {
  this.voice = voice
}

Animal.prototype.say = function(voice) {
  this.voice = voice + "-" + voice
  console.log(this.voice)
}

var bird = new Animal("csirip")
bird.say("csirip")

var cat = new Animal("miau")
cat.say("miau")
