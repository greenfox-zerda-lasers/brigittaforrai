document.querySelector("ul").removeChild(document.querySelector("li"))

var fox1 = document.createElement("li")
fox1.textContent = "The Fox"
var fox2 = document.createElement("li")
fox2.textContent = "The Fox"
var fox3 = document.createElement("li")
fox3.textContent = "The Fox"

document.querySelector("ul").appendChild(fox1)
document.querySelector("ul").appendChild(fox2)
document.querySelector("ul").appendChild(fox3)
