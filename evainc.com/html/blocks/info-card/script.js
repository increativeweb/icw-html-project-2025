jQuery(document).ready(function ($) {
    if ($('.info-card-splide').length) {
        let infoCardSplide;

        function initSplide() {

            if (infoCardSplide) {
                infoCardSplide.destroy(true);
            }

            infoCardSplide = new Splide('.info-card-splide', {
                type: 'loop',
                gap: '30px',
                arrows: true,
                pagination: false,
                autoplay: true,
                interval: 5000,
                speed: 1000,
                perPage: 3,
                perMove: 1,
                updateOnMove : true,
                breakpoints: {
                    1200: {
                        perPage: 2,
                        autoWidth: true,
                        focus: 0,
                        arrows: false,
                        pagination: true,
                    },
                    992: {
                        padding: { left: 15, right: 15 }
                    },
                    767: {
                        perPage: 1,
                        gap: '20px',
                    },
                }
            });

            infoCardSplide.mount();
        }

        initSplide();

        let resizeTimer;

        $(window).on('resize', function () {
            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(function () {
                initSplide();
            }, 200);
        });
    }
});