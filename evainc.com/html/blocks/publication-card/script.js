jQuery(document).ready(function ($) {

    if ($('.relevant-publications-splide').length) {

        var publicationsSplide = new Splide('.relevant-publications-splide', {
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
					// focus: 'center'
                },
                992: {
                    gap: 20,
                },
                767: {
					perPage: 1,
                    gap: 20,
                },
            }
        });

        publicationsSplide.on('mounted resize', function () {

            const slideLength = publicationsSplide.length;
            const isDesktop = window.innerWidth > 1200;

            if (isDesktop && slideLength <= 4) {

                publicationsSplide.options = {
                    drag: false,
                    arrows: false,
                    pagination: false,
                    autoplay: false,
					gap: 0,
                };

                $('.relevant-publications-splide').addClass('slider-disabled');

            } else {

                publicationsSplide.options = {
                    drag: true,
                    pagination: true,
                };

                $('.relevant-publications-splide').removeClass('slider-disabled');
            }

        });

        publicationsSplide.mount();
    }

});