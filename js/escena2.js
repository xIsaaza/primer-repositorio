//escenario 
const scene = new THREE.Scene()
var  loader = new THREE.TextureLoader()
loader.load('../img/fotografo-paisajes.jpg', function(texture){
    scene.background = texture
});


//camara 

const camara = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.001, 1000 );

//render 

const render = new THREE.WebGLRenderer();
render.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( render.domElement );

//geometria 
const length = 12, width = 8;

const shape = new THREE.Shape();
shape.moveTo( 0,0 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
	steps: 2,
	depth: 16,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
};

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );

camara.position.z = 50;
camara.position.x = 1;
camara.position.y = 1;

//animación 
function animate(){
	requestAnimationFrame( animate );
    mesh.rotation.y += 0.05;
    mesh.rotation.x += 0.05;
	render.render( scene, camara );
}
animate();
