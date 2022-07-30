import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import "./index.css";
import * as THREE from 'three';
import { useEffect } from 'react';
import { AmbientLight, GridHelper } from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() =>{
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 );
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas:document.querySelector('#bg'),
  alpha: true,
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(-10);
camera.position.setX(-100);
camera.position.setY(-100);





const geometry = new THREE.OctahedronGeometry(1, 3, 16, 100) 
const material = new THREE.MeshStandardMaterial( {color: 0xffffff, wireframe: true});
const poly = new THREE.Mesh( geometry, material);

scene.add(poly)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);

scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement)


const bgTexture = new THREE.TextureLoader().load('src/assets/pureblack.jpg');
scene.background = new THREE.Color( 0x000000 );

/*const floareTexture = new THREE.TextureLoader().load('floaredor.jpg')
const floare = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial( {map: floareTexture})
);
scene.add(floare);*/

// ball

const moonTexture = new THREE.TextureLoader().load('src/assets/water.jpg');
const normalTexture = new THREE.TextureLoader().load('src/assets/1black.jpg');


function moveCamera(){
  const t = document.body.getBoundingClientRect().top;

  poly.rotation.x -= 0.002;
  poly.rotation.y -= 0.002;
  poly.rotation.z -= 0.002;
  poly.position.x = -5.5;

  camera.position.z = t *-0.01;
  camera.position.x = t *-0.0002;
  camera.position.y = t *-0.0002;
  camera.position.z = 3.1 
  camera.position.x = 0.068
  camera.position.y = 0.068
  console.log(1)
}


document.body.onscroll = moveCamera;
moveCamera();

function animate(){
  requestAnimationFrame(animate);
  poly.rotation.x += 0.01;
  poly.rotation.y += 0.005;
  poly.rotation.z += 0.01;
  pointLight.position.x += 1;
  pointLight.position.y += 3;
  pointLight.position.z += 1;
  controls.update();

  renderer.render( scene, camera);

}
animate();
})

  return (
    <html>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <body>
    <img class="bg_image" src="src/assets/bg.svg" alt="" />
    <div>
      <canvas id="bg" />
    </div>

    <div class="nav-container">
        <div class="wrapper" >
        <nav>
                    <div class="logo">
                        UTH DIGITAL
                    </div>
                    <ul class="nav-items" style={{ marginLeft: '21.55rem' }} >
                        <li>
                            <a href="#">Home</a>
                        </li>

                        <li>
                            <a href="#">About</a>
                        </li>

                        <li>
                            <a href="#">Services</a>
                        </li>

                        <li>
                            <a class="nav-btn-container" href="#">
                                <img class="connect-btn" src="src/assets/connect.svg" alt=""/>
                                <div class="connect-btn-text">Connect</div>
                            
                            </a>
                        </li>

                    </ul>
                </nav>
        </div>
    </div>
    <div class="header-container">
            <div class="wrapper">
                <header>
                    <div class="hero-container">
                        <div class="hello">Hello.</div>
                        <div class= "landingtext">We are UpTheHill Digital. We are passionate about creating amazing brands and digital experiences.</div>

                    </div>
                    <div class="hero-image"></div>
                </header>
            </div>
        </div>
        <script src="" async defer></script>
    </body>
    </html>
  )
};


export default App
