window.onload = function() {

alert(document.getElementsByTagName("h1")[0].textContent)

console.log(document.getElementsByTagName("p")[0].innerHTML)
//alert(document.getElementsByTagName("p")[0].innerHTML)
alert(document.getElementsByTagName("p")[1].textContent)

document.getElementsByTagName("h1")[0].innerHTML = "New Content"

document.getElementsByTagName("p")[2].innerHTML = document.getElementsByTagName("p")[0].innerHTML





}
