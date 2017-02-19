'use strict';

// Create a constructor for creating Rockets.
// it should take one parameter: the consumption of the rocket
// (amount of fuel needed for launch)
// Every rocket should have a method called fill(amount) that fills the tank of
// the rocket with the amount of fuel given as a parameter
// Every rocket should have a method called launch() that launches the rocket
// if it has enough fuel (more than its consumption)

function Rocket (cons) {
  this.cons = cons
}

Rocket.prototype.fill = function(amount) {
  this.amount = amount
  return amount
}

Rocket.prototype.launch = function() {
  if (this.amount > this.cons) {
    return "launch"
  } else {
    return "needs more fuel"
  }
}

var rocket1 = new Rocket(900)
console.log(rocket1.fill(1000))
console.log(rocket1.launch())
