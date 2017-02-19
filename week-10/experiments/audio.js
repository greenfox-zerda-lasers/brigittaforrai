var audio = document.querySelector(".audio")
var button = document.querySelector("button")


audio.load()
audio.addEventListener("loadstart", function () {
  console.log(event.type + " happened")
})

audio.addEventListener("progress", function() {
  console.log(event.type + " happened")
  var ranges = []
  for(var i = 0; i < audio.buffered.length; i++) {
    ranges.push(
      [audio.buffered.start(i), audio.buffered.end(i)]
    )
  }
})


button.addEventListener("click", function(){
  if(audio.paused)
  {
    audio.play();
    button.innerHTML = "pause"
    console.log(parseInt(audio.duration / 60) + ":" + parseInt(audio.duration % 60))
    console.log(parseInt(audio.currentTime))
  }
  else
  {
    audio.pause();
    button.innerHTML = "play"
  }
})


audio.addEventListener("play", function() {
  console.log(event.type + " happened")
})

audio.addEventListener("pause", function() {
  console.log(event.type + " happened")
})

audio.addEventListener("ended", function() {
  console.log(event.type + " happened")
})
