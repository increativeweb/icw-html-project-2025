jQuery(document).ready(function ($) {
    // Releted Blog Slider 
    if ($('.post-splide').length) {
        var postSplide = new Splide('.post-splide', {
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
					gap: 0,
                };
                $('.post-splide').addClass('slider-disabled');
            } else {
                postSplide.options = {
                    drag: true,
                    pagination: true,
                };
                $('.post-splide').removeClass('slider-disabled');
            }
        });
        postSplide.mount();
    }

    // Blog Filter Collapse
    if (jQuery('.filter-by-category').length) {
        jQuery(document).on("click", ".filter-by-category .category-title", function () {
            $(this).parent().toggleClass('is-open');
            $(this).parent().find(".category-list").stop(true, true).slideToggle(300);
            return false;
        });
    }
});