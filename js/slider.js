//==============================
// Hero Slider
//==============================

const slides = document.querySelectorAll(".hero-slider img");

let currentSlide = 0;


function showSlide(index) {

    if (slides.length === 0) {
        return;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}


function nextSlide() {

    if (slides.length === 0) {
        return;
    }

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}


// 最初の画像を表示
showSlide(currentSlide);


// 6秒ごとに切り替え
if (slides.length > 1) {

    setInterval(() => {
        nextSlide();
    }, 6000);

}