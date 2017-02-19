var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC ", true);
xhr.send()


xhr.onreadystatechange = ready

var body = document.querySelector("body")

function ready () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    var giphy = JSON.parse(xhr.response)

    for (i = 0; i < 16; i++) {
      var image = document.createElement("img")
      image.src= giphy.data[i].images.downsized_still.url
      image.dataset.fullImg = giphy.data[i].images.downsized.url
      body.appendChild(image)
      image.addEventListener("click", function (event){
        this.src = this.dataset.fullImg
      })
    }


  }
}
