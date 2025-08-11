import * as THREE from "three";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#242424");
/**
 * Objects
 */
const businessCardGroup = new THREE.Group();

const geometry = new THREE.BoxGeometry(2, 1, 0.2);
const material = new THREE.MeshBasicMaterial({
  color: new THREE.Color("#242424"),
});
const mesh = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.BoxGeometry(2.2, 1.1, 0.2);
const material2 = new THREE.MeshBasicMaterial({
  color: new THREE.Color("aliceblue "),
});
const mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.z += 0.01;
businessCardGroup.add(mesh, mesh2);
scene.add(businessCardGroup);

// Fonts
const fontLoader = new FontLoader();
let fontMesh;
const loadFonts = () => {
  fontLoader.load("fonts/helvetiker_regular.typeface.json", (font) => {
    const fontGeometry = new TextGeometry("yo THERE", {
      font: font,
      size: 0.5,
      depth: 0.05,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.01,
      bevelOffset: 0,
      bevelSegments: 5,
    });
    const fontMaterial = new THREE.MeshStandardMaterial();
    fontMesh = new THREE.Mesh(fontGeometry, fontMaterial);
    scene.add(fontMesh);
  });
};
loadFonts();

/**
 * Sizes
 */
const sizes = {
  width: 1750,
  height: 1080,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

const tick = () => {
  businessCardGroup.rotation.y += 0.01;
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
