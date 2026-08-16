//==============================
// Header Scroll
//==============================

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

}


//==============================
// Top Button
//==============================

const topButton = document.getElementById("topButton");

if (topButton) {

    // 最初は非表示
    topButton.style.display = "none";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            topButton.style.display = "flex";
        } else {
            topButton.style.display = "none";
        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


//==============================
// Active Navigation
//==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        if (!section.id) return;

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});