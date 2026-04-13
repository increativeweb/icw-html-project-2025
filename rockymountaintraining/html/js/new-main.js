/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function ($) {
    
    /* MENU TOGGLE */
    if ($('li.menu-item-has-children').length) {
        $("li.menu-item-has-children > a").after('<i class="arrow"></i>');
    }
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
    
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $('li.menu-item-has-children .arrow').removeClass('is-active');
        $('.sub-menu').slideUp();
        $(this).toggleClass('is-active');        
        $(this).parent().find('.sub-menu').first().slideToggle(300);       
    });

    $('.toggle-button').on('click', function () {
        $(".main-header").toggleClass('is-visible');
        $('body').toggleClass('overflow-hidden');
        $(this).toggleClass('is-visible');
    });
});

// STICKY UP DOWN
var didScroll;
var lastScrollTop = 0;
var delta = 0;
var navbarHeight = $('.main-header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = true;
    }
}, 0);

function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
    return;
    
    if (st > lastScrollTop && st > navbarHeight) {
        $('.main-header').removeClass('nav-down').addClass('nav-up');
    } else {
        if (st + $(window).height() < $(document).height()) {
        $('.main-header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
};