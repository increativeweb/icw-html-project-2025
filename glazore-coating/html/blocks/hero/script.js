if (jQuery('.hero-splide').length) {
    const heroSplide = new Splide('.hero-splide', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: false,
        updateOnMove: true,
        classes: {
            pagination: 'splide__pagination is-dark',
        },
    });
    heroSplide.mount();


    jQuery(window).on('resize', function () {
        heroSplide.refresh();
    });
}