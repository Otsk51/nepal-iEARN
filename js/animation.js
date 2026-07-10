//==============================
// Fade Animation
//==============================

const animatedItems = document.querySelectorAll(

    ".fade-up, .fade-left, .fade-right, .zoom"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

animatedItems.forEach(item=>{

    observer.observe(item);

});



//==============================
// Stagger Gallery Animation
//==============================

const galleryItems = document.querySelectorAll(".gallery-grid img");

galleryItems.forEach((img,index)=>{

    img.style.transitionDelay = `${index*0.08}s`;

});



//==============================
// Timeline Animation
//==============================

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach(item=>{

    observer.observe(item);

});



//==============================
// Card Hover Effect
//==============================

const cards = document.querySelectorAll(

".attraction-card, .people-card"

);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 10;

        const rotateX = (0.5 - y / rect.height) * 10;

        card.style.transform =

        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =

        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});



//==============================
// Gallery Hover Zoom
//==============================

galleryItems.forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transform="scale(1.06)";

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});



//==============================
// Festival Fade
//==============================

const festival = document.querySelector(".festival");

if(festival){

    observer.observe(festival);

}