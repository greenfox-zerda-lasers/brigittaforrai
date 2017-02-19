'use strict';

var express = require('express');
var app = express();
var playlists = [
    [{ "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
    { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" }],

    [{ "id": 33, "title": "Helloo", "artist": "bjdfbje", "duration": 577, "path": "c:/music/helloo.mp3" },
    { "id": 111, "title": "Brooklyn", "artist": "cats", "duration": 52.12, "path": "c:/music/cats/Brooklyn.mp3" }]
];

app.get('/playlists', function (req, res) {
  res.json(playlists);
});

app.post("/playlists", function postPlaylist (req, res) {
  playlists.push([{"id": 3633}])
  res.send(playlists)
})


app.delete("/playlists/:id", function deletePlaylist (req, res) {
  var result = false
  playlists.forEach(function(playlist, index) {
    playlist.forEach(function(track, num) {
      console.log(track.id)
      console.log(req.params.id, "string")
      if (req.params.id == track.id) {
        playlist.splice(num, 1)
        result = true
      }
    })
  })
  if (result == false) {
    res.sendStatus(404)
  }
  res.send(playlists)
})


app.get('/playlist/tracks', function (req, res) { //path!!
  res.json(playlists[0][0].title + " " + playlists[0][0].artist)
});


app.get("/playlist-tracks/:playlist_id", function deletePlaylist (req, res) {
  var num = req.params.playlist_id
  console.log(num)
  var result = false
  playlists.forEach(function(playlist, index) {
    if (index == num) {
      result = true
    }
  });
  if (result == false) {
    res.sendStatus(404)
  }
  res.send(playlists[num])
})


app.post("/playlist-track/:playlist_id", function postPlaylist (req, res) {
  var num = req.params.playlist_id
  var newTrack = {"name": "new_track"}
  var result = false
  playlists.forEach(function(playlist, index) {
    if (index == num) {
      result = true
      playlists[num].push(newTrack)
    }
  });
  if (result == false) {
    res.sendStatus(404)
  }
  res.send(playlists[num])
})



module.exports = app;
