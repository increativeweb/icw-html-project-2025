jQuery(document).ready(function ($) {

    if ($('.hero-section').length) {
        const $heroSection = $('.hero-section');
        const $bgLayer = $('<div class="hero-bg-layer"></div>');

        $heroSection.prepend($bgLayer);
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

        // Update background image
        function updateHeroBackground() {

            const activeSlide = $('.hero-splide .splide__slide.is-active');
            let imgSrc;

            // Mobile image
            if ($(window).width() < 575) {
                imgSrc = activeSlide.find('.slide-img .mobile-img').attr('src');
            }
            // Desktop image
            else {
                imgSrc = activeSlide.find('.slide-img img:not(.mobile-img)').attr('src');
            }

            if (imgSrc) {
                // Reset scale animation
                setTimeout(function () {
                    $heroSection.removeClass('bg-animate');
                }, 3000);

                $heroSection.css('--hero-bg', `url(${imgSrc})`);
                    $heroSection.addClass('bg-animate');
            }
        }

        // On slide active
        heroSplide.on('active', function (slide) {
            // Remove old animation class
            $('.hero-section .section-title').removeClass('is-animate');
            // Add animation to active slide
            $(slide.slide).find('.section-title').addClass('is-animate');

            updateHeroBackground();
        });
        heroSplide.on('mounted active moved', function () {
            updateHeroBackground();
        });
        // Resize
        $(window).on('resize', function () {
            updateHeroBackground();
        });
        heroSplide.mount();
    }
});