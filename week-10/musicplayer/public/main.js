
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
var artwork = document.querySelector(".artwork")
var bg = document.querySelector(".bg")
var trackSlider = document.querySelector(".track-slider")
var volumeSlider = document.querySelector(".volume-slider")



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

var api = function (artist, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=ee125f318852fc7d1c2f4e21458a0035&format=json", true)
  xhr.send()
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.response)
        console.log(xhr.status)
        console.log(response)
        callback(response)
    }
  }
}


//DRAW UI PARTS
var drawUi = (function () {

  var renderArt = function(response) {
    var imagelist = response.artist.image
    console.log(imagelist, "image")
    if (response.artist.image[(imagelist.length)-1]['#text'] == "") {
      artwork.style.backgroundImage = "url(/img/placeholder.png)"
      bg.style.backgroundImage = "url('http://cdn.pcwallart.com/images/gradient-wallpaper-2.jpg')"
    } else {
      artwork.style.backgroundImage = "url(" + response.artist.image[(imagelist.length)-1]['#text'] + ")"
      bg.style.backgroundImage = "url(" + response.artist.image[(imagelist.length)-1]['#text'] + ")"
    }
  }

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
    drawUi.selectPlaylist(response)
    mainController.deletePlaylistEvent()
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
    drawUi.selectPlaylist(response)
    mainController.deletePlaylistEvent()
  }


  //PLAYLIST SELECTOR by id -> get TRACKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  var selectPlaylist = function (response) {
    var init = true
    var id
    var favPL = document.querySelector(".playlist")
    var playlistsElemsAll = document.querySelectorAll(".playlist")
    console.log(playlistsElemsAll)
    playlistsElemsAll.forEach(function(elem, index){
      elem.addEventListener("click", function(){
        init = false
        playlistsElemsAll.forEach(function(elem, index){
          elem.classList.remove("activePlaylist")
        })
        this.classList.add("activePlaylist")
        id = this.dataset.id
        //get trecks my pl id
        ajax(get, tracksAllURL + "/" + id, "", drawUi.renderTracks)
      })
    })
    if (init) {
      favPL.classList.add("activePlaylist")
    } else {
      favPL.classList.remove("activePlaylist")
    }
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

  //RENDER DROPDOWN MENU !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  var renderMenu = function(response) {
    menu.innerHTML = ""
    response.forEach(function(elem, index){
      var menuItem = document.createElement("div")
      menuItem.className = "menu-item"
      menuItem.dataset.id = response[index].id
      menuItem.dataset.path = response[index].path
      menuItem.innerHTML = elem.playlist
      menu.appendChild(menuItem)
    })

    var menuItems = document.querySelectorAll(".menu-item")
    menuItems.forEach(function(item, num){
      item.addEventListener("click", function() {
        //selected track id number
        //var trackPath = item.dataset.path
        var currentSong = document.querySelector(".active-track")
        var trackPath = currentSong.dataset.path
        var playlistID = item.dataset.id
        ajax(post, "/playlist-tracks/" + playlistID, JSON.stringify({path: trackPath}), console.log)
      })
    })
    var openMenu = document.querySelector(".open")
    openMenu.style.height = String(response.length * 40) + "px"
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

    audioHandle.selectTrack(response)
    mainController.buttonPlay()
    mainController.isPlaying()
    //sliderHandle.updateSlider()
    //mainController.nextTrack()
  }

  var renderCurrentlyPlaying = function(response, index) {
    var title = document.querySelector(".current-title")
    var artist = document.querySelector(".current-artist")
    console.log(response, "current")
    if(response.length > 0) {
      title.innerHTML = response[index].title
      artist.innerHTML = response[index].artist
      var artistName = response[index].artist
      api(artistName, drawUi.renderArt)
    }
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
    addPlaylist: addPlaylist,
    removePL: removePlaylistElemfromDom,
    renderMenu: renderMenu,
    renderCurrentlyPlaying: renderCurrentlyPlaying,
    renderArt: renderArt
  }

})()


var audioHandle = (function () {

  var playbutton = document.querySelector(".play-pause")
  var init

  //seek
  var seek = function (percent) {
    audio.currentTime = audio.duration * percent / 100
  }

  var timeupdate = function () {
    var audioDuration = parseInt(audio.duration / 60) + ":" + parseInt(audio.duration % 60)
    console.log(audioDuration)
    var timeLeftText = document.querySelector(".time-left")
    var currentTimeText = document.querySelector(".current-time")
    audio.addEventListener("timeupdate", function() {
      sliderHandle.updateSlider.set(audio.currentTime / audio.duration)
      timeLeftText.innerHTML = parseInt((audio.duration - audio.currentTime) /60) + ":" + parseInt((audio.duration - audio.currentTime) % 60)
      currentTimeText.innerHTML = parseInt(audio.currentTime /60) + ":" + parseInt(audio.currentTime % 60)
    })
  }

  //SELECT track
  var selectTrack = function(response) {
    console.log("select track")
    var id
    var num
    var init = true
    var firstTrack = document.querySelector(".track")
    var allTracks = document.querySelectorAll(".track")
    //var track = document.querySelectorAll(".track")
    allTracks.forEach(function(elem, index){
      elem.addEventListener("click", function() {
        init = false
        allTracks.forEach(function(item){
          item.classList.remove("active-track")
        })
        this.classList.add("active-track")
        id = this.dataset.id
        num = index
        audio.src = dirPath + response[index].path
        audio.load()
        audio.play()
        drawUi.renderCurrentlyPlaying(response, num)
        //mainController.buttonPlay()
        mainController.isPlaying()
      })
      elem.dataset.path = response[index].path
    })
    if (init && response.length > 0) {
      num = 0
      firstTrack.classList.add("active-track")
      audio.src = dirPath + response[0].path
      audio.load()
    } else if (init == false && response.length > 0) {
      firstTrack.classList.remove("active-track")
    }
    mainController.nextTrack(response, num)
    mainController.prevTrack(response, num)
    audioLoop(response, num)
    drawUi.renderCurrentlyPlaying(response, num)
    //mainController.buttonPlay()
    mainController.isPlaying()
  }

  var audioLoop = function(response, index) {
    var allTracks = document.querySelectorAll(".track")
    audio.addEventListener("ended", function() {
      allTracks[index].classList.remove("active-track")
      if(index + 1 < response.length) {
        index++
      } else {
        index = 0
      }
      allTracks[index].classList.add("active-track")
      audio.src = dirPath + response[index].path
      audio.load()
      audio.play()
    })
  }

  return {
    selectTrack: selectTrack,
    audioLoop: audioLoop,
    timeupdate: timeupdate,
  }
})()



//CONTROLLER!!!!!!!!
var mainController = (function () {

  var trackDir = "file:///D:/greenfox/git/brigittaforrai/week-10/musicplayer/music/"
  var playbutton = document.querySelector(".play-pause")
  var prev = document.querySelector(".prev")
  var next = document.querySelector(".next")
  var timeLeftText = document.querySelector(".time-left")
  var currentTimeText = document.querySelector(".current-Time")
  var shuffle = document.querySelector(".shuffle")
  var mute = document.querySelector(".mute")
  var addPlaylist = document.querySelector(".add-new-playlist")
  var fav = document.querySelector(".add-to-favourite")


  //PLAY BUTTON __________BUGOS

  var isPlaying = function () {
    if(audio.paused) {
      playbutton.style.background = "url(/img/play.svg) no-repeat center center"
    } else {
      playbutton.style.background = "url(/img/pause.svg) no-repeat center center"
    }
    audioHandle.timeupdate()
  }


  var buttonPlay = function() {
    console.log("buttonplay")

    playbutton.addEventListener("click", function(){
      if(audio.paused) {
        console.log("play")
        audio.play()
        playbutton.style.background = "url(/img/pause.svg) no-repeat center center"
      } else {
        console.log("pause")
        audio.pause()
        playbutton.style.background = "url(/img/play.svg) no-repeat center center"
      }
    })
  }



  //NEXT BUTTON
  var nextTrack = function (response, index) {
    var allTracks = document.querySelectorAll(".track")
    next.addEventListener ("click", function() {
      allTracks.forEach(function(item, num){
        if(allTracks[num].classList.contains("active-track")){
          item.classList.remove("active-track")
          index = num
        }
      })

      if(index + 1 < response.length) {
        index++
        console.log(index)
      } else {
        index = 0
        console.log(index)
      }
      allTracks[index].classList.add("active-track")
      audio.src = dirPath + response[index].path
      audio.load()
      audio.play()
      drawUi.renderCurrentlyPlaying(response, index)
      //mainController.buttonPlay()
      mainController.isPlaying()
    })
  }


  //PREV BUTTON
  var prevTrack = function (response, index) {
    var allTracks = document.querySelectorAll(".track")
    prev.addEventListener ("click", function() {
      allTracks.forEach(function(item, num){
        if(allTracks[num].classList.contains("active-track")){
          item.classList.remove("active-track")
          index = num
        }
      })

      if(index > 0) {
        index--
        console.log(index)
      } else {
        index = response.length - 1
        console.log(index)
      }
      allTracks[index].classList.add("active-track")
      audio.src = dirPath + response[index].path
      audio.load()
      audio.play()
      drawUi.renderCurrentlyPlaying(response, index)
      //mainController.buttonPlay()
      mainController.isPlaying()
    })
  }

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
        });
        console.log(id, "id")
      })
    })
  }


  //ADD TRACK TO PLAYLIST !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  var addTrackToPlaylist = document.querySelector(".add-to-playlist")
  addTrackToPlaylist.addEventListener("click", function() {
    console.log(menu.classList.contains("open"))
    if (menu.classList.contains("open")) {
      menu.classList.remove("open")
      menu.style.height = "0px"
      menu.innerHTML = ""
    } else {
      menu.classList.add("open")
      ajax(get, playlistsURL, "", drawUi.renderMenu)
    }
  })

  var setVolume = function () {
    //var volumeButton = document.querySelector(".volume-slider .noUi-origin .noUi-handle")
    //console.log(volumeButton, "volume")
    //sliderHandle.updateVolume.set()
    //console.log(sliderHandle.updateVolume.set(), "set")
  }


  return {
    deletePlaylistEvent: deletePlaylistEvent,
    buttonPlay: buttonPlay,
    isPlaying: isPlaying,
    nextTrack: nextTrack,
    prevTrack: prevTrack,
    setVolume: setVolume
  }

})()


//CREATE SLIDER
var sliderHandle = (function() {

  var updateSlider = noUiSlider.create(trackSlider, {
      start: [0],
      connect: "lower",
      range: {
        "min" : 0,
        "max" : 1
      }
    })
    //trackSlider.noUiSlider.set(audio.currentTime / audio.duration)

  var updateVolume = noUiSlider.create(volumeSlider, {
    start: [0.5],
    connect: "lower",
    range: {
      "min" : 0,
      "max" : 1
    }
  })

  return {
    updateSlider: updateSlider,
    updateVolume: updateVolume
  }

})()

sliderHandle.updateVolume.set(0.5)
ajax(get, playlistsURL, "", drawUi.renderPL)
ajax(get, "http://localhost:3000/playlist-tracks/1", "", drawUi.renderTracks)
