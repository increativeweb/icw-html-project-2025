jQuery(document).ready(function ($) {
    var postSplide = new Splide('.post-splide', {
        type: 'loop',
        rewind: true,
        arrows: false,
        pagination: true,
        // autoplay: true,
        // interval: 4000,
        perPage: 4,
        perMove: 1,
        gap: 30,
        omitEnd: true,
        breakpoints: {
            1200: {
                perPage: 3,
            },
            992: {
                autoWidth: true,
                gap: 20,
                padding: 15,
            },
        }
    });
    postSplide.mount();
});