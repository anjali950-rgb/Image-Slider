const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"];

let currentIndex = 0;
const slide = document.getElementById("slider");

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    slide.src = images[currentIndex];
}
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slide.src = images[currentIndex];
}