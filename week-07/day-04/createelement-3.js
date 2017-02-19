var list = document.querySelector(".asteroids")
var king = document.querySelector("li")
list.removeChild(king)

var newItems = ["apple", "bubble", "cat", "green fox"]
var newLi = []

for (var i = 0; i <4; i++){
  newLi[i] = document.createElement("li")
  newLi[i].textContent = newItems[i]
  list.appendChild(newLi[i])
}
