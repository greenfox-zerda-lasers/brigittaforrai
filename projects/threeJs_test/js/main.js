var scene = new THREE.Scene()

//(field of view, aspect ratio, near and far clipping planes)
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

var body = document.querySelector("body")
document.body.appendChild( renderer.domElement)

var radius = Math.random()
var amount = 10
var geometry
var posX = Math.random()*100
var posY = Math.random()*100
var posZ = Math.random()*100

function createGeometry() {
  for( var i = 0; i <= amount; i++) {
    var material = new THREE.SpriteCanvasMaterial( {
						color: Math.random() * 0x808008 + 0x808080,
						program: program
					} );
					particle = new THREE.Sprite( material );
					particle.position.x = Math.random() * 2000 - 1000;
					particle.position.y = Math.random() * 2000 - 1000;
					particle.position.z = Math.random() * 2000 - 1000;
					particle.scale.x = particle.scale.y = Math.random() * 20 + 10;
					group.add( particle );
  }
}



camera.position.z = 50


function render() {
  requestAnimationFrame( render)
  createGeometry()
  //cube.rotation.y += 0.01
  renderer.render (scene, camera)
}
render()
