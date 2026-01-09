if (jQuery('.industries-splide').length) {

    const industriesSplide = new Splide('.industries-splide', {
        type: 'slide',
        perPage: 4,
        perMove: 1,
        pagination: true,
        arrows: false,
        gap: '2rem',

        classes: {
            pagination: 'splide__pagination is-light',
        },
        breakpoints: {
            1200: {
                type: 'loop',
                perPage: 3,
                autoWidth: true,
            },
            992: {
                perPage: 2,
                gap: '1rem',
                padding: { left: '1rem', right: '1rem' }
            },
            767: {
                perPage: 1,
            },
        }
    });

    industriesSplide.on('mounted', function () {
        const slideCount = industriesSplide.Components.Slides.getLength();
        console.log(slideCount);

        if (window.innerWidth > 1200 && slideCount <= 4 && slideCount == 4) {
            industriesSplide.options = {
                ...industriesSplide.options,
                drag: false,
                keyboard: false,
                flickPower: 0,
                arrows: false,
                pagination: false,
            };

            industriesSplide.refresh(); // 🔑 REQUIRED
        }
    });

    industriesSplide.mount();
}