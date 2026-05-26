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
    
});
function initCategoryCollapse() {

    $(document)
        .off('click.categoryFilter')
        .on('click.categoryFilter', '.filter-by-category .category-title', function (e) {

            if ($(window).width() <= 992) return;

            e.preventDefault();

            $(this).parent().toggleClass('is-open');

            $(this).siblings('.category-list').stop(true, true).slideToggle(300);
        });
}

// Load + resize
$(window).on('load resize', initCategoryCollapse);
function toggleCategoryFilter() {
    const isMobile = jQuery(window).width() < 992;

    jQuery('.filter-by-category').removeClass('is-open', !isMobile);
    jQuery(document).off('click.categoryFilter').on('click.categoryFilter', '.filter-by-category .category-title', function (e) {
        e.preventDefault();
        
        if (jQuery(this).parent().hasClass("is-open")) {
            jQuery(this).parent().removeClass("is-open");
        } else {
            jQuery('.filter-by-category').removeClass('is-open');
            jQuery(this).parent().addClass("is-open");
        }
    });
}

$(window).on('load resize', toggleCategoryFilter);