var p3 = document.querySelectorAll("p")[2].classList.contains("cat")

if (p3) {
    alert("YEAH CAT!")
}

var p4 = document.querySelectorAll("p")[3].classList.contains("dolphin")

if(p4) {
  document.querySelector(".apple").textContent = "pear"
}

var p1 = document.querySelector("p").classList.contains("apple")

if(p1) {
  document.querySelector(".cat").textContent = "dog"
  document.querySelector(".apple").classList.add("red")
  document.querySelector(".balloon").style.borderRadius = 0
}
