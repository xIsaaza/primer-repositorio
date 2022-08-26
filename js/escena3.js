//escenario 
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x73049C);
scene.fog = new THREE.Fog(0xFFFFFF, 0.01, 130)


//camara 

const camara = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.001, 1000 );

//render 

const render = new THREE.WebGLRenderer();
render.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( render.domElement );

//geometria 
const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
const material = new THREE.MeshBasicMaterial( {color: 'Blue'} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camara.position.z = 50;
camara.position.x = 1;
camara.position.y = 1;

//animación 
function animate(){
	requestAnimationFrame( animate );
    cylinder.rotation.y += 0.05;
    cylinder.rotation.x += 0.05;
	render.render( scene, camara );
}
animate();