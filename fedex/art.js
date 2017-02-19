
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var ctx = null;

var data = {one: 11, two: 22, three: 11, four: 15, five: 20}
var sum = data.one + data.two + data.three + data.four + data.five

var from = color(91, 235, 244)
var to = color(254, 51, 79)


var bugs = []

function setup() {
  ctx = createCanvas(WIDTH, HEIGHT);

  for (var i=0; i<1; i++) {
    bugs.push(new Jitter());
  }
  console.log(bugs)
}

function draw() {
  background(0);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }

  frameRate(10)
}

function Jitter() {
  this.x = 1920 / 2
  this.y =1080 / 2
  this.diameter = sum * 5 + random(0, 1) * 5
  this.speed = 5

  this.move = function() {
    this.x += random(-this.speed, this.speed)
    this.y += random (-this.speed, this.speed)
  }

  this.display = function() {
    stroke(0, 0, 0, 0)
    ellipse(this.x, this.y, this.diameter, this.diameter)
    //filter(BLUR,1)
  }
}


window.onresize = function() {
  ctx.resize(window.innerWidth, window.innerHeight);
}
