jQuery(document).ready(function ($) {

    if ($('.hero-section').length) {

        const $heroSection = $('.hero-section');
        const $bgLayer = $('<div class="hero-bg-layer"></div>');

        $heroSection.prepend($bgLayer);

        const slideCount = $('.hero-splide .splide__slide').length;

        // Background update function
        function updateHeroBackground() {
           const activeSlide = slideCount > 1 ? $('.hero-splide .splide__slide.is-active') : $('.hero-splide .splide__slide:first');
            let imgSrc;
            // // Mobile image
            // if ($(window).width() < 575) {
            //     imgSrc = activeSlide.find('.slide-img .mobile-img').attr('src');
            // }
            // // Desktop image
            // else {
            //     imgSrc = activeSlide.find('.slide-img img:not(.mobile-img)').attr('src');
            // }
            imgSrc = activeSlide.find('.slide-img img').attr('src');
            if (imgSrc) {
                if (slideCount > 1) {                
                    setTimeout(function () {
                        $heroSection.removeClass('bg-animate');
                    }, 3000);
                    $heroSection.addClass('bg-animate');
                }
                $heroSection.css('--hero-bg', `url(${imgSrc})`);
                
            }
        }

        var heroSplide = new Splide('.hero-splide', {
            type: 'fade',
            rewind: true,
            arrows: false,
            pagination: true,
            autoplay: true,
            interval: 5000,
            speed: 1000,
            pauseOnHover: false,
            pauseOnFocus: false,
        });
        heroSplide.on('mounted active moved', function () {
            if (slideCount > 1) {
                
                heroSplide.options = {
                    drag: true,
                    pagination: true,
                };
                updateHeroBackground();
                

            } else {
                heroSplide.options = {
                    drag: false,
                    arrows: false,
                    pagination: false,
                    autoplay: false,
					gap: 0,
                };
                updateHeroBackground();
            }

        });
        heroSplide.on('active', function (slide) {
            if (slideCount > 1) {
                // Remove old animation class
                $('.hero-section .section-title').removeClass('is-animate');
                // Add animation to active slide
                $(slide.slide).find('.section-title').addClass('is-animate');
            }

            updateHeroBackground();
        });

        heroSplide.mount();
        // Resize update
        $(window).on('resize', function () {
            updateHeroBackground();
        });
    }

});