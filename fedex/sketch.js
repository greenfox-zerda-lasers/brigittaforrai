var scaleX;
var scaleY;
var min;
var max;
var radius;
var r, g, b;

var data = {one: 11, two: 22, three: 11, four: 15, five: 20}
var sum = data.one + data.two + data.three + data.four + data.five

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(255);
    smooth();
    radius = 150;
    r = random(255);
    g = random(255);
    b = random(255);

    //noCursor();
}

function drawEllipse() {
    noFill(0, 0, 0, 0);
    stroke(255, 0, 0, 28);
    ellipse(0, 0, 120, 80);
}


function draw() {

  radius = map(mouseY, 0, windowHeight, 100, 250);
  scaleX = map(mouseX, 0, windowWidth, 1.5, 11.5);
  scaleY = map(mouseY, 0, windowHeight, 1.5, 11.5);


  fill(255);
  rect(0, 0, windowWidth, windowHeight);

  translate(windowWidth/2, windowHeight/2);

    for (var i=0; i<360; i += 0.1) {

        push();
        rotate(radians(i*3));
        //translate(0, random(200, 300))
        translate(0, radius);
        rotate(radians(i*3));
        scale(map(sin(radians(i*scaleX)), -1, 1, min, max), map(sin(radians(i*scaleY)), -1, 1, min, max));
        drawEllipse();
        pop();
    }

    //framRate(10)
}
