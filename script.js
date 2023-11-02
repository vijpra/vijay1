const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add more image URLs for the photo gallery
let currentImageIndex = 0;

function changeImage(direction) {
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    } else {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }

    const slideshow = document.getElementById('slideshow');
    slideshow.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Form submitted successfully!');
        });
    }

    // Detect the current page and highlight it in the navigation menu
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('current');
        }
    });
});

setInterval(function () {
    changeImage('next');
}, 5000);
