// Releted Blog Slider 
if (jQuery('.related-post-splide').length) {
    var postSplide = new Splide('.related-post-splide', {
        type: 'slide',
        rewind: true,
        arrows: false,
        pagination: true,
        perPage: 4,
        perMove: 1,
        gap: 30,
        omitEnd: true,
        breakpoints: {
            1200: {
                type: 'loop',
                perPage: 2,
                autoWidth: true,
            },
            992: {
                padding: { left: 15, right: 15 }
            },
            767: {
                perPage: 1,
                gap: 20,
            },
        }
    });
    postSplide.on('mounted resize', function () {
        const slideLength = postSplide.length;
        const isDesktop = window.innerWidth > 1200;
        if (isDesktop && slideLength <= 4) {
            postSplide.options = {
                drag: false,
                arrows: false,
                pagination: false,
                autoplay: false,
                gap: 30,
            };
            jQuery('.related-post-splide').addClass('slider-disabled');
        } else {
            postSplide.options = {
                drag: true,
                pagination: true,
            };
            jQuery('.related-post-splide').removeClass('slider-disabled');
        }
    });
    postSplide.mount();
}