"use strict"

var http = require('http')
var express = require('express')
var path = require('path');
var mysql = require('mysql');
var app = express()
var bodyParser = require("body-parser")
var fs = require('fs');
var mm = require('musicmetadata');

app.use(
   express.static(__dirname + '/public'))

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mediaplayer'
})
connection.connect()

app.use(bodyParser.json())

// get playlists DONE -ajax pipa
app.get('/playlists', function (req, res) {
  connection.query('SELECT * FROM playlists', function(err, rows, fields) {
		if (err) throw err;
  		res.json(rows);
	});
});


//post new playlist DONE
app.post('/playlists', function(req, res) {
  connection.query({
    sql: 'INSERT INTO playlists (id, playlist, system) VALUES (?, ?, ?)',
    //values: [5, "hfvhdf", 0]
    values: [req.body.id, req.body.playlist, req.body.system]
  }, function (err, rows) {
      if (err) throw err
        res.send(rows)
    })
})

//delete playlist by id!!!!!!! DONE
app.delete("/playlists/:id", function deletePlaylist (req, res) {
  connection.query({
    sql: "DELETE FROM playlists where id = ? AND system != ?",
    values: [req.params.id, 1]
  }, function(err, rows, fields) {
    if (err) throw err
      res.send(rows)
  })
})

// get all tracks DONE -ajax pipa
app.get("/playlist-tracks", function (req, res) {
  connection.query('SELECT * FROM tracks', function(err, rows, fields) {
		if (err) throw err;
    var counter = 0
    var root = "D:/GREENFOX/git/brigittaforrai/week-10/musicplayer/public/music/"
    var result = []
    rows.forEach(function(elem, index) {
      var parser = mm(fs.createReadStream(root + elem.path), function (err, metadata) {
        if (err) throw err;
        counter++
        console.log(metadata)
        elem.title = metadata.title
        elem.artist = metadata.artist[0]
        elem.album = metadata.album
        elem.duration = metadata.duration
        result.push(elem)
        if (counter == rows.length) {
          res.send(result);
        }
      })
    })
	})
})


//get tracks by playlist id DONE ------ METADATAAAA!!!
app.get("/playlist-tracks/:playlist_id", function deletePlaylist (req, res) {
  connection.query({
    sql: 'SELECT * FROM tracks where playlist_id =?',
    values: [req.params.playlist_id]
  }, function(err, rows, fields) {
    if (err) throw err;
    var counter = 0
    var root = "D:/GREENFOX/git/brigittaforrai/week-10/musicplayer/public/music/"
    console.log(rows, "roooows")
    var result = []
    if (rows.length == 0) {
      res.send(result);
      console.log(rows, "roooows")
    } else {
      rows.forEach(function(elem, index) {
        var parser = mm(fs.createReadStream(root + elem.path), function (err, metadata) {
          if (err) throw err;
          counter++
          //console.log(metadata)
          elem.title = metadata.title
          elem.artist = metadata.artist[0]
          elem.album = metadata.album
          elem.duration = metadata.duration
          result.push(elem)
          if (counter == rows.length) {
            res.send(result);
          }
        })
      })
    }
 })
})

//post new track to playlist(by id) !!!!!!!!!!! MEG NINCS KESZ
/*
app.post("/playlist-tracks/:playlist_id", function postPlaylist (req, res) {
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
})*/

app.post('/playlist-tracks/:playlist_id', function add(req, res) {
  connection.query('INSERT INTO tracks (path, playlist_id) VALUES (?,?)',
  [req.body.path, req.params.playlist_id],
  function(err, f){
    if(err) throw err;
    connection.query('SELECT * FROM tracks', function(req, rows){
      if(err) throw err;
      res.send(rows);
    });
  });
});

//deletes specific track from specific playlist
app.delete("/playlist-tracks/:playlist_id/:track_id", function postPlaylist (req, res) {
  connection.query({
    sql: "DELETE FROM tracks where playlist = ? AND id = ?",
    values: [req.params.playlist_id, req.params.id]
  }, function(err, rows, fields) {
    if (err) throw err;
    var counter = 0
    var root = "D:/GREENFOX/git/brigittaforrai/week-10/musicplayer/public/music/"
    console.log(rows, "roooows")
    var result = []
    if (rows.length == 0) {
      res.send(result);
      console.log(rows, "roooows")
    } else {
      rows.forEach(function(elem, index) {
        var parser = mm(fs.createReadStream(root + elem.path), function (err, metadata) {
          if (err) throw err;
          counter++
          elem.title = metadata.title
          elem.artist = metadata.artist[0]
          elem.album = metadata.album
          elem.duration = metadata.duration
          result.push(elem)
          if (counter == rows.length) {
            res.send(result);
          }
        })
      })
    }
 })
})


//musicmetadata function
app.post("/metadata", function postPlaylist (req, res) {
  connection.query({
		sql: 'INSERT INTO tracks(playlist, system) VALUES(?, ?)',
		values: ['NEW', 0]
	}, function(err, rows, fields) {
		if (err) throw err;
  		res.send(rows);
	});
})


module.exports = app;

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
