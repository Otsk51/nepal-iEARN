//==============================
// Smooth Scroll
//==============================

const navItems = document.querySelectorAll('nav a, .hero-button');

navItems.forEach(item=>{

    item.addEventListener("click",function(e){

        const href = this.getAttribute("href");

        // 外部ページ(index.htmlなど)はそのまま遷移
        if(!href.startsWith("#")) return;

        e.preventDefault();

        const target = document.querySelector(href);

        if(!target) return;

        // ヘッダーの高さを取得
        const headerHeight = document.querySelector("header").offsetHeight;

        // スクロール位置を計算
        const targetPosition =
            target.getBoundingClientRect().top
            + window.pageYOffset
            - headerHeight
            - 0;

        window.scrollTo({

            top:targetPosition,

            behavior:"smooth"

        });

    });

});



//==============================
// Scroll Down Animation
//==============================

const scrollDown = document.querySelector(".scroll-down");

if(scrollDown){

    scrollDown.addEventListener("click",()=>{

        const story = document.querySelector("#story");

        if(!story) return;

        const headerHeight = document.querySelector("header").offsetHeight;

        const position =
            story.getBoundingClientRect().top
            + window.pageYOffset
            - headerHeight
            - 0;

        window.scrollTo({

            top:position,

            behavior:"smooth"

        });

    });

}



//==============================
// Back To Top Smooth
//==============================

const topBtn = document.getElementById("topButton");

if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}