// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic climate example logs a stream
of temperature and humidity to the console.
*********************************************/

var tessel = require('tessel');
var climatelib = require('climate-si7020');

var climate = climatelib.use(tessel.port['A']);

var celsius
var pos
var santa = document.querySelector(".santa")
var size = santa.style.width
var width
var percent

climate.on('ready', function () {
  console.log('Connected to climate module');

  // Loop forever
  setImmediate(function loop () {
    climate.readTemperature('f', function (err, temp) {
      width = window.innerWidth
      percent = (50 *100) / width
      climate.readHumidity(function (err, humid) {
      console.log('Degrees:', ((temp-32) * (5/9)).toFixed(3) + '°C', 'Humidity:', humid.toFixed(4) + '%RH');

      celsius = ((temp-32) * (5/9)).toFixed(3)

      if ( celsius <= 27){
        santa.style.left = 0 +"%"
      } else if ( celsius >= 31 ){
        santa.style.left = 80 +"%"
        //santa.style.left = 100 - percent + "%"
      } else {
        santa.style.left = 40 +"%"
        //santa.style.left = ((100 * celsius) / 31 -50) + "%"
      }

      setTimeout(loop, 300);

      });
    });
  });
});

climate.on('error', function(err) {
  console.log('error connecting module', err);
});


function open() {
  console.log("open lefutott")
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "https://mysterious-dusk-8248.herokuapp.com/todos", true)
  xhr.send()
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.response)
        console.log(response)
        renderer(response)
    }
  }
}
