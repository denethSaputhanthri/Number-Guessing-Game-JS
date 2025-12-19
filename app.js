console.log("js Loaded..!");

// Three.js Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // Transparent background

// Create cubes
const cubes = [];
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

for (let i = 0; i < 50; i++) {
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
    );
    cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    scene.add(cube);
    cubes.push(cube);
}

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    });
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

let guessNumber = Math.floor(Math.random() * 10) + 1;

console.log(guessNumber);

function search() {
    let input = document.getElementById('txt').value;
    if (guessNumber == input) {
        Swal.fire({
            title: "Congratulations",
            text: "You guessed the number correct!",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Play Again",
            customClass: {
                popup: 'bg-gray-800 text-white rounded-lg shadow-lg',
                title: 'text-blue-400 font-bold',
                htmlContainer: 'text-gray-300',
                confirmButton: 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300',
                cancelButton: 'bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ml-2'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload(); // Reload to play again
            }
        });
    } else {
        Swal.fire({
            title: "Try again!",
            text: "Wrong guess!",
            icon: "error",
            customClass: {
                popup: 'bg-gray-800 text-white rounded-lg shadow-lg',
                title: 'text-red-400 font-bold',
                htmlContainer: 'text-gray-300',
                confirmButton: 'bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300'
            }
        });
    }
}



