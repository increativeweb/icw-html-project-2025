jQuery(document).ready(function ($) {
    var publicationSplide = new Splide('.publication-splide', {
        type: 'loop',
        rewind: true,
        arrows: true,
        pagination: false,
        autoplay: true,
        interval: 4000,
        autoWidth: true,
        perPage: 1,
        perMove: 1,
        focus  : 'center',
    });
    publicationSplide.mount();
});