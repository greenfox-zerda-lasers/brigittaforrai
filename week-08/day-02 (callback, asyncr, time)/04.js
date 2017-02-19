// imitate the setInterval functionality with setTimeouts (recreate the previous excersize)

// set up a setInterval loop with 1.5 second delays
// - log the mouse coordinates on each call

window.addEventListener("mousemove", move)
var mouseX, mouseY

function move(e) {
  mouseX = e.screenX
  mouseY = e.screenY
}

function log() {
  console.log(mouseX, mouseY)
  setTimeout(log, 1500)
}

setTimeout(log, 1500)
