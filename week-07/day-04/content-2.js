var parag = document.getElementsByTagName("p")
console.log(parag)
var last = parag.length
for (var p = 0; p < last; p++) {
  parag[p].innerHTML = parag[last-1].innerHTML
}
