let currentSlide = 0;
showSlides(currentSlide);

function changeSlide(n) {
    showSlides(currentSlide += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        currentSlide = 0;
    }
    
    if (n < 0) {
        currentSlide = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide].style.display = "block";
}

const textarea = document.getElementById('message');
const container = document.querySelector('.container');

textarea.addEventListener('input', () => {
    textarea.style.height = 'auto'; // Reset height to auto
    textarea.style.height = textarea.scrollHeight + 'px'; // Set to scrollHeight
    container.style.height = 'auto'; // Reset container height
    container.style.height = container.scrollHeight + 'px'; // Set to scrollHeight
});