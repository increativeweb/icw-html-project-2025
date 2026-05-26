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
function toggleCategoryFilter() {

    $(document)
        .off('click.categoryFilter')
        .on('click.categoryFilter', '.filter-by-category .category-title', function (e) {

            e.preventDefault();

            const $parent = $(this).parent();
            const $list = $(this).siblings('.category-list');
            const isDesktop = $(window).width() > 992;

            // Desktop (>992px)
            if (isDesktop) {
                $parent.toggleClass('is-open');
                $list.stop(true, true).slideToggle(300);
            }

            // Mobile (<992px)
            else {
                if ($parent.hasClass('is-open')) {
                    $parent.removeClass('is-open');
                } else {
                    $('.filter-by-category').removeClass('is-open');
                    $parent.addClass('is-open');
                }
            }
        });

    // Reset styles on resize
    if ($(window).width() < 992) {
        $('.filter-by-category').removeClass('is-open');
    } else {
        $('.filter-by-category').addClass('is-open');
        $('.filter-by-category .category-list').removeAttr('style');
    }
}

$(window).on('load resize', toggleCategoryFilter);