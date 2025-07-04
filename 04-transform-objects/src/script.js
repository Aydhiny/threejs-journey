import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */

const group = new THREE.Group();

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1.1, 0.2, 1.2),
  new THREE.MeshBasicMaterial({ color: "green" })
);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1.5, 0.5, 1),
  new THREE.MeshBasicMaterial({ color: "blue" })
);

group.add(cube1);
group.add(cube2);
group.add(cube3);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "blue" });
const mesh = new THREE.Mesh(geometry, material);
// Position
mesh.position.x = 0;
mesh.position.y = -0.6;
mesh.position.z = 2;

mesh.position.set(1, -0.8, 1);

// Scale
mesh.scale.x = 5;
mesh.scale.y = 1;

group.position.x = 1;
group.position.y = -10;

scene.add(mesh);
scene.add(group);

// Rotation
mesh.rotation.reorder("XYZ");
mesh.rotation.y = 3.14;
mesh.rotation.z = 3;

// Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 1;
camera.position.x = 1;
scene.add(camera);

camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
