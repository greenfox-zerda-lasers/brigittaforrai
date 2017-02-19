var title = document.querySelector("#title")
var rating = document.querySelector("#rating")
var name = document.querySelector("#name")
var button = document.querySelector("button")
var movie = {}

button.addEventListener("click", function (event){
  movie.MovieTitle = title.value
  movie.Rating = rating.value
  movie.username = name.value
  sendData()
})
console.log(movie)


function sendData() {
  var xhr = new XMLHttpRequest()
  xhr.open("POST", "https://sheetsu.com/apis/v1.0/7654fbe24554", true)
  xhr.setRequestHeader("Content-Type", "application/json")
  xhr.send(JSON.stringify(movie))

  xhr.onreadystatechange = ready

  function ready () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var sheet = JSON.parse(xhr.response)
        console.log(sheet)

    }
  }
}
