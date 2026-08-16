//==============================
// Fade Animation
//==============================

const animatedItems = document.querySelectorAll(
    ".fade-up, .fade-left, .fade-right, .zoom"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

animatedItems.forEach(item => {
    observer.observe(item);
});


//==============================
// Stagger Gallery Animation
//==============================

const galleryItems = document.querySelectorAll(".gallery-grid img");

galleryItems.forEach((img, index) => {

    img.style.transitionDelay = `${index * 0.08}s`;

});


//==============================
// Gallery Hover Zoom
//==============================

// PCだけホバー拡大
if (window.matchMedia("(min-width: 769px)").matches) {

    galleryItems.forEach(img => {

        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.06)";
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });

    });

}


//==============================
// Festival Fade
//==============================

const festival = document.querySelector(".festival");

if (festival) {
    observer.observe(festival);
}