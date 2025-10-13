/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();    

    if ($('.main-header').length) {
        if (jQuery(this).scrollTop() > 50) {
            $(".main-header").addClass("fixed-header");
        } else {
            $(".main-header").removeClass("fixed-header");
        }

        $(window).scroll(function () {
            if (jQuery(this).scrollTop() > 50) {
                $(".main-header").addClass("fixed-header");
            } else {
                $(".main-header").removeClass("fixed-header");
            }
        });  
        $('.sidebar-toggler').on('click',function(){
            $(".main-header .mobile-menu").addClass('is-open');
        });
        $('.menu-close').on('click',function(){
            $(".main-header .mobile-menu").removeClass('is-open');
        });
    }
    if ($('li.menu-item-has-children').length) {
        $("li.menu-item-has-children > a, li.menu-item-has-children > span").after('<i class="arrow"></i>');
    }
    
    const megaSelector = 'li.menu-item-has-children';
    if ($(window).width() >= 992) {
        $(megaSelector + ' > a').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const $parent = $(this).parent();
            
            $(megaSelector).removeClass('is-open');
            $parent.toggleClass('is-open');  
            $('.bg-overlay').addClass('is-visible');
        });
        $('.tab-nav-menu .nav-link[data-target]').on('mouseenter', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var id = $(this).attr('data-target'); // e.g. "#tab1"
            $('.tab-nav-menu .nav-link').removeClass('active');
            $('.tab-content .tab-pane').removeClass('active');
            // Show the matching tab pane            
            $('.tab-content .tab-pane' + id).addClass('active');
            $(this).addClass('active');
            
        });
    }
    if ($(window).width() <= 992) {
        $(megaSelector + ' .arrow').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const $parent = $(this).parent();
            
            $(megaSelector).removeClass('is-open');
            $parent.toggleClass('is-open');  
        });
        $('.tab-content .nav-link').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var id = $(this).attr('data-target'); // e.g. "#tab1"
            $('.tab-content .nav-link').removeClass('active');
            $('.tab-content .tab-pane').slideUp().css('opacity', '0');
            // Show the matching tab pane            
            $('.tab-content .tab-pane' + id).slideDown().css('opacity', '1');
            $(this).addClass('active');
            
        });
    }
    $(document).on('click', function() {
        $('.menu-item-has-children').removeClass('is-open');
        $('.bg-overlay').removeClass('is-visible');
    });
    $(megaSelector).find('.sub-menu').on('click', function(e) {
        e.stopPropagation();
    });
    if ($(".icw-progress-goto").length > 0) {
        var progressPath = document.querySelector('.icw-progress-goto path');
        var pathLength = progressPath.getTotalLength();
    
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
    
        updateProgress();
        $(window).scroll(updateProgress);
    
        var offset = 200;
        var duration = 550;
    
        jQuery(window).on('scroll', function() {
            if(jQuery(this).scrollTop() > offset) {
                jQuery('.icw-progress-goto').addClass('active-progress');
            } else {
                jQuery('.icw-progress-goto').removeClass('active-progress');
            }
        });
    
        jQuery('.icw-progress-goto').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
    }

});


// Splide Slider
if ($('.splide:not(.splide-js)').length) {
    $('.splide:not(.splide-js)').each(function() {
        new Splide(this).mount();
        $(this).addClass('icw_splide-with-data'); // Mark as initialized
    });
}

if (document.querySelector('.classes-splide')) {
    const classes_splide = new Splide('.classes-splide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        grid: {
            rows: 2,
            cols: 1,
            gap: {
            row: '30px',
            col: '30px',
            },
        },
        pagination: true,
        arrows: false,
        gap: 0,
        classes: {
            pagination: 'splide__pagination icw-pagination',
        },
        breakpoints: {
            575: {
                perPage: 2,
                autoWidth: true,
            },
        },
    });

    // ✅ Mount with Grid only
    classes_splide.mount(window.splide.Extensions);
}