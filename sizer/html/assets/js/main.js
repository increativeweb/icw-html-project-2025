/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {
    $('[data-bs-toggle="tooltip"]').tooltip();
    if ($('.main-header').length) {
        var lastScrollTop = 0;
        $(window).on('scroll', function () {
            var scrollTop = $(this).scrollTop();

            if (scrollTop > lastScrollTop && scrollTop > 100) {
                $('.main-header').addClass('show-up');
            } else {
                $('.main-header').removeClass('show-up');
            }

            lastScrollTop = scrollTop;
        });
        $('.navbar-toggler').on('click', function () {
            $('.main-header').toggleClass('is-visible');
            $('body').toggleClass('overflow-hidden');
            $(this).toggleClass('is-visible');
        });
    }
});