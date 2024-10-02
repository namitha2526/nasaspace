// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Earth Geometry and Texture
const geometry = new THREE.SphereGeometry(5, 32, 32);
const texture = new THREE.TextureLoader().load('https://threejsfundamentals.org/threejs/resources/images/earth.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// Storm Effect (Aurora Simulation)
const auroraGeometry = new THREE.RingGeometry(5.5, 6.5, 64);
const auroraMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
const aurora = new THREE.Mesh(auroraGeometry, auroraMaterial);
aurora.rotation.x = Math.PI / 2;
scene.add(aurora);

// Camera Position
camera.position.z = 10;

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.001; // Rotate Earth
    aurora.rotation.z += 0.005; // Rotate Aurora
    renderer.render(scene, camera);
}
animate();

// Handle Window Resize
window.addEventListener('resize', function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
