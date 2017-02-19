"use strict"

var test = require ("tape")
var request = require("supertest")
var app = require('../server')

test("first test", function (t){
  t.end()
})

test('Correct playlists returned', function (t) {
  request(app)
    .get('/playlists')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      //console.log(res.body)
      t.error(err, "No error")
      t.end();
    });
});

test("new playlist", function (t) {
  request(app)
  .post("/playlists")
  .expect("Content-Type", /json/)
  .expect(200)
  .end(function (err, res) {
    //console.log(res.body)
    t.error(err, "No error")
    t.end()
  })
})

test("delete playlist by id", function (t) {
  request(app)
  .delete("/playlists/21")
  .expect("Content-Type", /json/)
  .expect(200)
  .end(function (err, res) {
    //console.log(res.body)
    t.error(err, "No error")
    t.end()
  })
})


test("delete playlist by id 404", function (t) {
  request(app)
  .delete("/playlists/10")
  .expect(404)
  .end(function (err, res) {
    console.log(res.body)
    t.error(err, "No error")
    t.end()
  })
})

test("playlist's all tracks", function (t) {
  request(app)
    .get('/playlist/tracks')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      //console.log(res.body)
      t.error(err, "No error")
      t.end();
    });
});

test("by playlist id_all tracks ", function (t) {
  request(app)
    .get('/playlist-tracks/1')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      //console.log(res.body)
      t.error(err, "No error")
      t.end();
    });
});

test("add track to playlist by id ", function (t) {
  request(app)
    .get('/playlist-tracks/1')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      //console.log(res.body)
      t.error(err, "No error")
      t.end();
    });
});
