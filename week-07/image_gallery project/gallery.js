
var ids = [
            {id: "151925471", title: "Showreeel", info:"showreeel info info info infoo", pic:"https://i.vimeocdn.com/video/552940994_780x439.jpg"},
            {id: "151927012", title: "Startup Weekend Promo", info:"", pic:"http://i.vimeocdn.com/video/552940918_1280x720.jpg"},
            {id: "151928743", title: "System & Form", info:"Fashion film for Agneskovacs Leather Design", pic:"https://i.vimeocdn.com/video/552940796_780x439.jpg"},
            {id: "138968425", title: "Brewie IndieGoGo Campaigne", info:"Brewie's first IndiGoGo Campaign Video", pic:"https://i.ytimg.com/vi/P-tKKxbzP6I/maxresdefault.jpg"},
            {id: "152844581", title: "Technodub Seance VI. Promo", info:"", pic:"https://i.vimeocdn.com/video/552946121_780x439.jpg"},
            {id: "152843609", title: "We Are Rockstars Music Video", info:"", pic:"https://i.vimeocdn.com/video/552945598_780x439.jpg"},
            {id: "152842566", title: "GenderStrips", info:"", pic:"https://i.vimeocdn.com/video/552944204_780x439.jpg"},
            {id: "151930737", title: "Clouds", info:"Brewie's first IndiGoGo Campaign Video", pic:"https://i.vimeocdn.com/video/552940685_780x439.jpg"},
            {id: "152840215", title: "Napos Underwear", info:"Animation for Napos UnderWear", pic: "http://i.vimeocdn.com/video/552940857_1280x720.jpg"},
          ]

var buttons = document.querySelector(".button")
var leftButton = document.querySelector(".left")
var rightButton = document.querySelector(".right")
var mainVideo = document.querySelector(".mainVideo")
var thumbnailHolder = document.querySelector(".thumbnailHolder")
var videoTitle = document.querySelector(".videoTitle")
var description = document.querySelector(".description")
var imageHolder = document.querySelector(".imageHolder")
var iframeHolder = document.querySelectorAll(".iframeHolder")

var newDiv = []
var newFrame = []
var newVideo = []

//CREATE AND PLACE HTML ELEMENTS, ADD CLASSES,
for (var t = 0; t < ids.length; t++){
  newDiv[t] = document.createElement("div")
  newFrame[t] = document.createElement("div")
  newVideo[t] = document.createElement("iframe")
  newDiv[t].classList.add("thumbnail")
  newFrame[t].classList.add("iframeHolder")
  newVideo[t].classList.add("video")
  thumbnailHolder.appendChild(newDiv[t])
  imageHolder.appendChild(newFrame[t])
  newFrame[t].appendChild(newVideo[t])
}

//CREATE LINKS TO VIDEOS, CREATE THUMBNAIL IMAGES, CREATE PROPERTIES, CALL FUNCTION
var thumbnails = document.querySelectorAll(".thumbnail")
var videos = document.querySelectorAll(".video")
for (var c = 0; c < thumbnails.length; c++){
  thumbnails[c].style.background = "url(" + ids[c]['pic'] +") no-repeat center center"
  thumbnails[c].style.backgroundSize = "cover"
  videos[c].src = "https://player.vimeo.com/video/" + ids[c]['id'] + "?title=0&byline=0&portrait=0"
  videos[c].width = "100%"
  videos[c].height ="100%"
  videos[c].frameBorder = "0"
  var thumbnailList = document.querySelectorAll(".thumbnail")
  playVideo(c)
}

//POSITIONS
imageHolder.style.left = "0vw"
var position = 0

//PREVIOUS VIDEO, PRINT TITLES, MOTION POSITION
function playPrevVideo() {
  var index
  if (position < 0) {
    position = position + 62
    imageHolder.style.left = String(position) + "vw"
    imageHolder.style.transition ="all 1s ease"
    index = position / (-62)
    videoTitle.textContent = ids[index]["title"]
    description.textContent = ids[index]["info"]
  } else if (position === 0) {
    position = (ids.length-1) * (-62)
    imageHolder.style.left = String(position) + "vw"
    imageHolder.style.transition = "left 0.5s ease"
    index = position / (-62)
    videoTitle.textContent = ids[index]["title"]
    description.textContent = ids[index]["info"]
  }
}

//NEXT VIDEO, PRINT TITLES, MOTION, POSITION
function playNextVideo() {
  var index
  if (position === (ids.length-1) * (-62)) {
    position = 0
    imageHolder.style.left = String(position) + "vw"
    imageHolder.style.transition = "left 0.5s ease"
    index = position / (-62)
    videoTitle.textContent = ids[index]["title"]
    description.textContent = ids[index]["info"]
  } else if (position <= 0) {
    position = position - 62
    imageHolder.style.left = String(position) + "vw"
    imageHolder.style.transition ="all 1s ease"
    index = position / (-62)
    videoTitle.textContent = ids[index]["title"]
    description.textContent = ids[index]["info"]
  }
}

// CLICK ON THUMBNAILS, MOTION, POSITION, MOUSEOVER
function playVideo(index) {
  var num
  thumbnails[index].addEventListener("click", function chooseVideo(){
    position = index * (-62)
    imageHolder.style.left = String(position) + "vw"
    imageHolder.style.transition ="all 1s ease"
    num = position / (-62)
    videoTitle.textContent = ids[num]["title"]
    description.textContent = ids[num]["info"]
  })
  thumbnails[index].addEventListener("mouseover", function changeSize() {
    thumbnails[index].style.marginLeft = "0vw"
    thumbnails[index].style.marginRight = "0vw"
    thumbnails[index].style.marginTop = "-0.5vw"
    thumbnails[index].style.width = "8vw"
    thumbnails[index].style.height = "4.5vw"
    //thumbnails[index].style.opacity = "0.5"
  })
  thumbnails[index].addEventListener("mouseout", function changeSize() {
    thumbnails[index].style.marginLeft = "0.5vw"
    thumbnails[index].style.marginRight = "0.5vw"
    thumbnails[index].style.marginTop = "0vw"
    thumbnails[index].style.width = "7vw"
    thumbnails[index].style.height = "4vw"
    //thumbnails[index].style.opacity = "1"
  })
}

//BUTTON EVENTS
rightButton.addEventListener("click", playNextVideo)
leftButton.addEventListener("click", playPrevVideo)
