//==============================
// Smooth Scroll
//==============================

const navItems = document.querySelectorAll(
    "#navMenu a, .hero-button"
);

navItems.forEach(item => {

    item.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        // #から始まらないリンクは通常通り
        if (!href || !href.startsWith("#")) {
            return;
        }

        const target = document.querySelector(href);

        if (!target) {
            return;
        }

        e.preventDefault();

        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


//==============================
// Scroll Down Animation
//==============================

const scrollDown = document.querySelector(".scroll-down");

if (scrollDown) {

    scrollDown.addEventListener("click", () => {

        const story = document.querySelector("#story");

        if (!story) return;

        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 0;

        const position =
            story.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

    });

}