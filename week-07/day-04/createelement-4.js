var list = document.querySelector(".asteroids")
var king = document.querySelector("li")
list.removeChild(king)

var newLi = []

for (var i = 0; i < planetData.length; i++)

  if (planetData[i]["asteroid"]) {
    newLi[i] = document.createElement("li")
    newLi[i].classList.add(planetData[i]["category"])
    newLi[i].textContent = planetData[i]["content"]
    list.appendChild(newLi[i])
  }
