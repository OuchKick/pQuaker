import './style.css'
import * as THREE from 'three'
import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

var camera, scene, renderer, model;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const canvas = document.querySelector('canvas.webgl');
const gui = new dat.GUI()


const loaderTwo = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
loaderTwo.setDRACOLoader( dracoLoader );


renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);


loaderTwo.load(
	// resource URL
	'/earth.gltf',
	// called when the resource is loaded
	function ( gltf ) {
		const model = gltf.scene;
		scene.add( model );

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

// // Lights

const pointLight = new THREE.PointLight('#ffffff', 1.5)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

gui.add(pointLight.position, 'x')
gui.add(pointLight.position, 'y')
gui.add(pointLight.position, 'z')

const col = { color: '#c7f5bb' }
gui.addColor(col, 'color').onChange(() => {
    pointLight.color.set(col.color)

})


camera.position.set( 3, 0, 0 );
controls.update();
controls.enableDamping = true;

const animate = function () {
    requestAnimationFrame(animate);



	if (model) {
		model.rotation.y += 0.01;
	}
    controls.update();


    renderer.render(scene, camera);
};

animate();