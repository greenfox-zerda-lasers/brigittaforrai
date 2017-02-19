/*Gather 10.000 candies!
Clicking the ‘Create candies’ button gives you 1 candy.
You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
10 lollipops generate 1 candy per second.
Use the 🍭 emoji to display the lollipops you have
??????????????Display the candy producton rate in the Candies / Second row
If you press the "make candy rain" button, the candy generation should speed up 10x
Create a procedural and OO versions of the same app*/

var candies = document.querySelector(".candies")
candies.textContent = "0"

var lollypops = document.querySelector(".lollypops")
lollypops.textContent = "🍭🍭🍭"

var speed = document.querySelector(".speed")
speed.textContent = 0

var createCandy = document.querySelector(".create-candies")

var buyLolly = document.querySelector(".buy-lollypops")

var rain = document.querySelector(".candy-machine")

var lollyCount = 3
var time = 1000
var timer

createCandy.addEventListener("click", addOneCandy)
buyLolly.addEventListener("click", buyOneLolly)
rain.addEventListener("click", generateRain)

function addOneCandy(event) {
  candies.textContent = String(parseInt(candies.textContent) + 1)
}

function buyOneLolly(event) {
  if (parseInt(candies.textContent) >= 100) {
    candies.textContent = parseInt(candies.textContent) - 100
    lollypops.textContent = lollypops.textContent + "🍭"
    lollyCount += 1
    generateCandy()
  }
}

function generateRain (event) {
  time = time / 10
  console.log(time)
  clearInterval(timer)
  generateCandy()
}

function generateCandy () {
  if (lollyCount >= 10) {
    timer = setInterval(addOneCandy, time)
    if (time >= 4) {
      speed.textContent = 1000 / time
    } else {
      speed.textContent = 1000 / 4
    }
  }
}

generateCandy()
