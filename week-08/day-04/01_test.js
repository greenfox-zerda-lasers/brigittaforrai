
'use strict'

var test = require('tape');
var doubler = require('./01.js');

test('true', function(t) {
  t.equal(true, true);
  t.end();
});

test('test doubler() gives back doublednumber', function(t){
  t.equal(doubler(1), 2);
  t.end();
});

test('test doubler() gives back doublednumber', function(t){
  t.equal(doubler('1'), 2);
  t.end();
});
