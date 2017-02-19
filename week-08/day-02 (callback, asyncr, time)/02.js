// create a function that starts a setTimeout with a 3 second delay.
// - create a button with an event listener that can cancel the setTimeout
var timer

function whatever() {
  console.log("timeeeeout")
}

function timeOut() {
  timer = setTimeout(whatever, 3000)

}

function endTimeout() {
  clearTimeout(timer)
}


var button = document.querySelector("button")
button.addEventListener("click",endTimeout)
timeOut()
