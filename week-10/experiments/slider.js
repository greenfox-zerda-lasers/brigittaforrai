
var slider = document.querySelector(".slider")

noUiSlider.create(slider, {
  start: [50],
  connect: "lower",
  range: {
    "min" : 30,
    "max" : 100,
  }
})
