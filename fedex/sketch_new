var scaleX;
var scaleY;
var min;
var max;
var radius;
var bg

var xoff = 0

var red = (254, 51, 79)
var blue = (91, 235, 244)

var mood = 2.5
var valami = (2.5/3) * 100

if (mood == 1) {
  bg = blue
} else if (mood == 3) {
  bg = red
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0);
    frameRate(25)
    smooth();
    radius = 150;
    //noCursor();
}

function drawEllipseWhite() {
    fill(255, 0, 100, 0);
    strokeWeight(2)
    //strokeWeight(map(noise(xoff), 0, 1, 1, 10))
    stroke(255, 255, 255, 20);

    ellipse(0, 0, map(noise(xoff), 0, 1, 100, 120), map(noise(xoff), 0, 1, 60, 120));
}

function drawEllipseRed() {
    fill(255, 0, 100, 0);
    strokeWeight(2)
    //strokeWeight(map(noise(xoff), 0, 1, 1, 10))

    stroke(91, 235, 244, 50);
    ellipse(0, 0, map(noise(xoff), 0, 1, 100, 120), map(noise(xoff), 0, 1, 50, 150));
}

function drawEllipseBlue() {
    fill(91, 235, 244, 0);
    strokeWeight(2)
    //strokeWeight(map(noise(xoff), 0, 1, 1, 10))
    stroke(91, 235, 244, 50);
    //stroke(254, 51, 79, 18);
    ellipse(0, 0, map(noise(xoff), 0, 1, 100, 120), map(noise(xoff), 0, 1, 50, 150));
}


// function mouseMoved() {
//     radius = map(mouseY, 0, windowHeight, 100, 350);
// }

function draw() {

    background(254, 51, 79);

    scaleX = map(noise(xoff), 0, 1, 1.5, 11.5);
    scaleY = map(noise(xoff), 0, 1, 1.5, 11.5);
    min = map(noise(xoff), 0, 1, 0.1, 0.8);
    max = map(noise(xoff), 0, 1, 0.8, 1.8);


    translate(windowWidth/2, windowHeight/2);

    for (var i=0; i<360; i += 0.5) {
        push();
        radius = map(noise(xoff), 0, 1, 100, 350);
        rotate(radians(i));
        translate(0, radius );
        rotate(radians(i*2));
        scale(map(cos(radians(i*scaleX)), -1, 1, min, max), map(sin(radians(i*scaleY)), -1, 1, min, max));
        drawEllipseWhite();
        pop();

        push();
        radius = map(noise(xoff), 0, 1, 10, 100);
        rotate(radians(i*2));
        translate(0, radius*2.5);
        rotate(radians(i*3));
        scale(map(cos(radians(i*scaleX)), -1, 1, min, max), map(sin(radians(i*scaleY)), -1, 1, min, max));
        drawEllipseRed();
        pop();

        // push();
        // radius = map(noise(xoff), 0, 1, 101, 200);
        // rotate(radians(i*2));
        // translate(0, radius * cos(i*5));
        // rotate(radians(i*3));
        // scale(map(sin(radians(i*scaleX)), -1, 1, min, max), map(sin(radians(i*scaleY)), -1, 1, min, max));
        // drawEllipseBlue();
        // pop();
    }
    xoff += 0.02
}
