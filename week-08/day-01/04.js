"use strict"

// Create a constructor for creating Aircrafts,
// and one for creating Carriers,
// based on the specification in the python exam: https://github.com/greenfox-academy/zerda-exam-python-retake

function Aircraft(type) {
  this.type = type
  this.ammo = 0
  if (this.type === "F16"){
    this.maxAmmo = 8
    this.damage = 30
  } else if (this.type === "F35") {
    this.maxAmmo = 12
    this.damage = 50
  }
}


Aircraft.prototype.refill = function(ammoAmount) {
  if (this.ammo + ammoAmount > this.maxAmmo){
    return this.maxAmmo - (this.ammo + ammoAmount)
  } else {
    this.ammo += ammoAmount
    return this.ammo //? mit kell returnolni?
  }
}

Aircraft.prototype.fight = function() {
  var maxDamage = this.ammo * this.damage
  return maxDamage
  this.ammo = 0
}

function Carrier() {
  this.aircraftList = []
  this.healthPoint = 3000
  //total ammo??
}

Carrier.prototype.add_aircraft = function(plane) {
  this.aircraftList.push(plane)
}

Carrier.prototype.status = function() {
  var totalDamage = 0
  for(var i = 0; i < this.aircraftList.length; i++){
    totalDamage += this.aircraftList[i]["damage"]
  } //nemjoooooo a max damage-t kell osszeadni


  if (this.healthPoint <= 0) {
    return "It's dead Jim :("
  } else {
      console.log("Aircraft count: ", this.aircraftList.length, ", Ammo Storage: " + "Total damage: ", totalDamage,"Health Remaining: \n", "Aircrafts:\n", this.aircraftList)
    }
}


var plane1 = new Aircraft('F16')
var plane2 = new Aircraft('F16')
var plane3 = new Aircraft('F35')
var plane4 = new Aircraft('F35')
var carrier = new Carrier()
carrier.add_aircraft(plane1)
carrier.add_aircraft(plane2)
carrier.add_aircraft(plane3)
carrier.add_aircraft(plane4)
//console.log(carrier.aircraftList)
plane1.refill(20)
console.log(carrier.status())
