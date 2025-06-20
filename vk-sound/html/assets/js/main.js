/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();

   
    if ($('.main-header').length) {
        if (jQuery(this).scrollTop() > 50) {
            $('.main-header .navbar').addClass('fixed-header');
        } else {
            $('.main-header .navbar').removeClass('fixed-header');
        }

        $(window).scroll(function () {
            if (jQuery(this).scrollTop() > 50) {
                $('.main-header .navbar').addClass('fixed-header');
            } else {
                $('.main-header .navbar').removeClass('fixed-header');
            }
        });
        $('.navbar-toggler').on('click',function(){
            $(this).toggleClass('is-open');
            $('.main-header').toggleClass('is-open');
            $('body').toggleClass('overflow-hidden');
        });
    }
    if ($('li.menu-item-has-children').length) {
        $('li.menu-item-has-children > a').after('<i class="arrow"></i>');
    }
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.sub-menu').first().toggle(300);
    });
});
if ($('.hero-slider').length) {
    var swiper = new Swiper('.hero-slider', {
        speed: 600,
        parallax: true,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
if ($('.logo-slider').length) {
    var swiper = new Swiper('.logo-slider', {
        slidesPerView: 10,
        loop: true,
        centeredSlides: true,
        spaceBetween: 50,
        speed: 2000,
        autoplay: {
            delay: 0,
            enabled: true,
        }
    });
}
if ($('.card-slider').length) {
    var swiper = new Swiper('.card-slider', {
        slidesPerView: 4,
        loop: true,
        spaceBetween: 30,
        autoplay: true,
        speed: 2000,
        autoplay: {
            delay: 1000,
            enabled: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}