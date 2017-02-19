var button = document.querySelector("button")
var result = document.querySelector(".result")


function clickButton () {
    var count = document.getElementsByTagName("li").length
    result.textContent = count
    //button.classList.remove("click")

}

button.addEventListener("click", clickButton)
