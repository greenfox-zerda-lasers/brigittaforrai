var button = document.querySelector("button")
var background = document.querySelector("body div")
background.classList.add("party")

function switchBg(){
  if (background.classList.contains("party")){
    background.classList.remove("party")
  } else {
    background.classList.add("party")
  }
}

button.addEventListener("click", switchBg)
