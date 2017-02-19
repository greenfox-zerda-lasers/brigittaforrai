
// Based on the previous example create an array of images taken from flickr
// https://www.flickr.com/photos/jasontravis/26683911430/in/album-72157603258446753/
// https://www.flickr.com/photos/jasontravis/16635664865/in/album-72157603258446753/
// https://www.flickr.com/photos/jasontravis/14195441260/in/album-72157603258446753/

// Display a progress bar while the images are loading
// You can create your own or use the built in HTML5 version:
// https://developer.mozilla.org/en/docs/Web/HTML/Element/progress

var photos = ["https://c7.staticflickr.com/8/7799/26683911430_c4662bf0ec_z.jpg", "https://c2.staticflickr.com/9/8574/16635664865_9f5e9e2918_z.jpg", "https://c5.staticflickr.com/3/2929/14195441260_7201745aaa_z.jpg"]

var body = document.querySelector("body")
var count = 0

var progress = document.createElement("progress")
progress.value = 0
progress.max = "100"
progress.innerHTML = 0, " %"
body.appendChild(progress)

for (i=0; i <photos.length; i++) {
  var image = document.createElement("img")
  image.style.display = "none"
  body.appendChild(image)
  image.src = photos[i]
  image.addEventListener("load", function(){
    this.style.display="block";
    count += 1;
    progress.value = count * 100/(photos.length);
    progress.innerHTML = count * 100/(photos.length);
  })
}
