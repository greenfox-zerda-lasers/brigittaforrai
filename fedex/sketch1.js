var scaleX;
var scaleY;
var min;
var max;
var radius;
var r, g, b;
var xoff = 0

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(255);
    smooth();
    radius = 150;
    //noCursor();
}

function drawEllipse1() {
    fill(255, 0, 100, 0);
    strokeWeight(1)
    //strokeWeight(map(noise(xoff), 0, 1, 1, 10))
    stroke(255, 0, 100, 18);
    rect(0, 0, map(noise(xoff), 0, 1, 100, 120), map(noise(xoff), 0, 1, 60, 120));
}

function drawEllipse2() {
    fill(255, 0, 100, 0);
    strokeWeight(2)
    //strokeWeight(map(noise(xoff), 0, 1, 1, 10))
    stroke(255, 0, 100, 18);
    rect(0, 0, map(noise(xoff), 0, 1, 100, 120), map(noise(xoff), 0, 1, 50, 150));
}

// function mouseMoved() {
//     radius = map(mouseY, 0, windowHeight, 100, 350);
// }

function draw() {
    // put drawing code here
    //fill(0, 25);
    //rect(0, 0, windowWidth, windowHeight);
    clear()

    scaleX = map(noise(xoff), 0, 1, 1.5, 11.5);
    scaleY = map(noise(xoff), 0, 1, 1.5, 11.5);
    min = map(noise(xoff), 0, 1, 0.1, 0.8);
    max = map(noise(xoff), 0, 1, 0.8, 1.8);


    translate(windowWidth/2, windowHeight/2);


        push();
        radius = map(noise(xoff), 0, 1, 100, 350);
        rotate(radians(i));
        translate(0, radius);

        scale(map(sin(radians(i*scaleX)), -1, 1, min, max), map(sin(radians(i*scaleY)), -1, 1, min, max));
        drawEllipse1();
        pop();

        // push();
        // radius = map(noise(xoff), 0, 1, 10, 100);
        // rotate(radians(i*2));
        // translate(0, radius);
        // rotate(radians(i*3));
        // scale(map(sin(radians(i*scaleX)), -1, 1, min, max), map(sin(radians(i*scaleY)), -1, 1, min, max));
        // drawEllipse2();
        // pop();
        //
        // push();
        // radius = map(noise(xoff), 0, 1, 101, 200);
        // rotate(radians(i*2));
        // translate(0, radius);
        // rotate(radians(i*3));
        // scale(map(sin(radians(i*scaleX)), -1, 1, min, max), map(sin(radians(i*scaleY)), -1, 1, min, max));
        // drawEllipse2();
        // pop();

    xoff += 0.02
}
