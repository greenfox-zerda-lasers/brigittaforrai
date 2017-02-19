// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.
// 2. store the element that contains the text 'The Conceited Man'
// in the 'conceited' variable.
// show the result in an 'alert' window.
// 3. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
// console.log each of them.
// 4. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.
// 5. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.
// 6. store 'The Businessman' in the 'allBizniss' variable.
// show the result in an 'alert' window.

window.onload = function() {

var king = document.getElementById('b325')
console.log(king)

var conceited = document.querySelector(".b326")
alert(conceited, "conceited")

var businessLamp = document.querySelectorAll(".big")
console.log(businessLamp[0], "businessman")
console.log(businessLamp[1], "lamplighter")

var conceitedKing = document.querySelectorAll(".container .asteroid")
console.log(conceitedKing)
alert(conceitedKing[0], "king")
alert(conceitedKing[1], "man")

var noBusiness = document.querySelectorAll("div.asteroid")
console.log(noBusiness)

var allBizniss = document.querySelector("p.big")
alert(allBizniss, "business")









}
