
//GLOBAL VARIABLES
var audioTracks = document.querySelector(".audio-tracks")
var playlistList = document.querySelector(".playlists")
var playlistsElem
var audio = document.querySelector("audio")
var dataBase
var newPL
var user
var get = "GET"
var post = "POST"
var playlistsURL = "http://localhost:3000/playlists"
var tracksAllURL = "http://localhost:3000/playlist-tracks"
var menu = document.querySelector(".drop-down-menu")
var dirPath = "/music/"



//AJAXXX
var ajax = function (request, url, dataToSend, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open(request, url, true)
  if (request !== 'DELETE' ) {
			xhr.setRequestHeader('Content-Type', 'application/json');
	}
  xhr.send(dataToSend)
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.response)
        console.log(xhr.status)
        callback(response)
    }
  }
}


//DRAW UI PARTS
var drawUi = (function () {

  //RENDER PLAYLISTS
  var renderPlaylists = function(response) {
    console.log(response, "response")
    playlistList.innerHTML = ""
    for (var i = 0; i < response.length; i++) {
      playlistsElem = document.createElement("div")
      playlistsElem.className ="playlist"
      playlistsElem.dataset.id = response[i].id
      playlistName = document.createElement("div")
      playlistName.className ="playlist-name"
      playlistName.dataset.id = response[i].id
      var trackName = response[i].playlist
      playlistName.innerHTML = trackName
      playlistList.appendChild(playlistsElem)
      playlistsElem.appendChild(playlistName)
      if (response[i].system != 1) {
        playlistDelete = document.createElement("div")
        playlistDelete.className ="deletePlButton"
        playlistDelete.dataset.id = response[i].id
        playlistsElem.appendChild(playlistDelete)
      }
    }
    drawUi.selectPlaylist()
    mainController.deletePlaylistEvent()
  }


  //RENDER MAIN PLAYLIST TRACKS
  var renderTracks = function(response) {
    console.log(response, "rendertracks")
    var tracks = document.querySelector(".tracks")
    tracks.innerHTML = ""
    for (var i = 0; i < response.length; i++) {
      var track = document.createElement("div")
      track.classList.add("track")
      tracks.appendChild(track)
      var trackArtist = response[i].artist
      var trackTitle = response[i].title
      var trackLength = response[i].duration
      var number = i + 1
      var trackNum = document.createElement("div")
      var trackName = document.createElement("div")
      trackNum.classList.add("track-number")
      trackNum.innerHTML = number
      trackName.classList.add("track-title")
      trackName.innerHTML = trackArtist + " - " + trackTitle
      track.appendChild(trackNum)
      track.appendChild(trackName)
    }
    var allTracks = document.querySelectorAll(".track")
    allTracks.forEach(function(elem, index){
      elem.dataset.id = response[index].id
    })
    console.log(response, "tracks")
    setUpTrack(response, 0)
  //  mainController.selectTrack(response)
  }



  //RENDER NEW PLAYLIST
  var addPlaylist = function(response) {
    var trackName = newPL.playlist
    var playlistElem = document.createElement("div")
    playlistElem.className ="playlist"
    var playlistName = document.createElement("div")
    playlistName.className ="playlist-name"
    playlistName.innerHTML = trackName
    var playlistDelete = document.createElement("div")
    playlistDelete.className ="deletePlButton"
    playlistList.appendChild(playlistElem)
    playlistElem.appendChild(playlistName)
    playlistElem.appendChild(playlistDelete)
    playlistName.dataset.id = response.insertId
    playlistElem.dataset.id = response.insertId
    playlistDelete.dataset.id = response.insertId
    drawUi.selectPlaylist()
    mainController.deletePlaylistEvent()
  }


  //PLAYLIST SELECTOR by id -> get TRACKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  var selectPlaylist = function () {
    var playlistsElemsAll = document.querySelectorAll(".playlist")
    console.log(playlistsElemsAll)
    playlistsElemsAll.forEach(function(elem, index){
      console.log(elem)
      elem.addEventListener("click", function(){
        playlistsElemsAll.forEach(function(elem, index){
          elem.classList.remove("activePlaylist")
        })
        this.classList.add("activePlaylist")
        //renderTracks(index) --idval meghivni
        //setupTrack(index)
        // ajax("POST", "http://localhost:3000/playlist-tracks/:playlist_id", id, drawUi.renderTracks) // send selected id
      })
    })
  }

  /// DELETE PLAYLIST BY ID
  var removePlaylistElemfromDom = function (index) {
    //index-xel kene meghivni!!!!!
    console.log(index, "index")
    var playlistsElemsAll = document.querySelectorAll(".playlist")
    playlistsElemsAll.forEach(function(elem) {
      if (index == elem.dataset.id && index != 1) {
        playlistList.removeChild(elem)
      }
    })
  }


  // SETUP CURRENT TRACK ----->ez mar nem a ui resze!! kiszervezni controller ????????????

  var setUpTrack = function(response, index) {
    console.log("setup track")
    audio.src = dirPath + response[index].path
    audio.id = response[index].id
    console.log(audio.src)
    audio.load()
    //audio.play()
    //if play

    mainController.play()
    audio.addEventListener("ended", function(){
      n++
      if(n >= response.length) {
        index++
        if (index >= response.length) {
          index = 0
        }
      } else {
        setUpTrack(response, index)
      }
    })
  }

  //RENDER DROPDOWN MENU
  var renderMenu = function(response) {
    console.log(response)
    console.log(response.length)
    menu.innerHTML = ""
    response.forEach(function(elem, index){
      var menuItem = document.createElement("div")
      menuItem.className = "menu-item"
      menuItem.innerHTML = elem.playlist
      menu.appendChild(menuItem)
    })
    var openMenu = document.querySelector(".open")
    openMenu.style.height = String(response.length * 40) + "px"
  }

  //render times
  //render sliders
  //render art
  //render background
  //render currently playing

  return {
    renderPL: renderPlaylists,
    selectPlaylist: selectPlaylist,
    renderTracks: renderTracks,
    setUpTrack: setUpTrack,
    addPlaylist: addPlaylist,
    removePL: removePlaylistElemfromDom,
    renderMenu: renderMenu
  }

})()



//CONTROLLER!!!!!!!!
var mainController = (function () {

  var trackDir = "file:///D:/greenfox/git/brigittaforrai/week-10/musicplayer/music/"
  var playbutton = document.querySelector(".play-pause")
  var prev = document.querySelector(".prev")
  var next = document.querySelector(".next")
  var timeLeft = document.querySelector(".time-left")
  var currentTime = document.querySelector(".current-Time")
  var shuffle = document.querySelector(".shuffle")
  var mute = document.querySelector(".mute")
  var addPlaylist = document.querySelector(".add-new-playlist")
  var fav = document.querySelector(".add-to-favourite")


  //PLAYBUTTON
  var play = function(id) {
    playbutton.addEventListener("click", function() {
      if(audio.paused) {
        audio.play()
        console.log("play")
        playbutton.style.background = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDEyIDE1Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjNjY2OwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggaWQ9IlBhdXNlX0ljb24iIGRhdGEtbmFtZT0iUGF1c2UgSWNvbiIgY2xhc3M9ImNscy0xIiBkPSJNOTAuMDE2LDM5OS4wMTZoMmExLDEsMCwwLDAsMS0xdi0xM2ExLDEsMCwwLDAtMS0xaC0yYTEsMSwwLDAsMC0xLDF2MTNBMSwxLDAsMCwwLDkwLjAxNiwzOTkuMDE2Wm03LTE0djEzYTEsMSwwLDAsMCwxLDFoMmExLDEsMCwwLDAsMS0xdi0xM2ExLDEsMCwwLDAtMS0xaC0yQTEsMSwwLDAsMCw5Ny4wMTYsMzg1LjAxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04OS4wMzEgLTM4NCkiLz4KPC9zdmc+Cg==') no-repeat center center";
        playbutton.style.backgroundSize = "fill"
      } else {
        audio.pause()
        console.log("pause")
        playbutton.style.background = "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIHBhdGggewogICAgICAgIGZpbGw6ICM2NjY7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iaW5mbyIvPjxnIGlkPSJpY29ucyI+PHBhdGggZD0iTTMuOSwxOC45VjUuMWMwLTEuNiwxLjctMi42LDMtMS44bDEyLDYuOWMxLjQsMC44LDEuNCwyLjksMCwzLjdsLTEyLDYuOUM1LjYsMjEuNSwzLjksMjAuNSwzLjksMTguOXoiLz48L2c+PC9zdmc+') no-repeat center center";
        playbutton.style.backgroundSize = "fill"
      }
    })
  }


  //SELECT track
  var selectTrack = function(response, id) {
    console.log("select track")
    var allTracks = document.querySelectorAll(".track")
    var track = document.querySelectorAll(".track")
    //track.classList.add("active-track")
    allTracks.forEach(function(elem, index){
      elem.addEventListener("click", function() {
        allTracks.forEach(function(item){
          item.classList.remove("active-track")
        })
        this.classList.add("active-track")
        id = this.dataset.id
        drawUi.setUpTrack(response, id)
        //audio.play()
      })
    })
  }

  var playTrack = function () {

  }

  //NEXT BUTTON
  next.addEventListener ("click", function() {
    console.log(audio.id, "actual track id")
    //hogy talalom meg, h mi az aktualis szam??
  })

  //PREV BUTTON
  prev.addEventListener("click", function() {
    console.log(audio.id, "actual track id")
    //hogy talalom meg, h mi az aktualis szam??
  })

  //SHUFFLE BUTTON
  shuffle.addEventListener("click", function() {
    //change icon
    //randomize by id ?
  })

  //MUTE BUTTON
  mute.addEventListener("click", function() {
    //change icon
    //disable sound
  })



  //ADD PLAYLIST - BUTTON DONE
  addPlaylist.addEventListener("click", function() {
    user = window.prompt("playlist name?")
    newPL = {playlist: user, system: 0}
    console.log(newPL)
    //newPL = {playlist: "uj", system: 0}
    ajax(post, playlistsURL, JSON.stringify(newPL), drawUi.addPlaylist)
  })

  //DELETE PLAYLIST
  var deletePlaylistEvent = function (){
    var id
    var deleteButtonAll = document.querySelectorAll(".deletePlButton")
    deleteButtonAll.forEach(function(elem, index){
      elem.addEventListener("click", function(){
        console.log(this.dataset.id, "dataset")
        id = this.dataset.id
        //id-val kene meghivni!!!
        ajax('DELETE', playlistsURL +'/'+ id, '', function(){
          drawUi.removePL(id)
        } );
        console.log(id, "id")
      })
    })
  }


  //ADD TRACK TO PLAYLIST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  var addTrackToPlaylist = document.querySelector(".add-to-playlist")
  addTrackToPlaylist.addEventListener("click", function() {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open")
    } else {
      menu.classList.add("open")
      //tudni kene, h mi szol es annak az id-jat elkuldeni
      ajax(get, playlistsURL, "", drawUi.renderMenu)
    }
  })


  return {
    deletePlaylistEvent: deletePlaylistEvent,
    play: play,
    selectTrack: selectTrack
  }


})()






//CREATE SLIDER
var sliders = (function() {
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
})()


ajax(get, playlistsURL, "", drawUi.renderPL)
ajax(get, tracksAllURL, "", drawUi.renderTracks)
