// HTML, CSS & JavaScript Projects
const bg_image = document.getElementById('bg-image');

window.addEventListener('scroll', () => {
    updateImage()
})

function updateImage() {
    bg_image.style.opacity = 1 - window.pageYOffset / 800;
    bg_image.style.backgroundSize = cover - window.pageYOffset + '%';
}