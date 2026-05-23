jQuery(document).ready(function ($) {

    if ($('.hero-section').length) {
        var heroSplide = new Splide('.hero-splide', {
            type: 'fade',
            gap: '20px',
            rewind: true,
            arrows: false,
            pagination: false,
            autoplay: true,
            interval: 5000,
            speed: 1000,
        });
        heroSplide.mount();
    }
});