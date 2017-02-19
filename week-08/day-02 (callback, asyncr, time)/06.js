// Add an event listener to the window and display the mouse's x, y coordinates

window.addEventListener("mousemove", position)

var posX
var posY

function position(event) {
  posX = event.screenX
  posY = event.screenY
  console.log(posX, posY)
}
