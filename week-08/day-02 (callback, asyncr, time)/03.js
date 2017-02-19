// set up a setInterval loop with 1.5 second delays
// - log the mouse coordinates on each call

window.addEventListener("mousemove", move )
var x, y

function move(e) {
  x = e.screenX
  y = e.screenY

}

setInterval(function() {console.log(x, y)}, 1500)


/*
document.onmousemove = function (e) {
  var mouseX = e.clientX
  var mouseY = e.clientY
  console.log(mouseX, mouseY)
}

setInterval(onmousemove, 1500) */
