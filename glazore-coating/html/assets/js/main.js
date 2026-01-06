/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {
    $('[data-bs-toggle="tooltip"]').tooltip();
    if ($('.main-header').length) {

        if (jQuery(this).scrollTop() > 100) {
            $(".main-header").addClass("fixed-header");
        } else {
            $(".main-header").removeClass("fixed-header");
        }

        $(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                $(".main-header").addClass("fixed-header");
            } else {
                $(".main-header").removeClass("fixed-header");
            }
        });

        $('.navbar-toggler').on('click', function () {
            $(".main-header").toggleClass('is-visible');
            $('body').toggleClass('overflow-hidden');
            $(this).toggleClass('is-visible');
        });
    }
    if ($('li.menu-item-has-children').length) {
        $("li.menu-item-has-children").each(function () {
            const link = $(this).find("> a"); // select direct <a>
            link.wrap("<span></span>");       // wrap it inside <span>
        });
        $("li.menu-item-has-children > span").append('<i class="arrow"></i>');
    }
    $('li.menu-item-has-children .arrow').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parents().find('.sub-menu').first().slideToggle(300);

    });


    if ($(".icw-progress-goto").length > 0) {
        var progressPath = document.querySelector('.icw-progress-goto path');
        var pathLength = progressPath.getTotalLength();

        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }

        updateProgress();
        $(window).scroll(updateProgress);

        var offset = 200;
        var duration = 550;

        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.icw-progress-goto').addClass('active-progress');
            } else {
                jQuery('.icw-progress-goto').removeClass('active-progress');
            }
        });

        jQuery('.icw-progress-goto').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        });
    }

});

// Splide Slider
if (jQuery('.splide:not(.splide-js)').length) {
    jQuery('.splide:not(.splide-js)').each(function () {
        new Splide(this).mount();
        jQuery(this).addClass('icw_splide-with-data'); // Mark as initialized
    });
}