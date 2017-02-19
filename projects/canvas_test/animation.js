window.onload = function(){

  var canvas = document.querySelector(".canvas")
  var context = canvas.getContext("2d")

  var w = window.innerWidth //offsetWidth
  var h = window.innerHeight

  canvas.width = w
  canvas.height = h

  var amount = 2000
  var flakes = []

  var gravity = 9.81

  for(var i = 0; i < amount; i++) {
    var radius = Math.random() * 1.5 + 1
    flakes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: radius,
        g: gravity * (radius/10),
    })
  }

  function draw() {
    context.clearRect(0, 0, w, h)
    context.beginPath()

    for(var i = 0; i < flakes.length; i++){
      var t = Math.random() * 0.5 + 0.5
      console.log(t)
      context.fillStyle = 'rgba(225,255,225,0.8)'

      var flake = flakes[i]
      context.moveTo(flake.x, flake.y)
      context.arc(flake.x, flake.y, flake.r, 0, Math.PI*2, true )
      console.log(context.fillStyle)
    }
    context.fill()
  }

  draw()
}
