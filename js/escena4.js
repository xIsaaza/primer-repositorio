//escenario 
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000);
scene.fog = new THREE.Fog(0xFFFFFF, 0.001, 150)


//camara 

const camara = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.001, 1000 );

//render 

const render = new THREE.WebGLRenderer();
render.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( render.domElement );

//geometria 
const points = [];
for ( let i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const geometry = new THREE.LatheGeometry( points );
const material = new THREE.MeshBasicMaterial( { color: 'Black'} );
const lathe = new THREE.Mesh( geometry, material );
scene.add( lathe );

camara.position.z = 50;
camara.position.x = 1;
camara.position.y = 1;

function animate(){

    requestAnimationFrame (animate); 
    lathe.rotation.y += 0.05
    lathe.rotation.x += 0.05
    render.render(scene,camara);
}
animate()