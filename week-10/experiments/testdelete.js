"use strict"

var playlists = [
    [{ "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
    { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" }],

    [{ "id": 33, "title": "Helloo", "artist": "bjdfbje", "duration": 577, "path": "c:/music/helloo.mp3" },
    { "id": 111, "title": "Brooklyn", "artist": "cats", "duration": 52.12, "path": "c:/music/cats/Brooklyn.mp3" }]
];


var id = 33

playlists.forEach(function(elem, index) {
  elem.forEach(function(val, num) {
    if (id === val.id) {
      playlists[index].splice(num, 1)
    } else {
    //  console.log("404")
    }
  })
})

//console.log(playlists[0][0].title + "\n " + playlists[0][0].artist)


// this gyakorlatok

function cica () {
  console.log(this)
}

//function invocation
cica()

const kanape = {
  allat:  cica
}

//method invocaion
kanape.allat()
