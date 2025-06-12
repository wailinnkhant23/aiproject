// Lightbox functionality
function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightbox.style.display = 'block';
    lightboxImg.src = src;
    lightboxCaption.innerHTML = caption;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Optional: Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});