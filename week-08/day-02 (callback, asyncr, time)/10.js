// Create a circle with 100px diameter (use border radius)
//  - Make it move from left to right edge
//  - use requestAnimationFrame

var circle = document.querySelector(".circle")
circle.style.width = "100px"
circle.style.height = "100px"
circle.style.borderRadius = "200px"
circle.style.border = "2px solid black"
circle.style.position = "absolute"
var position = 0
circle.style.left = String(position) +"px"

var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRrequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame

function move() {
  if (position < 1920 && position >= 0) {
    position += 3
    circle.style.left = String(position) + "px"
  } else if (position >= 1920) {
    position = 0
    circle.style.left = String(position) + "px"
  }
  requestAnimationFrame(move)
}
move()
