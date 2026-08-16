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

            // 一度表示したら監視を終了
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.1
});


animatedItems.forEach(item => {
    observer.observe(item);
});


//==============================
// Gallery Animation
//==============================

const galleryItems = document.querySelectorAll(
    ".gallery-grid img"
);

galleryItems.forEach((img, index) => {

    img.style.transitionDelay = `${index * 0.08}s`;

});


//==============================
// Gallery Hover
// PC only
//==============================

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