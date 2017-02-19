// Embed the following file to a HTML document:
//  - From the previous flickr example extract the .jpg link directly
//  - Create an image tag in the with document.createElement
//  - Add a 'load' event to the image and only show the image to the user when the image is loaded

var image = document.createElement("img")
var body = document.querySelector("body")
body.appendChild(image)
image.src = "https://c7.staticflickr.com/8/7562/15584243094_b268a32192_h.jpg"
image.style.display = "none"

image.addEventListener("load", function(){image.style.display = "block"})
