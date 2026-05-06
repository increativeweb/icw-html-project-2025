jQuery(document).ready(function ($) {
    var testimonialSplide = new Splide('.testimonial-splide', {
        type: 'loop',
        rewind: true,
        arrows: true,
        pagination: false,
        autoplay: true,
        interval: 4000,
        perPage: 1,
        perMove: 1,
    });
    testimonialSplide.mount();
});