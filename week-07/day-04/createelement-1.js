var asteroidList = document.querySelector(".asteroids")

var greenfox = document.createElement("li")
greenfox.textContent = "The Green Fox"
asteroidList.appendChild(greenfox)

var lampLighter = document.createElement("li")
lampLighter.textContent = "The Lamplighter"
asteroidList.appendChild(lampLighter)

var header = document.createElement("h1")
header.textContent = "I can add elements to the DOM!"
var body = document.getElementsByTagName("body")[0]
body.appendChild(header)

var container = document.querySelector(".container")
var image = document.createElement("img")
image.src = "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg"
container.appendChild(image)
