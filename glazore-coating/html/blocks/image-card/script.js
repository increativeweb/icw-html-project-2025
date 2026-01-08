if (jQuery('.industries-splide').length) {

    const industriesSplide = new Splide('.industries-splide', {
        type: 'slide',
        perPage: 4,
        perMove: 1,
        pagination: true,
        arrows: false,
        gap: '2rem',
        breakpoints: {
            1200: { perPage: 3 },
            992: { perPage: 2 },
            767: {
                perPage: 1,
                gap: '1rem',
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