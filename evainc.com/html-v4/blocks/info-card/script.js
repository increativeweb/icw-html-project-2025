jQuery(document).ready(function ($) {
    if ($('.info-card-splide').length) {
        var infoCardSplide = new Splide('.info-card-splide', {
            type: 'loop',
            gap: '30px',
            arrows: true,
            pagination: false,
            autoplay: true,
            interval: 5000,
            speed: 1000,
            perPage: 3,
            perMove: 1,
            start: 0,
            trimSpace: false,
            breakpoints: {
                1200: {
                    perPage: 2,
                    autoWidth: true,
                    focus: 'center',
                },
                767: {
                    perPage: 1,
                    gap: '20px',
                },
            }
        });
        infoCardSplide.mount();
    }
});