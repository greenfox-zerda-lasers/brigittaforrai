//SLIDER CREATE
var trackSlider = document.querySelector(".track-slider")
var volumeSlider = document.querySelector(".volume-slider")

noUiSlider.create(trackSlider, {
  start: [0],
  connect: "lower",
  range: {
    "min" : 0,
    "max" : 100
  }
})

noUiSlider.create(volumeSlider, {
  start: [0],
  connect: "lower",
  range: {
    "min" : 0,
    "max" : 100
  }
})



//PLAYLISTS!!!!!!!!!!

var playlistHandle = (function() {

  //PLAYLISTS objects
  var playlists = [
    all = {name: "All tracks", details: []},
    fav = {name: "Favourites", details: []}
  ]


  playlists[0].details = [
    {artist: "Organoid", title: "Purple Drift", source: "https://github.com/greenfox-academy/teaching-materials/blob/master/javascript/project-music-player/music/Organoid_-_09_-_Purple_Drift.mp3?raw=true"},
    {artist: "Ars Sonor", title: "Never give up", source: "https://github.com/greenfox-academy/teaching-materials/blob/master/javascript/project-music-player/music/Ars_Sonor_-_02_-_Never_Give_Up.mp3?raw=true"},
    {artist: "Doctor Turtle", title: "Doctor Talos Answers the Door", source: "https://github.com/greenfox-academy/teaching-materials/blob/master/javascript/project-music-player/music/Doctor_Turtle_-_Doctor_Talos_Answers_The_Door.mp3?raw=true"}
  ]

  playlists[1].details = [
    {artist: "Organoid", title: "Purple Drift", source: "https://github.com/greenfox-academy/teaching-materials/blob/master/javascript/project-music-player/music/Organoid_-_09_-_Purple_Drift.mp3?raw=true"}
  ]
  console.log(playlists[0], playlists[1])


  var audioTracks = document.querySelector(".audio-tracks")
  var playlistList = document.querySelector(".playlists")
  var playlistsElem

  //ADD LISTS + TRACKS TO HTML
  addPlaylistsToDom = function() {

    for (var i = 0; i < playlists.length; i++) {
      //ADD PLAYLISTS TO LIST
      playlistsElem = document.createElement("div")
      var trackName = playlists[i].name
      playlistsElem.className ="playlist"
      playlistsElem.innerHTML = trackName
      playlistList.appendChild(playlistsElem)

      /*if ((i+1) % 2 != 0) {
        playlistsElem.style.backgroundColor = "rgba(225, 225, 225, 0.7)"
      }*/
    }
  }
  addPlaylistsToDom()

  //PLAYLIST SELECTOR
  selectPlaylist: (function () {

    var playlistsElemsAll = document.querySelectorAll(".playlist")
    playlistsElemsAll.forEach(function(elem, index){
      elem.addEventListener("click", function(){
        this.classList.toggle("activePlaylist")
        console.log(this.classList)
        showTracks(index)
        setUpTrack(index)
      })
    })
  })()

  //PRINTS AVAILABLE TRACKS OF SELECTED PLAYLIST
  var showTracks = function (index){

    var tracks = document.querySelector(".tracks")
    tracks.innerHTML = ""

    for (var i = 0; i < playlists[index].details.length; i++) {
      var track = document.createElement("div")
      track.classList.add("track")
      tracks.appendChild(track)
      var trackName = playlists[index].details[i].title
      var number = i + 1
      var trackNum = document.createElement("div")
      trackNum.classList.add("track-number")
      trackNum.innerHTML = number
      var trackTitle = document.createElement("div")
      trackTitle.classList.add("track-title")
      trackTitle.innerHTML = trackName
      track.appendChild(trackNum)
      track.appendChild(trackTitle)
    }
  }

  var n = 0
  var audio = document.querySelector("audio")

  var setUpTrack = function(index) {

    audio.src = playlists[index].details[n].source
    audio.load()
    audio.play()
    audio.addEventListener("ended", function(){
      n++
      if(n >= playlists[index].details.length) {
        index++
        if (index >= playlists.length) {
          index = 0
          n = 0
        }
      } else {
        setUpTrack(index)
      }
    })
  }

  var controllerEvents = (function () {
    var playbutton = document.querySelector(".play-pause")
    playbutton.addEventListener("click", function() {
      if(audio.paused) {
        audio.play()
        console.log("play")
      } else {
        audio.pause()
        console.log("pause")
      }
    })
  })()


})()
