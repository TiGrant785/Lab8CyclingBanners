'use strict';
window.onload = cycle;

const slides = [
    {
        src: "images/TokyoSkyline.jpg",
        url: "https://www.travelanddestinations.com/top-things-to-see-and-do-in-tokyo/",
        caption: "Tokyo Skyline"
    },

    {
        src: "images/TokyoTower.jpg",
        url: "https://www.tokyo-prestige.com/en/monuments-en/tokyo-tower.html",
        caption: "Tokyo Tower"
    },

    {
        src: "images/Shinjuku.jpg",
        url: "https://www.cnn.com/travel/article/tokyo-cultural-attractions/index.html",
        caption: "Shinjuku City"
    },

    {
        src: "images/Akihabara.jpg",
        url: "https://tokyocheapo.com/locations/central-tokyo/akihabara-central-tokyo/",
        caption: "Akihabara"
    },

    {
        src: "images/CherryBlossoms.jpg",
        url: "https://reaction.life/japans-cherry-blossom-viewing-parties-the-history-of-chasing-the-fleeting-beauty-of-sakura/",
        caption: "Cherry Blossoms in Japan"
    },

    {
        src: "images/SensojiTemple.jpg",
        url: "https://livejapan.com/en/in-tokyo/in-pref-tokyo/in-asakusa/article-a0000554/",
        caption: "Sensoji Temple in Asakusa"
    }
];
    let bnrCntr = 0;
    function cycle () {
    bnrCntr = bnrCntr + 1;
    if (bnrCntr == slides.length) 
          bnrCntr = 0; 
    
    slide_image.src = slides[bnrCntr].src;
    slide_text.innerHTML = slides[bnrCntr].caption;

    slide_link.href = slides[bnrCntr].url;

    if (slides[bnrCntr].url.length > 0) {
       slide_image.style.cursor = 'pointer';
       slide_image.onclick = function() {
           window.location.href = slides[bnrCntr].url;
       }
    }
    setTimeout(cycle, 3000);
};
