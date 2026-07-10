//==============================
// Hero Slider
//==============================

const slides = document.querySelectorAll(".hero-slider img");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

// 最初の画像を表示
showSlide(currentSlide);

// 6秒ごとに切り替え
setInterval(nextSlide,6000);



//==============================
// Hero Button Animation
//==============================

const heroButton = document.querySelector(".hero-button");

if(heroButton){

    heroButton.addEventListener("mouseenter",()=>{

        heroButton.style.transform="translateY(-6px) scale(1.05)";

    });

    heroButton.addEventListener("mouseleave",()=>{

        heroButton.style.transform="translateY(0) scale(1)";

    });

}