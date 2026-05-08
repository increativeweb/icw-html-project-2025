jQuery(document).ready(function ($) {
    var heroSplide = new Splide('.hero-splide', {
        type: 'fade',
        rewind: true,
        arrows: false,  
        pagination: true,
        autoplay: true,
        interval: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    heroSplide.mount();
});