jQuery(document).ready(function ($) {
    if($('.hero-section').length) {
        var heroSplide = new Splide('.hero-splide', {
            type: 'fade',
            rewind: true,
            arrows: false,  
            pagination: true,
            autoplay: true,
            interval: 10000,
            pauseOnHover: false,
            pauseOnFocus: false,
        });
        const $heroSection = $('.hero-section');

        // Update background function
        function updateHeroBackground() {
            const activeSlide = $('.hero-splide .splide__slide.is-active');
            let imgSrc;
            // Mobile
            if ($(window).width() < 575) {
                imgSrc = activeSlide.find('.slide-img .mobile-img').attr('src');
            } 
            // Desktop
            else {
                imgSrc = activeSlide.find('.slide-img img:not(.mobile-img)').attr('src');
            }
            if (imgSrc) {
                $heroSection.css({
                    'background-image': 'url(' + imgSrc + ')',
                });
            }
        }
        // On mounted + slide change
        heroSplide.on('mounted move', function () {
            updateHeroBackground();
        });
        $(window).on('resize', function () {
            updateHeroBackground();
        });

        heroSplide.mount();

        // Initial
        updateHeroBackground();
    }
});